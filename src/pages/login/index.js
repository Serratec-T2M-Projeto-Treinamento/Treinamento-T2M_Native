import React from 'react';
import { 
    ContainerLogin, 
    LoginView, 
    LoginButton,
    LoginButton2, 
    InputLogin, 
    ButtonText,  
    InputArea, 
    BorderArea,
    LoginView2 
} from './styles';
import { StyleSheet, Image } from 'react-native';

export default function Login({navigation}) {
    return (
        <ContainerLogin>
            <LoginView>
                <Image style={styles.logo} source={require('../../icons/logo.png')} />
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
                <LoginButton2 onPress={() => {navigation.navigate('Tela Inicial')}}>
                    <ButtonText>Voltar</ButtonText>
                </LoginButton2>
                </BorderArea>
                </LoginView2>
            </LoginView>
        </ContainerLogin>
    );
};

const styles = StyleSheet.create({
    logo:{
        width:250,
        height:'25%',
        resizeMode:'center',
        marginRight: 100,
        
    }
});