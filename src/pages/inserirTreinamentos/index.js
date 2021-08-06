import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, TreinamentoArea,CarText, ProScroll, TreinaView, MensagemArea, MensagemView, MensagemText, TreinamentoButton, TreinamentoText, TreinamentoView, InserirText, InserirView, CardText, CardView, PickerView } from './styles';
import { Alert } from 'react-native';
import MenuIcon from '../../components/icon';
import { Picker } from '@react-native-picker/picker';

export default function CadastroTreinamentos({ route, navigation }) {
    if (route.params) {

        const { colaborador } = route.params

        const [treinamentos, setTreinamentos] = useState([]);
        const [linkTreina, setLinkTreina] = useState({
            status: ''
        })

        useEffect(() => {
            axios.get('https://api-treinamento-t2m.herokuapp.com/treinamentos')
                .then((response) => setTreinamentos(response.data))
                .catch((error) => {
                    console.error(error);
                });
        }, []);


        const LinkarTreinamento = async (p) => {
            try {
                await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsTrns/colaborador/${colaborador.idColaboradores}/treinamentoAInserir/${p.idTreinamentos}`, linkTreina)
                Alert.alert('Treinamento Inserido com sucesso!')
                navigation.reset({
                    routes: [{ name: 'Lista de Colaboradores' }]
                })
            } catch (error) {
                console.error(error);
            }
        }

        return (
            <Container>
                <ProScroll>
                    <MenuIcon />
                    <EspacoView>
                    </EspacoView>
                    <TreinaView>
                        <InserirText> Inserir Treinamento </InserirText>
                    </TreinaView>
                    <TreinamentoArea>
                        {treinamentos.map((p, i) => {
                            return (
                                <InserirView key={i}>
                                    <CardView>
                                        <CardText>Nome:</CardText>
                                        <CarText>{p.nome}</CarText>
                                    </CardView>
                                    <CardView>
                                        <CardText>Descrição:</CardText>
                                        <CarText>{p.descricao}</CarText>
                                    </CardView>
                                    <CardView>
                                        <CardText>Carga Horária:</CardText>
                                        <CarText>{p.cargaHoraria} Hora(s)</CarText>
                                    </CardView>
                                    <CardView>
                                        <CardText>instituição:</CardText>
                                        <CarText>{p.instituicao}</CarText>
                                    </CardView>
                                    <CardView>
                                        <PickerView>
                                            <Picker
                                                mode='dropdown'
                                                itemStyle={{ color: '#181818' }}
                                                selectedValue={linkTreina}
                                                onValueChange={(itemValue) => setLinkTreina({ ...linkTreina, status: itemValue })}>
                                                <Picker.Item color='#181818' label='Status' value='' />
                                                <Picker.Item color='#181818' label='Em andamento' value='Em andamento' />
                                                <Picker.Item color='#181818' label='Concluído' value='Concluído' />
                                            </Picker>
                                        </PickerView>
                                    </CardView>
                                    <InserirView>
                                        <TreinamentoButton onPress={() => LinkarTreinamento(p)}>
                                            <TreinamentoText>Inserir</TreinamentoText>
                                        </TreinamentoButton>
                                    </InserirView>
                                </InserirView>
                            )
                        })}
                    </TreinamentoArea>
                    <EspacoView>
                    </EspacoView>
                </ProScroll>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
                        <MensagemText>escolha um colaborador para cadastrar um projeto a ele.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}






























// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, EspacoView, InputArea, InputCadastro, MensagemArea, MensagemView, MensagemText, TreinaText, TreinamentoButton, TreinamentoText, TreinamentoView } from './styles';
// import { Alert, Text } from 'react-native';
// import MenuIcon from '../../components/icon';
// import { Formik } from 'formik';
// import * as yup from 'yup';

// export default function CadastroTreinamentos({ route }) {
//     if (route.params) {


//         const { colaborador } = route.params
//         console.log(colaborador.idColaboradores);

//         const treinaValidationSchema = yup.object().shape({
//             nome: yup.string().max(50, ({ max }) => `Máximo de ${max} caracteres`).required('O nome do treinamneto é obrigatório'),
//             descricao: yup.string().max(120, ({ max }) => `Máximo de ${max} caracteres`).required('A descrição é obrigatória'),
//             instituicao: yup.string().max(30, ({ max }) => `Máximo de ${max} caracteres`).required('O nome da instituição é obrigatório'),
//             cargaHoraria: yup.number()
//         });

//         return (
//             <Container>
//                 <MenuIcon />
//                 <TreinamentoView>
//                     <TreinaText> Cadastro de Treinamentos </TreinaText>
//                 </TreinamentoView>
//                 <EspacoView></EspacoView>
//                 <Formik initialValues={{
//                     nome: '',
//                     descricao: '',
//                     instituicao: '',
//                     cargaHoraria: 0
//                 }}
//                     onSubmit={async (values) => {
//                         const treinamento = {
//                             nome: values.nome,
//                             descricao: values.descricao,
//                             instituicao: values.instituicao,
//                             cargaHoraria: values.cargaHoraria
//                         }

//                         try {
//                             const responseTreinamento = await axios.post('https://api-treinamento-t2m.herokuapp.com/treinamentos', treinamento)
//                             console.log(responseTreinamento.data.idTreinamentos);
//                             const idTreinamento = responseTreinamento.data.idTreinamentos

//                             await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsTrns/colaborador/${colaborador.idColaboradores}/treinamentoAInserir/${idTreinamento}`)
//                             Alert.alert('Treinamento inserido com sucesso!')
//                         } catch (error) {
//                             Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
//                             console.error(error);
//                         }
//                     }}
//                     validationSchema={treinaValidationSchema}>
//                     {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
//                         <>
//                             <InputArea>
//                                 <InputCadastro name='nome' onChangeText={handleChange('nome')} onBlur={handleBlur('nome')} value={values.nome} placeholder='Nome do Treinamento' placeholderTextColor='#181818' />
//                                 {(errors.nome && touched.nome) && 
//                                     <Text style={{fontSize: 15, color: 'red'}}>{errors.nome}</Text>
//                                 }
//                                 <InputCadastro name='descricao' onChangeText={handleChange('descricao')} onBlur={handleBlur('descricao')} value={values.descricao} placeholder='Descrição' placeholderTextColor='#181818' />
//                                 {(errors.descricao && touched.descricao) && 
//                                     <Text style={{fontSize: 15, color: 'red'}}>{errors.descricao}</Text>
//                                 }
//                                 <InputCadastro name='instituicao' onChangeText={handleChange('instituicao')} onBlur={handleBlur('instituicao')} value={values.instituicao} placeholder='Nome da Instuição' placeholderTextColor='#181818' />
//                                 {(errors.instituicao && touched.instituicao) && 
//                                     <Text style={{fontSize: 15, color: 'red'}}>{errors.instituicao}</Text>
//                                 }
//                                 <InputCadastro name='cargaHoraria' onChangeText={handleChange('cargaHoraria')} onBlur={handleBlur('cargaHoraria')} value={values.cargaHoraria} keyboardType='number-pad' placeholder='Carga Horária' placeholderTextColor='#181818' />
//                                 {(errors.cargaHoraria && touched.cargaHoraria) && 
//                                     <Text style={{fontSize: 15, color: 'red'}}>{errors.cargaHoraria}</Text>
//                                 }
//                                 <TreinamentoButton onPress={() => handleSubmit()}
//                                                    disabled={!isValid}>
//                                     <TreinamentoText>Salvar</TreinamentoText>
//                                 </TreinamentoButton>
//                             </InputArea>
//                         </>
//                     )}
//                 </Formik>
//             </Container>
//         )
//     } else {
//         return (
//             <Container>
//                 <MenuIcon />
//                 <MensagemArea>
//                     <MensagemView>
//                         <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
//                         <MensagemText>escolha um colaborador para cadastrar um treinamento a ele.</MensagemText>
//                     </MensagemView>
//                 </MensagemArea>
//             </Container>
//         )
//     }
// }