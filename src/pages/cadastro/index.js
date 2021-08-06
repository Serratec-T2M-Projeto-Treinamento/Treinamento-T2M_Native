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
  DataView
} from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
import DateField from 'react-native-datefield';
import { AuthContext } from '../../services/auth';
import { mask } from 'remask';

export default function Cadastro({ navigation }) {
  const { isAdmin } = React.useContext(AuthContext);
  const [posicoes, setPosicoes] = useState([]);

  const padraoCpf = '999.999.999-99'
  const padraoRg = '99.999.999-9'
  const padraoCep = '99999-999'

  const handlePermissao = (p) => {
    if (p) {
      return <Picker.Item color='#181818' label='Administrador' value={2} />
    }
  }

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

  const [colaborador, setColaborador] = useState(
    {
      nome: '',
      rg: '',
      cpf: '',
      email: '',
      dataNascimento: '',
      pix: '',
      cnh: '',
      permissao: 0,
      posicao: {
        idPosicoes: 1
      }
    });

  const [endereco, setEndereco] = useState({
    pais: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    cep: ''
  });

  async function postColaborador() {
    try {
      
      const responseColaborador = await axios.post('https://api-treinamento-t2m.herokuapp.com/colaboradores', colaborador)
      const idColaborador = responseColaborador.data.idColaboradores
      

      const responseEndereco = await axios.post('https://api-treinamento-t2m.herokuapp.com/enderecos', endereco)
      const idEndereco = responseEndereco.data.idEnderecos
      
      
      await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsEndrs/colaborador/${idColaborador}/enderecoAInserir/${idEndereco}`)
      Alert.alert('Colaborador cadastrado com sucesso!')
      
      navigation.reset({
        routes: [{ name: 'Lista de Colaboradores' }]
      })
      
    } catch (error) {
      Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
      console.error(error);
    }
    
  }
  return (
    <Container>
      <CadastroScroll>
        <MenuIcon />
        <EspacoView>
        </EspacoView>
        <InputArea>
          <CadastroText>Nome Completo:</CadastroText>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, nome: text })} placeholder='Nome' placeholderTextColor='#181818' />
          <CadastroText>RG:</CadastroText>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, rg: text })} keyboardType='number-pad' placeholder='RG' placeholderTextColor='#181818' />
          <CadastroText>CPF:</CadastroText>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cpf: text })} keyboardType='number-pad' placeholder='CPF' placeholderTextColor='#181818' />
          <CadastroText>E-mail:</CadastroText>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, email: text })} keyboardType='email-address' autoCapitalize='none' placeholder='E-mail' placeholderTextColor='#181818' />
          <CadastroText>Data de nascimento:</CadastroText>
          {/* <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, dataNascimento: text })} placeholder='Data de Nascimento' placeholderTextColor='#181818' /> */}
          <DataView>
            <DateField labelDate='Dia' labelMonth='Mês' labelYear='Ano' onSubmit={(value) => setColaborador({ ...colaborador, dataNascimento: value })} styleInput={{ fontSize: 22, paddingLeft: 5 }} />
          </DataView>
          {/* <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cnh: text })} placeholder='CNH' placeholderTextColor='#181818' /> */}
          <CadastroText>Pix:</CadastroText>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, pix: text })} autoCapitalize='none' placeholder='Pix' placeholderTextColor='#181818' />
          <CadastroText>CNH:</CadastroText>
          <PickerView>
            <Picker
              mode='dropdown'
              itemStyle={{ color: '#181818' }}
              selectedValue={colaborador.cnh}
              onValueChange={(itemValue) => setColaborador({...colaborador, cnh: itemValue})}>
              <Picker.Item color='#181818' label='Escolha uma categoria' value='' />
              <Picker.Item color='#181818' label='A' value='A' />
              <Picker.Item color='#181818' label='B' value='B' />
              <Picker.Item color='#181818' label='C' value='C' />
              <Picker.Item color='#181818' label='D' value='D' />
              <Picker.Item color='#181818' label='E' value='E' />
              <Picker.Item color='#181818' label='AB' value='AB' />
            </Picker>
          </PickerView>
          <CadastroText>Cargo:</CadastroText>
          <PickerView>
            <Picker
              mode='dropdown'
              itemStyle={{ color: '#181818' }}
              selectedValue={colaborador.posicao.idPosicoes}
              onValueChange={(itemValue) => setColaborador({...colaborador, posicao:{...colaborador.posicao, idPosicoes: itemValue}})}>
              {posicoes.map((p, i) => (
                <Picker.Item color='#181818' key={i} label={p.nome} value={p.idPosicoes} />
              )
              )}
            </Picker>
          </PickerView>
          <CadastroText>Posição:</CadastroText>
          <PickerView>
            <Picker
              mode='dropdown'
              itemStyle={{ color: '#181818' }}
              selectedValue={colaborador.permissao}
              onValueChange={(itemValue) => setColaborador({...colaborador, permissao: itemValue})}>
              {handlePermissao(isAdmin)}
              <Picker.Item color='#181818' label='Líder' value={1} />
              <Picker.Item color='#181818' label='Colaborador' value={0} />
            </Picker>
          </PickerView>
          <CadastroText>País</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, pais: text })} placeholder='País' placeholderTextColor='#181818' />
          <CadastroText>Sigla do Estado:</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, estado: text })} placeholder='Sigla' placeholderTextColor='#181818' />
          <CadastroText>Cidade:</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cidade: text })} placeholder='Cidade' placeholderTextColor='#181818' />
          <CadastroText>Bairro:</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, bairro: text })} placeholder='Bairro' placeholderTextColor='#181818' />
          <CadastroText>Logradouro:</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, rua: text })} placeholder='Logradouro' placeholderTextColor='#181818' />
          <CadastroText>Número:</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, numero: text })} placeholder='Numero' placeholderTextColor='#181818' />
          <CadastroText>Complemento:</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, complemento: text })} placeholder='Complemento' placeholderTextColor='#181818' />
          <CadastroText>CEP:</CadastroText>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cep: text })} keyboardType='number-pad' placeholder='Cep' placeholderTextColor='#181818' />
        </InputArea>
        <ButtonView>
          <CadastroButton onPress={() => postColaborador()}>
            <CadastroText>SALVAR</CadastroText>
          </CadastroButton>
        </ButtonView>
        <EspacoView>
        </EspacoView>
      </CadastroScroll>
    </Container>
  );

}

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