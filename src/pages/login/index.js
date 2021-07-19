import React from 'react';
import { ContainerLogin, LoginView, LoginButton, InputLogin, ButtonText, TitleView, TitleText, InputArea, SubTitleText, BorderArea } from './styles';


export default function Login() {
    return (
        <ContainerLogin>
            <LoginView>
                <TitleView>
                    <TitleText>T2M</TitleText>
                    <SubTitleText>Test to Market</SubTitleText>
                <BorderArea>
                <InputArea>
                <InputLogin placeholder='nome de usuario'/>
                </InputArea>
                <InputArea>
                <InputLogin placeholder='senha'/>
                </InputArea>
                </BorderArea>
                </TitleView>
                <LoginButton>
                    <ButtonText>Entrar</ButtonText>
                </LoginButton>
            </LoginView>
        </ContainerLogin>
    );
};

