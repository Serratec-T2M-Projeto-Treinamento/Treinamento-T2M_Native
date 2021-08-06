import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TreinaScroll, EspacoView, InputArea, CertiButton, CertiText, DataView, ButtonView, CadastroText, CadastroView, MensagemArea, MensagemView, MensagemText, CertiView } from './styles';
import { Alert } from 'react-native';
import MenuIcon from '../../components/icon';
import DateField from 'react-native-datefield';

export default function InserirCertificados({ route, navigation }) {
    if (route.params) {
        const { colaborador } = route.params

        const [certificados, setCertificados] = useState([]);
        const [data, setData] = useState({
            dataObtencao: ''
        });


        useEffect(() => {
            axios.get('https://api-treinamento-t2m.herokuapp.com/certificacoes')
                .then((response) => setCertificados(response.data))
                .catch((error) => {
                    console.error(error);
                });
        }, []);


        const putCertificacoes = async (p) => {
            try {
                await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsCerts/colaborador/${colaborador.idColaboradores}/certificacaoAInserir/${p.idCertificacoes}​`, data);
                Alert.alert('Certificação inserida com sucesso!')
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
                <TreinaScroll>
                    <MenuIcon />
                    <EspacoView>
                    </EspacoView>
                    <CadastroView>
                        <CadastroText> Cadastro de Certificados </CadastroText>
                    </CadastroView>
                    {certificados.map((p, i) => {
                        return (
                            <InputArea key={i}>
                                <CertiView>
                                    <CertiText>Nome:</CertiText>
                                    <CertiText>{p.nomeCertificado}</CertiText>
                                </CertiView>
                                <CertiView>
                                    <CertiText>Instituição:</CertiText>
                                    <CertiText>{p.instituicaoCertificado}</CertiText>
                                </CertiView>
                                <CertiView>
                                    <CertiText>Validade:</CertiText>
                                    <CertiText>{p.tempoValidade}</CertiText>
                                    <CertiText>Data de Obtenção:</CertiText>
                                </CertiView>
                                <DataView>
                                    <DateField labelDate='Dia' labelMonth='Mês' labelYear='Ano' onSubmit={(value) => setData({dataObtencao: value})} styleInput={{ fontSize: 22, paddingLeft: 5 }} />
                                </DataView>
                                <ButtonView>
                                    <CertiButton onPress={() => putCertificacoes(p)}>
                                        <CertiText>Salvar</CertiText>
                                    </CertiButton>
                                </ButtonView>
                            </InputArea>
                        )
                    })}
                    <EspacoView>
                    </EspacoView>
                </TreinaScroll>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
                        <MensagemText>escolha um colaborador para cadastrar uma certificação a ele.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}