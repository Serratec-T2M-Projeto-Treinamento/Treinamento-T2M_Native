import React, { useState, useEffect } from 'react';
import {
  CadastroButton,
  InputCadastro,
  CadastroText,
  CadastroScroll,
  InputArea,
  Container,
  ButtonView,
  EspacoView,
  PickerView,
  Titulo
} from './styles';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { Alert, Text } from 'react-native';
import { AuthContext } from '../../services/auth';
import { mask } from 'remask';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-native-datepicker';

export default function Cadastro({ navigation }) {
  const { isAdmin } = React.useContext(AuthContext);
  const [posicoes, setPosicoes] = useState([]);

  const padraoCpf = '999.999.999-99'
  const padraoRg = '99.999.999-9'
  const padraoCep = '99999-999'

  const getPosicao = async () => {
    try {
      const response = await axios.get('https://api-treinamento-t2m.herokuapp.com/posicoes')
      setPosicoes(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosicao()
  }, []);

  const handlePermissao = (p) => {
    if (p) {
      return <Picker.Item color='#181818' label='Administrador' value={2} />
    }
  }


  const cadastroValidations = yup.object().shape({
    nome: yup.string().min(5, ({ min }) => `Mínimo de ${min} caracteres`).max(50, ({ max }) => `Maximo de ${max} caracteres`).required("Nome é obrigatório"),
    dataNascimento: yup.date("Inserir uma data valida").required("Data de nascimento é obrigatória"),
    email: yup.string().email("Inserir um email valido").max(30, ({ max }) => `Maximo de ${max} caracteres`).required("Email é obrigatório"),
    pix: yup.string().max(40, ({ max }) => `Maximo de ${max} caracteres`),
    cpf: yup.string().min(14, ({ min }) => `Minimo de ${min} caracteres`).required("CPF é obrigatório"),
    rg: yup.string().min(9, ({ min }) => `Minimo de ${min} caracteres`).required("RG é obrigatório"),
    rua: yup.string().max(100, ({ max }) => `Maximo de ${max} caracteres`).required("Rua é obrigatório"),
    numero: yup.string().max(10, ({ max }) => `Maximo de ${max} caracteres`).required("Numero é obrigatório"),
    complemento: yup.string().max(15, ({ max }) => `Maximo de ${max} caracteres`),
    bairro: yup.string().max(50, ({ max }) => `Maximo de ${max} caracteres`).required("Bairro é obrigatório"),
    cidade: yup.string().max(50, ({ max }) => `Maximo de ${max} caracteres`).required("Cidade é obrigatório"),
    estado: yup.string().required("Estado é obrigatório"),
    cep: yup.string().min(8, ({ min }) => `Minimo de ${min} caracteres`).required("CEP é obrigatório"),
    pais: yup.string().max(15, ({ max }) => `Maximo de ${max} caracteres`).required("Pais é obrigatório"),
  });

  return (
    <Container>
      <CadastroScroll>
        <EspacoView></EspacoView>
        <Titulo>Cadastrar Colaboradores</Titulo>
        <Formik initialValues={{
          nome: "",
          dataNascimento: "",
          email: "",
          pix: "",
          cpf: "",
          rg: "",
          cnh: "",
          permissao: 0,
          idPosicoes: 1,
          rua: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          estado: "",
          cep: "",
          pais: ""
        }}
          onSubmit={async (values) => {
            const colaborador = {
              nome: values.nome,
              dataNascimento: values.dataNascimento,
              email: values.email,
              pix: values.pix,
              cpf: mask(values.cpf, padraoCpf),
              rg: mask(values.rg, padraoRg),
              cnh: values.cnh,
              permissao: values.permissao,
              posicao: {
                idPosicoes: values.idPosicoes,
              },
            };
            const endereco = {
              rua: values.rua,
              numero: values.numero,
              complemento: values.complemento,
              bairro: values.bairro,
              cidade: values.cidade,
              estado: values.estado,
              cep: mask(values.cep, padraoCep),
              pais: values.pais,
            };
            try {
              const responseColaborador = await axios.post("https://api-treinamento-t2m.herokuapp.com/colaboradores", colaborador);
              const idColaborador = responseColaborador.data.idColaboradores;
              const responseEndereco = await axios.post("https://api-treinamento-t2m.herokuapp.com/enderecos", endereco);
              const idEndereco = responseEndereco.data.idEnderecos;

              const response = await axios.put(
                `https://api-treinamento-t2m.herokuapp.com/colabsEndrs/colaborador/${idColaborador}/enderecoAInserir/${idEndereco}`
              );
              Alert.alert("Cadastro realizado com sucesso!");
              navigation.reset({
                routes: [{ name: 'Lista de Colaboradores' }]
              });
            } catch {
              Alert.alert('Os Campos CPF, RG, email e Pix devem ter valores únicos, algum colaborador cadastrado já deve possuir algum desses valores !!!')
            }
          }}
          validationSchema={cadastroValidations}>
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched, isValid }) => (
            <>
              <InputArea>
                <InputCadastro name='nome' onChangeText={handleChange('nome')} onBlur={handleBlur('nome')} value={values.nome} placeholder='Nome' placeholderTextColor='#181818' />
                {(errors.nome && touched.nome) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.nome}</Text>
                }
                <InputCadastro name='rg' onChangeText={handleChange('rg')} onBlur={handleBlur('rg')} value={mask(values.rg, padraoRg)} placeholder='RG' placeholderTextColor='#181818' />
                {(errors.rg && touched.rg) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.rg}</Text>
                }
                <InputCadastro name='cpf' onChangeText={handleChange('cpf')} onBlur={handleBlur('cpf')} value={mask(values.cpf, padraoCpf)} placeholder='CPF' placeholderTextColor='#181818' />
                {(errors.cpf && touched.cpf) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.cpf}</Text>
                }
                <DatePicker style={{ width: 200 }}
                  date={values.dataNascimento}
                  format='YYYY-MM-DD'
                  minDate='1970-01-01'
                  maxDate={new Date()}
                  onDateChange={(data) => setFieldValue('dataNascimento', data)} />
                <InputCadastro name='email' onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={(values.email)} placeholder='E-mail' placeholderTextColor='#181818' />
                {(errors.email && touched.email) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.email}</Text>
                }
                <InputCadastro name='pix' onChangeText={handleChange('pix')} onBlur={handleBlur('pix')} value={values.pix} placeholder='Pix' placeholderTextColor='#181818' />
                {(errors.pix && touched.pix) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.pix}</Text>
                }
                <PickerView>
                  <Picker
                    mode='dropdown'
                    itemStyle={{ color: '#181818' }}
                    selectedValue={values.cnh}
                    onValueChange={(itemValue) => setFieldValue('cnh', itemValue)}>
                    <Picker.Item color='#181818' label='Sem CNH' value='' />
                    <Picker.Item color='#181818' label='A' value='A' />
                    <Picker.Item color='#181818' label='B' value='B' />
                    <Picker.Item color='#181818' label='C' value='C' />
                    <Picker.Item color='#181818' label='D' value='D' />
                    <Picker.Item color='#181818' label='E' value='E' />
                  </Picker>
                </PickerView>
                <PickerView>
                  <Picker
                    mode='dropdown'
                    itemStyle={{ color: '#181818' }}
                    selectedValue={values.idPosicoes}
                    onValueChange={(itemValue) => setFieldValue('idPosicoes', itemValue)}>
                    {posicoes.map((p, i) => (
                      <Picker.Item color='#181818' key={i} label={p.nome} value={p.idPosicoes} />
                    )
                    )}
                  </Picker>
                </PickerView>
                <PickerView>
                  <Picker
                    mode='dropdown'
                    itemStyle={{ color: '#181818' }}
                    selectedValue={values.permissao}
                    onValueChange={(itemValue) => setFieldValue('permissao', itemValue)}>
                    <Picker.Item color='#181818' label='Colaborador' value={0} />
                    <Picker.Item color='#181818' label='Líder' value={1} />
                    {handlePermissao(isAdmin)}
                  </Picker>
                </PickerView>
                <InputCadastro name='pais' onChangeText={handleChange('pais')} onBlur={handleBlur('pais')} value={values.pais} placeholder='País' placeholderTextColor='#181818' />
                {(errors.pais && touched.pais) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.pais}</Text>
                }
                <PickerView>
                  <Picker
                    mode='dropdown'
                    itemStyle={{ color: '#181818' }}
                    selectedValue={values.estado}
                    onValueChange={(itemValue) => setFieldValue('estado', itemValue)}>
                    <Picker.Item color='#181818' label='Escolha um Estado' value='' />
                    <Picker.Item color='#181818' value='AC' label='Acre' />
                    <Picker.Item color='#181818' value='AL' label='Alagoas' />
                    <Picker.Item color='#181818' value='AP' label='Amapá' />
                    <Picker.Item color='#181818' value='AM' label='Amazonas' />
                    <Picker.Item color='#181818' value='BA' label='Bahia' />
                    <Picker.Item color='#181818' value='CE' label='Ceará' />
                    <Picker.Item color='#181818' value='DF' label='Distrito Federal' />
                    <Picker.Item color='#181818' value='ES' label='Espírito Santo' />
                    <Picker.Item color='#181818' value='GO' label='Goiás' />
                    <Picker.Item color='#181818' value='MA' label='Maranhão' />
                    <Picker.Item color='#181818' value='MT' label='Mato Grosso' />
                    <Picker.Item color='#181818' value='MS' label='Mato Grosso do Sul' />
                    <Picker.Item color='#181818' value='MG' label='Minas Gerais' />
                    <Picker.Item color='#181818' value='PA' label='Pará' />
                    <Picker.Item color='#181818' value='PB' label='Paraíba' />
                    <Picker.Item color='#181818' value='PR' label='Paraná' />
                    <Picker.Item color='#181818' value='PE' label='Pernambuco' />
                    <Picker.Item color='#181818' value='PI' label='Piauí' />
                    <Picker.Item color='#181818' value='RJ' label='Rio de Janeiro' />
                    <Picker.Item color='#181818' value='RN' label='Rio Grande do Norte' />
                    <Picker.Item color='#181818' value='RS' label='Rio Grande do Sul' />
                    <Picker.Item color='#181818' value='RO' label='Rondônia' />
                    <Picker.Item color='#181818' value='RR' label='Roraima' />
                    <Picker.Item color='#181818' value='SC' label='Santa Catarina' />
                    <Picker.Item color='#181818' value='SP' label='São Paulo' />
                    <Picker.Item color='#181818' value='SE' label='Sergipe' />
                    <Picker.Item color='#181818' value='TO' label='Tocantins' />
                  </Picker>
                  {(errors.estado && touched.estado) &&
                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.estado}</Text>
                  }
                </PickerView>
                <InputCadastro name='cidade' onChangeText={handleChange('cidade')} onBlur={handleBlur('cidade')} value={values.cidade} placeholder='Cidade' placeholderTextColor='#181818' />
                {(errors.cidade && touched.cidade) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.cidade}</Text>
                }
                <InputCadastro name='bairro' onChangeText={handleChange('bairro')} onBlur={handleBlur('bairro')} value={values.bairro} placeholder='Bairro' placeholderTextColor='#181818' />
                {(errors.bairro && touched.bairro) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.bairro}</Text>
                }
                <InputCadastro name='rua' onChangeText={handleChange('rua')} onBlur={handleBlur('rua')} value={values.rua} placeholder='Logradouro' placeholderTextColor='#181818' />
                {(errors.rua && touched.rua) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.rua}</Text>
                }
                <InputCadastro name='numero' onChangeText={handleChange('numero')} onBlur={handleBlur('numero')} value={values.numero} placeholder='Número' placeholderTextColor='#181818' />
                {(errors.numero && touched.numero) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.numero}</Text>
                }
                <InputCadastro name='complemento' onChangeText={handleChange('complemento')} onBlur={handleBlur('complemento')} value={values.complemento} placeholder='Complemento' placeholderTextColor='#181818' />
                {(errors.complemento && touched.complemento) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.complemento}</Text>
                }
                <InputCadastro name='cep' onChangeText={handleChange('cep')} onBlur={handleBlur('cep')} value={mask(values.cep, padraoCep)} placeholder='CEP' placeholderTextColor='#181818' />
                {(errors.cep && touched.cep) &&
                  <Text style={{ fontSize: 15, color: 'red' }}>{errors.cep}</Text>
                }
              </InputArea>
              <ButtonView>
                <CadastroButton onPress={() => handleSubmit()}
                  disabled={!isValid}>
                  <CadastroText>SALVAR</CadastroText>
                </CadastroButton>
              </ButtonView>
            </>
          )}
        </Formik>
        <EspacoView></EspacoView>
      </CadastroScroll>
    </Container>
  )















}
 //   const { isAdmin } = React.useContext(AuthContext);
