import React, { useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, InputArea, InputCadastro, MensagemArea, MensagemView, MensagemText,TreinaText, TreinamentoButton, TreinamentoText, TreinamentoView } from './styles';
import { Alert } from 'react-native';
import MenuIcon from '../../components/icon';

export default function CadastroTreinamentos({ route }) {
    if (route.params) {


    const { idColaborador } = route.params
    

    const [treinamento, setTreinamento] = useState({
        nome: '',
        descricao: '',
        instituicao: '',
        cargaHoraria: 0,
        // status
    });

    async function postTreinamento() {
        try {

            const responseTreinamento = await axios.post('https://api-treinamento-t2m.herokuapp.com/Treinamentos', treinamento)
            const idTreinamento = responseTreinamento.data.idTreinamentos
            //const status = responseTreinamento.data.status


            const response = await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsTrns/colaborador/${idColaborador}/treinamentoAInserir/${idTreinamento}/status/${status}`)
            console.log(response.data);

        } catch (error) {
            Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
        }

    }
    return (
        <Container>
            <MenuIcon />
            <TreinamentoView>
                <TreinaText> Cadastro de Treinamentos </TreinaText>
            </TreinamentoView>
            <EspacoView></EspacoView>
            <InputArea>
                <InputCadastro onChangeText={(text) => setTreinamento({ ...Treinamento, nome: text })} placeholder='Nome do Treinamento' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setTreinamento({ ...Treinamento, descricao: text })} placeholder='Descrição' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setTreinamento({ ...Treinamento, instituicao: text })} placeholder='Nome da Instuição' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setTreinamento({ ...Treinamento, cargaHoraria: text })} keyboardType='number-pad' placeholder='Carga Horária' placeholderTextColor='#181818' />
            <TreinamentoButton>
                 <TreinamentoText>Salvar</TreinamentoText>
            </TreinamentoButton>
            </InputArea>
        </Container>
    )
    }else{
        return (
            <Container>
              <MenuIcon />
              <MensagemArea>
                <MensagemView>
                  <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
                  <MensagemText>escolha um colaborador para cadastrar um treinamento a ele.</MensagemText>
                </MensagemView>
              </MensagemArea>
            </Container>
          )
    }
}