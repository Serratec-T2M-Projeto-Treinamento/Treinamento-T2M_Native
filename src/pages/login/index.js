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
import { Alert } from 'react-native';



export default function Login({navigation}) {
    const [usuario, setUsuario] = useState({login: '', senha: ''});

    const handleNomeChange = (text) =>{
       setUsuario({...usuario, login: text});
    }

    const handleSenhaChange = (text) =>{
        setUsuario({...usuario, senha: text});
    }


     const logar = () => {
         axios.get('https://api-zerocommerce.herokuapp.com/cliente/1') //ester 549//
         .then((response) => {
             if(response.data.usuario == usuario.login && response.data.endereco.numero == usuario.senha){
                 navigation.navigate('Home');
             }else{
                 Alert.alert('Preencha os espaços com as informações corretas!')
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
                <InputLogin onChangeText={handleNomeChange} placeholder='nome de usuario'/>
                </InputArea>
                <InputArea>
                <InputLogin onChangeText={handleSenhaChange} secureTextEntry={true} placeholder='senha'/>
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