//   const [posicoes, setPosicoes] = useState([]);

//   const padraoCpf = '999.999.999-99'
//   const padraoRg = '99.999.999-9'
//   const padraoCep = '99999-999'

//   const handlePermissao = (p) => {
//     if (p) {
//       return <Picker.Item color='#181818' label='Administrador' value={2} />
//     }
//   }

//   const getPosicao = async () => {
//     try {
//       const response = await axios.get('https://api-treinamento-t2m.herokuapp.com/posicoes')
//       setPosicoes(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     getPosicao()
//   }, []);

//   const [colaborador, setColaborador] = useState(
//     {
//       nome: '',
//       rg: '',
//       cpf: '',
//       email: '',
//       dataNascimento: '',
//       pix: '',
//       cnh: '',
//       permissao: 0,
//       posicao: {
//         idPosicoes: 1
//       }
//     });

//   const [endereco, setEndereco] = useState({
//     pais: '',
//     estado: '',
//     cidade: '',
//     bairro: '',
//     rua: '',
//     numero: '',
//     complemento: '',
//     cep: ''
//   });

//   async function postColaborador() {
//     try {

//       const responseColaborador = await axios.post('https://api-treinamento-t2m.herokuapp.com/colaboradores', colaborador)
//       const idColaborador = responseColaborador.data.idColaboradores


