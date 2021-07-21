import React, {useEffect, useState} from 'react';
import { Container, ButtonInserir, ButtonText, ButtonView } from './styles';
import MenuIcon from '../../components/icon';
import {View, Text} from 'react-native';

export default function Listagem({navigation}){

   // const [colaborador, setColaborador] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:3000/colaborador')
    //     .then(response => {
    //        return response.json();
    //     })
    //     .then(data => {
    //         console.log(data);
    //     })
    //     .catch(function(error){
    //         console.error('Houve um erro na requisição ' + error.message);
    //         throw error;
    //     })
    // }, []);

    return(
    <Container>
        <MenuIcon />
        <View>
            <Text>Colaborador: </Text>
        </View>
        <ButtonView>
        <ButtonInserir onPress={()=>{navigation.navigate('Cadastro')}}>
            <ButtonText>Novo Colaborador</ButtonText>
        </ButtonInserir>
        </ButtonView>
    </Container>
);
};