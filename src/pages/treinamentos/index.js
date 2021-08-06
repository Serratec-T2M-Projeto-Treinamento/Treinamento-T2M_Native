import React from 'react';
import { Container, TreinArea, TreinamentosText, ButtonView, TreinView, TreinText, DadosView, DadosText, MensagemArea, MensagemView, MensagemText, Titulo, TreinScroll, TreinamentosButton, EndView, EndButton, EndText } from './styles';
import MenuIcon from '../../components/icon';
import { Alert } from 'react-native';
import axios from 'axios';

export default function Treinamentos({ route, navigation }) {
    if (route.params) {

        const { colaborador } = route.params

        function handleNavTrein() {
            navigation.navigate('Inserir Treinamentos em Colaborador', { colaborador })
        }

        async function handleRemoveTrein(p) {
            await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsTrns/colaborador/${colaborador.idColaboradores}/treinamentoARemover/${p.treinamento.idTreinamentos}`);
            Alert.alert("Treinamento removido com sucesso!");
            navigation.reset({
                routes: [{ name: 'Lista de Colaboradores' }]
            })
            // setRefresh(!refresh);
        };

        return (
            <Container>
                <TreinScroll>
                    <MenuIcon />
                    <Titulo>Treinamentos:</Titulo>
                    {colaborador.setColabsTrns.map((p, i) => {
                        return (
                            <TreinArea key={i}>
                                <TreinView>
                                    <TreinText>Nome: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.nome}</DadosText>
                                </DadosView>
                                <TreinView>
                                    <TreinText>Descrição: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.descricao}</DadosText>
                                </DadosView>
                                <TreinView>
                                    <TreinText>Caga Horária: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.cargaHoraria} Hora(s)</DadosText>
                                </DadosView>
                                <TreinView>
                                    <TreinText>Instituição: </TreinText>
                                </TreinView>
                                <DadosView>
                                    <DadosText>{p.treinamento.instituicao}</DadosText>
                                </DadosView>
                                <EndView>
                                    <EndButton onPress={() => handleRemoveTrein(p)}>
                                        <EndText>Deletar</EndText>
                                    </EndButton>
                                </EndView>
                            </TreinArea>
                        )
                    })}

                    <ButtonView>
                        <TreinamentosButton onPress={() => handleNavTrein()}>
                            <TreinamentosText>Inserir Treinamento</TreinamentosText>
                        </TreinamentosButton>
                    </ButtonView>

                </TreinScroll>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Nenhuma informação encontrada,</MensagemText>
                        <MensagemText>escolha um colaborador primeiro para ver seus treinamentos.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}