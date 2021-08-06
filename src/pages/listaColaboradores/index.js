import React, { useEffect, useState } from 'react';
import { Container, ButtonInserir, ButtonText, ButtonView, InfoButton, InfoButtonText, InfoView, ContentView, ListScroll, EspacoView, LoadingView, LoadingText } from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../../services/auth';

export default function Listagem({ navigation }) {
    const { setColaboradores } = React.useContext(AuthContext);
    const [colaborador, setColaborador] = useState([]);

    const [loading, setLoading] = useState(true);

    const getColaboradores = () => {
        axios.get('https://api-treinamento-t2m.herokuapp.com/colaboradores')
            .then((response) => {
                setColaborador(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.error(error.message);
            });
    }

    useEffect(() => {
        getColaboradores()
    }, []);

    const handleClick = (p) => {
        setColaboradores(p);
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

    if (loading) {
        return (
            <Container>
                <LoadingView>
                <ActivityIndicator size='large' color='white' />
                <LoadingText>Carregando...</LoadingText>
                </LoadingView>
            </Container>
        );

    } else {
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
    }

};
