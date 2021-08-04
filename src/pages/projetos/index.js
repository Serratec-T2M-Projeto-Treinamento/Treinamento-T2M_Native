
import React, { useEffect, useState } from 'react';

import { Container,ProjetoScroll, Titulo, ProjetoView, ButtonText, ProjetoText, ProjeText, ProjetoButton, ProjetoArea, DadosView, DadosText, MensagemArea, MensagemView, MensagemText} from './styles';

import MenuIcon from '../../components/icon';
import { handleDate } from '../../components/dataFormatada';
import { TouchableOpacity, View, Text } from 'react-native';

export default function Projetos({ route, navigation }) {
    if (route.params) {

        const { colaborador } = route.params

        function handleNavProj(){
            navigation.navigate('Cadastro de Projetos', { colaborador });
        }

        return (
            <Container>
                <ProjetoScroll>
                    <MenuIcon />
                    <Titulo>Projetos:</Titulo>
                    {colaborador.setColabsProjs.map((p, i) => {
                        return (
                            <ProjetoArea key={i}>
                                <ProjetoView>
                                    <ProjetoText>Nome: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.nome}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>Descrição: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.descricao}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>App Gerenciador: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.appGerenciamento}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>Segmento: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.segmento}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>Entrega esperada: </ProjetoText>
                                </ProjetoView>
                                {handleDate(p.projeto.dataEntregaEsperada)}
                                <ProjetoView>
                                    <ProjetoText>Data de entrega: </ProjetoText>
                                </ProjetoView>
                                {handleDate(p.projeto.dataEntrega)}
                                <ProjetoView>
                                    <ProjetoText>N° de integrantes: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.equipe}</DadosText>
                                </DadosView>
                            </ProjetoArea>
                        )
                    })}
                    <ProjetoView>
                        <ProjetoButton onPress={() => handleNavProj()}>
                            <ProjeText>Inserir Projetos</ProjeText>
                        </ProjetoButton>
                    </ProjetoView>
                </ProjetoScroll>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Nenhuma informação encontrada,</MensagemText>
                        <MensagemText>escolha um colaborador primeiro para ver seus projetos.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}
