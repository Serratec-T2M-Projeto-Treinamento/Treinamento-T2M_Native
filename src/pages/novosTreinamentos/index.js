import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TreinaScroll, EspacoView, InputArea, InputCadastro, CertiButton, CertiText, DataView, ButtonView, CadastroText, CadastroView, MensagemArea, MensagemView, MensagemText, CertiView } from './styles';
import { Alert, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function NovosTreinamentos({ navigation }) {
    const [treinamento, setTreinamento] = useState({
        nome: '',
        descricao: '',
        instituicao: '',
        cargaHoraria: 0
    })

    const postTreinamento = async () => {
        try {
            await axios.post(`https://api-treinamento-t2m.herokuapp.com/colaboradores`, treinamento)
            Alert.alert('Treinamento cadastrado com sucesso!')
            navigation.reset({
                routes: [{ name: 'Treinamentos' }]
            })
        } catch (error) {
            console.error(error);
        }
    }

    console.log(treinamento);


    return (
        <Container>
            <TreinaScroll>
                <CadastroView>
                    <CadastroText>Novos Treinamentos </CadastroText>
                </CadastroView>

                <InputArea>
                    <CertiView>
                        <CertiText>Nome:</CertiText>
                        <InputCadastro onChangeText={(text) => setTreinamento({ ...treinamento, nome: text })} placeholder='Nome' placeholderTextColor='#181818' />
                    </CertiView>
                    <CertiView>
                        <CertiText>Descrição:</CertiText>
                        <InputCadastro onChangeText={(text) => setTreinamento({ ...treinamento, descricao: text })} placeholder='Descrição' placeholderTextColor='#181818' />
                    </CertiView>
                    <CertiView>
                        <CertiText>Instituição:</CertiText>
                        <InputCadastro onChangeText={(text) => setTreinamento({ ...treinamento, instituicao: text })} placeholder='Instituição' placeholderTextColor='#181818' />
                    </CertiView>
                    <CertiView>
                        <CertiText>Carga Horária:</CertiText>
                        <InputCadastro  onChangeText={(text) => parseInt(setTreinamento({ ...treinamento, cargaHoraria: text }))} placeholder='Carga Horaria' placeholderTextColor='#181818' />
                        {/* <NumericInput value={treinamento.cargaHoraria} onChange={(value) => setTreinamento({ value })} minValue={1} valueType='integer' /> */}
                    </CertiView>
                    <ButtonView>
                        <CertiButton onPress={() => postTreinamento()}>
                            <CertiText>Salvar</CertiText>
                        </CertiButton>
                    </ButtonView>
                </InputArea>
            </TreinaScroll>
        </Container>
    )
}