import React, { useEffect, useState } from 'react';
import { Container, ButtonInserir, ButtonText, ButtonView } from './styles';
import MenuIcon from '../../components/icon';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function Listagem({ navigation }) {

    const [colaborador, setColaborador] = useState([]);

    const getColaboradores = () => {
        axios.get('http://10.0.2.2:3000/colaborador')
            .then((response) => {
                setColaborador(response.data);
                console.log(colaborador);
            })
            .catch(function (error) {
                console.error(error.message);
            });
    }

    useEffect(() => {
        getColaboradores()
    }, []);

    const info = colaborador.map((p, i) =>{
        return(
        <View key={i}>
            <Text>Colaborador: {p.nome}</Text>
        </View>
        );
    });

    return (
        <Container>
            <MenuIcon />
            <ButtonView>
                <ButtonInserir onPress={() => { navigation.navigate('Cadastro') }}>
                    <ButtonText>Novo Colaborador</ButtonText>
                </ButtonInserir>
            </ButtonView>
            {info}
        </Container>
    );
};