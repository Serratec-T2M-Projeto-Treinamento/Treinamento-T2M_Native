import React from 'react';
import { Container, ButtonInserir, ButtonText, ButtonView } from './styles';

export default function Listagem({navigation}){
    return(
    <Container>
        <ButtonView>
        <ButtonInserir onPress={()=>{navigation.navigate('Cadastro')}}>
            <ButtonText>Novo Colaborador</ButtonText>
        </ButtonInserir>
        </ButtonView>
    </Container>
);
};