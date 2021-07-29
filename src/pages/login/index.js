import React, { useState } from 'react';
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
import axios from 'axios';
import { Alert } from 'react-native';

export default function Login({ navigation }) {
    const [login, setLogin] = useState({
        usuario: '',
        senha: ''
    });

    const handleNomeChange = (text) => {
        setLogin({ ...login, usuario: text });
    }

    const handleSenhaChange = (text) => {
        setLogin({ ...login, senha: text });
    }

    console.log(login);

    const logar = () => {
        axios.get('https://api-treinamento-t2m.herokuapp.com/usuarios/1')
            .then((response) => {
                if (response.data.usuario === login.usuario && response.data.senha === login.senha) {
                    navigation.navigate('Home')
                }else{
                    Alert.alert('Nome de usuário ou senha inválidos!')
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
    }

    return (
        <ContainerLogin>
            <LoginView>
                <LogoView>
                    <Logo source={require('../../../assets/logo.png')} />
                </LogoView>
                <LoginView2>
                    <BorderArea>
                        <InputArea>
                            <InputLogin onChangeText={handleNomeChange} placeholder='nome de usuario' />
                        </InputArea>
                        <InputArea>
                            <InputLogin onChangeText={handleSenhaChange} secureTextEntry={true} placeholder='senha' />
                        </InputArea>
                        <LoginButton onPress={() => logar()}>
                            <ButtonText>Entrar</ButtonText>
                        </LoginButton>
                    </BorderArea>
                </LoginView2>
            </LoginView>
        </ContainerLogin>
    );
};
