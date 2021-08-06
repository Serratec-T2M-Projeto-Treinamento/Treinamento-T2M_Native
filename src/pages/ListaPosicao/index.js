import React, { useEffect, useState } from 'react';
import { Container, ListScroll, Titulo, TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import { } from './styles'
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';
import axios from 'axios';
import { Alert } from 'react-native';

export default function ListaPosicoes({ navigation }) {
    const { setPosicao } = React.useContext(AuthContext);
    const [posicoes, setPosicoes] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`https://api-treinamento-t2m.herokuapp.com/posicoes`)
            setPosicoes(response.data);

        } catch (error) {
            Alert.alert('Ocorreu um erro inesperado')
            console.error(error);
        }
    }, []);

    const handleClick = (p) => {
        setPosicao(p)
        navigation.navigate('Competências por posição')
      };

    return (
        <Container>
            <ListScroll>
                <MenuIcon />
                <Titulo>Treinamentos</Titulo>
                {posicoes.map((p, i) => {
                    return (
                        <TreinamentoColaArea key={i}>
                            <TreinamentoColaView>
                                    <TreinamenText>{p.nome}</TreinamenText>
                                    <TreinamenText>{p.descricao}</TreinamenText>
                                <TreinamentoButton onPress={() => handleClick(p)}>
                                    <TreinamenText>Requisitos para Ocupação</TreinamenText>
                                </TreinamentoButton>
                            </TreinamentoColaView>
                        </TreinamentoColaArea>
                    )
                })}
            </ListScroll>
        </Container>











    );
};