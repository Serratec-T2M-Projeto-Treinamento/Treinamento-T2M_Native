import React, { useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, InputArea, InputCadastro, MensagemArea, MensagemView, MensagemText } from './styles';
import { Alert } from 'react-native';
import MenuIcon from '../../components/icon';

export default function CadastroProjetos({ route }) {
    if (route.params) {


        const { idColaborador } = route.params


        const [projetos, setProjetos] = useState({
            nome: '',
            descricao: '',
            appGerenciamento: '',
            segmento: '',
            dataEntregaEsperada: '',
            dataEntrega: '',
            equipe: 0
            //dataEntradaForm: ''
        });

        async function postProjetos() {
            try {

                const responseProjetos = await axios.post('https://api-Projetos-t2m.herokuapp.com/Projetos', Projetos)
                const idProjeto = responseProjetos.data.idProjetos
                //const funcao = responseProjetos.data.funcao
                //const dataInico = responseProjetos.data.dataInicio


                const response = await axios.put(`https://api-Projetos-t2m.herokuapp.com/colabsProjs/colaborador/${idColaborador}/projetoAInserir/${idProjeto}/funcao/${funcao}/dataInicio/${dataInicioProj}`)
                console.log(response.data);

            } catch (error) {
                Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
            }

        }
        return (
            <Container>
                <MenuIcon />
                <EspacoView></EspacoView>
                <InputArea>
                    <InputCadastro onChangeText={(text) => setProjetos({ ...projetos, nome: text })} placeholder='Nome do Projeto' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setProjetos({ ...projetos, descricao: text })} placeholder='Descrição' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setProjetos({ ...projetos, appGerenciamento: text })} placeholder='App Gerenciador' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setProjetos({ ...projetos, segmento: text })} placeholder='Segmento' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setProjetos({ ...projetos, dataEntregaEsperada: text })} placeholder='Entrega Esperada' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setProjetos({ ...projetos, dataEntrega: text })} placeholder='Data de Entrega' placeholderTextColor='#181818' />
                    <InputCadastro onChangeText={(text) => setProjetos({ ...projetos, equipe: text })} keyboardType='number-pad' placeholder='N° de Integrantes' placeholderTextColor='#181818' />
                </InputArea>
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