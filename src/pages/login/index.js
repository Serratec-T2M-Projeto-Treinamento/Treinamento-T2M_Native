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
         axios.get('http://10.0.2.2:3000/colaborador/1')
         .then((response) => {
             if(response.data.nome == usuario.login && response.data.senha == usuario.senha){
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
                <InputLogin onChangeText={handleSenhaChange} placeholder='senha'/>
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
