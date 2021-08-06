import React, { useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, InputArea, InputCadastro, MensagemArea, MensagemView, MensagemText, FormacaoText, FormaText, FormaView, FormaButton } from './styles';
import { Alert } from 'react-native';
import MenuIcon from '../../components/icon';
import DateField from 'react-native-datefield';

export default function CadastroFormacoes({ route, navigation }) {
    if (route.params) {


        const { colaborador } = route.params


        const [formacao, setFormacao] = useState({
            nome: '',
            nivel: '',
            instituicao: ''
        });

        const [datas, setDatas] = useState({
            dataEntrada: '',
            dataConclusao: ''
        });

        async function postFormacao() {
            try {
                
                const responseFormacao = await axios.post('https://api-treinamento-t2m.herokuapp.com/formacoes', formacao)
                const idFormacao = responseFormacao.data.idFormacoes
                console.log(idFormacao);

                await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsForms/colaborador/${colaborador.idColaboradores}/formacaoAInserir/${idFormacao}`, datas)
                Alert.alert('Formação inserida com sucesso!');
                navigation.reset({
                    routes: [{ name: 'Lista de Colaboradores' }]
                })

            } catch (error) {
                Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
                console.error(error);
            }

        }

        console.log(formacao);
        console.log(datas);

        return (
            <Container>
                <MenuIcon />
                <FormaView>
                    <FormacaoText> Inserir Formaçôes </FormacaoText>
                </FormaView>
                <InputArea>
                    <InputCadastro onChangeText={(text) => setFormacao({ ...formacao, nome: text })} placeholder='Nome da Formacao' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setFormacao({ ...formacao, nivel: text })} placeholder='Nível' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setFormacao({ ...formacao, instituicao: text })} placeholder='Nome da Instuição' placeholderTextColor='#181818' />
                </InputArea>
                <DateField labelDate='Dia' labelMonth='Mês' labelYear='Ano' onSubmit={(value) => setDatas({ ...datas, dataEntrada: value })} styleInput={{ fontSize: 22, paddingLeft: 5 }} />
                <DateField labelDate='Dia' labelMonth='Mês' labelYear='Ano' onSubmit={(value) => setDatas({ ...datas, dataConclusao: value })} styleInput={{ fontSize: 22, paddingLeft: 5 }} />
                <FormaView>
                    <FormaButton onPress={() => postFormacao()}>
                        <FormaText>Salvar</FormaText>
                    </FormaButton>
                </FormaView>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
                        <MensagemText>escolha um colaborador para cadastrar uma formacao a ele.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}






// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, EspacoView, InputArea, InputCadastro, MensagemArea, MensagemView, MensagemText, FormacaoText, FormaText, FormaView, FormaButton  } from './styles';
// import { Alert } from 'react-native';
// import MenuIcon from '../../components/icon';

// export default function CadastroFormacoes({ route }) {
//     if (route.params) {


//     const { idColaborador } = route.params


//     const [formacao, setFormacao] = useState({
//         nome: '',
//         nivel: '',
//         instituicao: ''
//     });

//     async function postFormacao() {
//         try {

//             const responseFormacao = await axios.post('https://api-Formacao-t2m.herokuapp.com/formacoes', formacao)
//             const idFormacao = responseFormacao.data.idFormacoes


//             const response = await axios.put(`https://api-Formacao-t2m.herokuapp.com/colabsForms/colaborador/${idColaborador}/formacao/${idFormacao}/dataEntrada/${dataEntradaForm}`)
//             console.log(response.data);

//         } catch (error) {
//             Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
//         }

//     }
//     return (
//         <Container>
//             <MenuIcon />
//             <FormaView>
//                     <FormacaoText> Inserir Formaçôes </FormacaoText>
//             </FormaView>
//             <InputArea>
//                 <InputCadastro onChangeText={(text) => setFormacao({ ...formacao, nome: text })} placeholder='Nome da Formacao' placeholderTextColor='#181818' />
//                 <InputCadastro onChangeText={(text) => setFormacao({ ...formacao, nivel: text })} placeholder='Nível' placeholderTextColor='#181818' />
//                 <InputCadastro onChangeText={(text) => setFormacao({ ...formacao, instituicao: text })} placeholder='Nome da Instuição' placeholderTextColor='#181818' />
//                 <FormaView>
//                         <FormaButton>
//                             <FormaText>Salvar</FormaText>
//                         </FormaButton>
//                     </FormaView>
//             </InputArea>
//         </Container>
//     )
//     }else{
//         return (
//             <Container>
//               <MenuIcon />
//               <MensagemArea>
//                 <MensagemView>
//                   <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
//                   <MensagemText>escolha um colaborador para cadastrar uma formacao a ele.</MensagemText>
//                 </MensagemView>
//               </MensagemArea>
//             </Container>
//           )
//     }
// }