//       const responseEndereco = await axios.post('https://api-treinamento-t2m.herokuapp.com/enderecos', endereco)
//       const idEndereco = responseEndereco.data.idEnderecos


//       await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsEndrs/colaborador/${idColaborador}/enderecoAInserir/${idEndereco}`)
//       Alert.alert('Colaborador cadastrado com sucesso!')

//       navigation.reset({
//         routes: [{ name: 'Lista de Colaboradores' }]
//       })

//     } catch (error) {
//       Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
//       console.error(error);
//     }

//   }
//   console.log(colaborador);
//   console.log(endereco);
//   return (
//     <Container>
//       <CadastroScroll>
//         <CadasView>
//           <CadasText>Insira seu Cadastro</CadasText>
//         </CadasView>
//         <InputArea>
//           <CadastroText>Nome Completo:</CadastroText>
//           <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, nome: text })} placeholder='Nome' placeholderTextColor='#181818' />
//           <CadastroText>RG:</CadastroText>
//           <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, rg: text })} keyboardType='number-pad' placeholder='RG' placeholderTextColor='#181818' />
//           <CadastroText>CPF:</CadastroText>
//           <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cpf: text })} keyboardType='number-pad' placeholder='CPF' placeholderTextColor='#181818' />
//           <CadastroText>E-mail:</CadastroText>
//           <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, email: text })} keyboardType='email-address' autoCapitalize='none' placeholder='E-mail' placeholderTextColor='#181818' />
//           <CadastroText>Data de nascimento:</CadastroText>
//           {/* <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, dataNascimento: text })} placeholder='Data de Nascimento' placeholderTextColor='#181818' /> */}
//           <DataView>
//             <DateField labelDate='Dia' labelMonth='Mês' labelYear='Ano' onSubmit={(value) => setColaborador({ ...colaborador, dataNascimento: value })} styleInput={{ fontSize: 22, paddingLeft: 5 }} />
//           </DataView>
//           {/* <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cnh: text })} placeholder='CNH' placeholderTextColor='#181818' /> */}
//           <CadastroText>Pix:</CadastroText>
//           <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, pix: text })} autoCapitalize='none' placeholder='Pix' placeholderTextColor='#181818' />
//           <CadastroText>CNH:</CadastroText>
//           <PickerView>
//             <Picker
//               mode='dropdown'
//               itemStyle={{ color: '#181818' }}
//               selectedValue={colaborador.cnh}
//               onValueChange={(itemValue) => setColaborador({ ...colaborador, cnh: itemValue })}>
//               <Picker.Item color='#181818' label='Escolha uma categoria' value='' />
//               <Picker.Item color='#181818' label='A' value='A' />
//               <Picker.Item color='#181818' label='B' value='B' />
//               <Picker.Item color='#181818' label='C' value='C' />
//               <Picker.Item color='#181818' label='D' value='D' />
//               <Picker.Item color='#181818' label='E' value='E' />
//               <Picker.Item color='#181818' label='AB' value='AB' />
//             </Picker>
//           </PickerView>
//           <CadastroText>Cargo:</CadastroText>
//           <PickerView>
//             <Picker
//               mode='dropdown'
//               itemStyle={{ color: '#181818' }}
//               selectedValue={colaborador.posicao.idPosicoes}
//               onValueChange={(itemValue) => setColaborador({ ...colaborador, posicao: { ...colaborador.posicao, idPosicoes: itemValue } })}>
//               {posicoes.map((p, i) => (
//                 <Picker.Item color='#181818' key={i} label={p.nome} value={p.idPosicoes} />
//               )
//               )}
//             </Picker>
//           </PickerView>
//           <CadastroText>Posição:</CadastroText>
//           <PickerView>
//             <Picker
//               mode='dropdown'
//               itemStyle={{ color: '#181818' }}
//               selectedValue={colaborador.permissao}
//               onValueChange={(itemValue) => setColaborador({ ...colaborador, permissao: itemValue })}>
//               {handlePermissao(isAdmin)}
//               <Picker.Item color='#181818' label='Líder' value={1} />
//               <Picker.Item color='#181818' label='Colaborador' value={0} />
//             </Picker>
//           </PickerView>
//           <CadastroText>País</CadastroText>
//           <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, pais: text })} placeholder='País' placeholderTextColor='#181818' />
//           <CadastroText>Estado:</CadastroText>
//           <PickerView>
//             <Picker
//               mode='dropdown'
//               itemStyle={{ color: '#181818' }}
//               selectedValue={endereco.estado}
//               onValueChange={(itemValue) => setEndereco({ ...endereco, estado: itemValue })}>
//               <Picker.Item color='#181818' label='Escolha um Estado' value='' />
//               <Picker.Item color='#181818' value='AC' label='Acre' />
//               <Picker.Item color='#181818' value='AL' label='Alagoas' />
//               <Picker.Item color='#181818' value='AP' label='Amapá' />
//               <Picker.Item color='#181818' value='AM' label='Amazonas' />
//               <Picker.Item color='#181818' value='BA' label='Bahia' />
//               <Picker.Item color='#181818' value='CE' label='Ceará' />
//               <Picker.Item color='#181818' value='DF' label='Distrito Federal' />
//               <Picker.Item color='#181818' value='ES' label='Espírito Santo' />
//               <Picker.Item color='#181818' value='GO' label='Goiás' />
//               <Picker.Item color='#181818' value='MA' label='Maranhão' />
//               <Picker.Item color='#181818' value='MT' label='Mato Grosso' />
//               <Picker.Item color='#181818' value='MS' label='Mato Grosso do Sul' />
//               <Picker.Item color='#181818' value='MG' label='Minas Gerais' />
//               <Picker.Item color='#181818' value='PA' label='Pará' />
//               <Picker.Item color='#181818' value='PB' label='Paraíba' />
//               <Picker.Item color='#181818' value='PR' label='Paraná' />
//               <Picker.Item color='#181818' value='PE' label='Pernambuco' />
//               <Picker.Item color='#181818' value='PI' label='Piauí' />
//               <Picker.Item color='#181818' value='RJ' label='Rio de Janeiro' />
//               <Picker.Item color='#181818' value='RN' label='Rio Grande do Norte' />
//               <Picker.Item color='#181818' value='RS' label='Rio Grande do Sul' />
//               <Picker.Item color='#181818' value='RO' label='Rondônia' />
//               <Picker.Item color='#181818' value='RR' label='Roraima' />
//               <Picker.Item color='#181818' value='SC' label='Santa Catarina' />
//               <Picker.Item color='#181818' value='SP' label='São Paulo' />
//               <Picker.Item color='#181818' value='SE' label='Sergipe' />
//               <Picker.Item color='#181818' value='TO' label='Tocantins' />
//             </Picker>
//           </PickerView>
//           <CadastroText>Cidade:</CadastroText>
//           <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cidade: text })} placeholder='Cidade' placeholderTextColor='#181818' />
//           <CadastroText>Bairro:</CadastroText>
//           <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, bairro: text })} placeholder='Bairro' placeholderTextColor='#181818' />
//           <CadastroText>Logradouro:</CadastroText>
//           <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, rua: text })} placeholder='Logradouro' placeholderTextColor='#181818' />
//           <CadastroText>Número:</CadastroText>
//           <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, numero: text })} placeholder='Numero' placeholderTextColor='#181818' />
//           <CadastroText>Complemento:</CadastroText>
//           <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, complemento: text })} placeholder='Complemento' placeholderTextColor='#181818' />
//           <CadastroText>CEP:</CadastroText>
//           <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cep: text })} keyboardType='number-pad' placeholder='Cep' placeholderTextColor='#181818' />
//         </InputArea>
//         <ButtonView>
//           <CadastroButton onPress={() => postColaborador()}>
//             <CadastroText>SALVAR</CadastroText>
//           </CadastroButton>
//         </ButtonView>
//         <EspacoView>
//         </EspacoView>
//       </CadastroScroll>
//     </Container>
//   );

// }

  //time stamp iso

  // const cadastroValidationSchema = yup.object().shape({
  //   nome: yup.string().max(50, ({ max }) => `Nome deve ter no máximo ${max} caracteres`).required('Campo obrigatório *'),
  //   rg: yup.string().max(12, ({ max }) => `RG deve ter no máximo ${max} caracteres`).required('Campo obrigatório *'),
  //   cpf: yup.string().max(14, ({ max }) => `CPF deve ter no máximo ${max} caracteres`).required('Campo obrigatório *'),
  //   email: yup.string().email('Coloque um email válido').required('Campo obrigatório *'),
  //   pix: yup.string().required('Campo obrigatório *'),
  //   cnh: yup.string().max(1, `CNH pode conter apenas sua categoria`).required('Campo obrigatório *')
  // })

  // const dataValidationSchema = yup.object().shape({
  //   dataNascimento: yup.date().transform(parseDateString).max(new Date(), () => `Data maior que a atual`).required('Campo obrigatório *').typeError(null)
                    // })