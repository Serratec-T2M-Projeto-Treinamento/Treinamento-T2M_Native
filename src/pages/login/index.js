import React from 'react';
import { 
    ContainerLogin,
    LoginView,
    LoginButton,
    InputLogin,
    ButtonText,
    InputArea,
    BorderArea,
    LoginView2,
    Logo,
    LogoView
} from './styles';

export default function Login({navigation}) {
    return (
        <ContainerLogin>
            <LoginView>
                <LogoView>
                <Logo source={require('../../../assets/logo.png')} />
                </LogoView>
                <LoginView2>
                <BorderArea>
                <InputArea>
                <InputLogin placeholder='nome de usuario'/>
                </InputArea>
                <InputArea>
                <InputLogin placeholder='senha'/>
                </InputArea>
                <LoginButton onPress={() => {navigation.navigate('Home')}}>
                    <ButtonText>Entrar</ButtonText>
                </LoginButton>
                </BorderArea>
                </LoginView2>
            </LoginView>
        </ContainerLogin>
    );
};
