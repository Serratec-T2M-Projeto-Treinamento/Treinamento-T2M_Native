import React from 'react';
import { Container,TreinArea, TreinamentosText, ButtonView, TreinView, TreinText, DadosView, DadosText, MensagemArea, MensagemView, MensagemText, Titulo, TreinScroll, TreinamentosButton } from './styles';
import MenuIcon from '../../components/icon';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Treinamentos({ route, navigation}) {
    if (route.params) {

        const { colaborador } = route.params

        function handleNavTrein(){
        navigation.navigate('Cadastro de Treinamentos', { colaborador })
    }

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