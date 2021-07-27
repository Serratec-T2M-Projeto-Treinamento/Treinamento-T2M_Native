import React, { useEffect, useState } from 'react';
import { Container, ButtonInserir, ButtonText, ButtonView, InfoButton, InfoButtonText, InfoView, ContentView, ListScroll, EspacoView } from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';

export default function Listagem({ navigation }) {

    const [colaborador, setColaborador] = useState([]);

    const getColaboradores = () => {
        axios.get('https://api-treinamento-t2m.herokuapp.com/colaboradores')
            .then((response) => {
                setColaborador(response.data);
            })
            .catch(function (error) {
                console.error(error.message);
            });
    }

    useEffect(() => {
        getColaboradores()
    }, []);

    const handleClick = (p) => {
        navigation.navigate('Informações Colaboradores', {
            colaborador: p
        });
    }

    const info = colaborador.map((p, i) => {
        return (
            <InfoView key={i}>
                <InfoButton onPress={() => handleClick(p)}>
                    <InfoButtonText>{p.nome}</InfoButtonText>
                </InfoButton>
            </InfoView>
        );
    });

    return (
        <Container>
            <ListScroll>
                <MenuIcon />
                <ContentView>
                    <ButtonView>
                        <ButtonInserir onPress={() => navigation.navigate('Cadastro')}>
                            <ButtonText>Novo Colaborador</ButtonText>
                        </ButtonInserir>
                    </ButtonView>
                    {info}
                </ContentView>
                <EspacoView>
                </EspacoView>
            </ListScroll>
        </Container>
    );
};
