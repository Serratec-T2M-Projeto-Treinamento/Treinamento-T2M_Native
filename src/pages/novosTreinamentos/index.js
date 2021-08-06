import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TreinaScroll, EspacoView, InputArea, CertiButton, CertiText, DataView, ButtonView, CadastroText, CadastroView, MensagemArea, MensagemView, MensagemText, CertiView } from './styles';
import { Alert } from 'react-native';
import MenuIcon from '../../components/icon';
import DateField from 'react-native-datefield';

export default function NovosTreinamentos() {
        return (
            <Container>
                <TreinaScroll>
                    <MenuIcon />
                    <CadastroView>
                        <CadastroText>Novos Treinamentos </CadastroText>
                    </CadastroView>
                    <InputArea>
                                <CertiView>
                                    <CertiText>Nome:</CertiText>
                                </CertiView>
                                <CertiView>
                                    <CertiText>Instituição:</CertiText>
                                </CertiView>
                                <CertiView>
                                    <CertiText>Validade:</CertiText>
                                </CertiView>
                                <ButtonView>
                                    <CertiButton onPress={() => putCertificacoes(p)}>
                                        <CertiText>Salvar</CertiText>
                                    </CertiButton>
                                </ButtonView>
                            </InputArea>
                </TreinaScroll>
            </Container>
        )
                }