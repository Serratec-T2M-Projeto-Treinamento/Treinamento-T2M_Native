import React, { useEffect, useState } from 'react';
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

export default function Login({ navigation }) {
    const [usuario, setUsuario] = useState({
        usuario: '',
        senha: ''
    });

    const handleNomeChange = (text) => {
        setUsuario({ ...usuario, usuario: text });
    }

    const handleSenhaChange = (text) => {
        setUsuario({ ...usuario, senha: text });
    }

    console.log(usuario);

    const logar = () => {
        axios.post('https://api-treinamento-t2m.herokuapp.com/usuarios', usuario)
            // .then(() => {
            //     if (usuario == usuario.usuario && senha == usuario.senha) {
            //         navigation.navigate('Home')
            //     }else{
            //         Alert.alert('Dados inválidos!')
            //     }
            // })
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
