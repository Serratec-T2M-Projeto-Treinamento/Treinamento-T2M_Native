import React from 'react';
import { TextInput } from 'react-native';
import { ContainerInicial, TelaText, TelaView, TelaButton } from './styles';
import { StyleSheet } from 'react-native';

export default function TelaIncial() {
    return (
        <ContainerInicial>
                <TelaView>
                    <TelaText>Bem-Vindo Administrador</TelaText>
                    <TextInput styles ={styles.input}/>
                    <TelaButton>
                        <TelaText>Clique Aqui</TelaText>
                    </TelaButton>
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