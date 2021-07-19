import React from 'react';
import { ContainerInicial, TitleText, TelaView, TelaButton, TitleView, TelaText, ButtonView } from './styles';
import { StyleSheet } from 'react-native';

export default function TelaIncial() {
    return (
        <ContainerInicial>
                <TelaView>
                    <TitleView>
                    <TitleText>Bem-Vindo Administrador</TitleText>
                    </TitleView>
                    <ButtonView>
                    <TelaButton>
                        <TelaText>Clique para fazer login</TelaText>
                    </TelaButton>
                    </ButtonView>
                </TelaView>
        </ContainerInicial>
    );
};

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#777',
        padding: 8,
        margin: 10,
        width: 200
    }

});