import React, { useEffect, useState } from 'react';
import { Container, EspacoView, ProjetoArea, ProScroll, InputCadastro, MensagemArea, MensagemView, MensagemText, ProjetoButton, ProjetoText, InserirText, InserirView, CardText, CardView, ProjetoView, DateView } from './styles';
import MenuIcon from '../../components/icon';
i

export default function InserirCompetencia() {
        return (
            <Container>
                <ProScroll>
                    <MenuIcon />
                    <EspacoView></EspacoView>
                    <ProjetoView>
                        <InserirText> Inserir Competencia</InserirText>
                    </ProjetoView>
                    <ProjetoArea> 
                            return (
                                <InserirView key={i}>
                                        <CardView>
                                            <CardText>Nome:</CardText>
                                            <CardText>{p.nome}</CardText>
                                        </CardView>
                                        <CardView>
                                            <CardText>Descrção:</CardText>
                                            <CardText>{p.descricao}</CardText>
                                        </CardView>
                                        <InserirView>
                                        <ProjetoButton onPress={() => LinkarProjeto(p)}>
                                            <ProjetoText>Inserir</ProjetoText>
                                        </ProjetoButton>
                                        </InserirView>
                                    <InserirView>
                                    </InserirView>
                                </InserirView>
                            )
                    </ProjetoArea>
                </ProScroll>
            </Container>
        )
                    }
