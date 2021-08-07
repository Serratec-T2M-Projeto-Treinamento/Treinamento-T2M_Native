import React, { useEffect, useState } from 'react';
import { Container, ListScroll, Titulo, TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';
import axios from 'axios';
import { Alert } from 'react-native';

export default function ListaPosicao({ navigation }) {
    const { setPosicao } = React.useContext(AuthContext);
    const [posicoes, setPosicoes] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios
            .get('https://api-treinamento-t2m.herokuapp.com/posicoes')
            .then((response) => {
                setPosicoes(response.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [refresh]);

    const handleClick = (p) => {
        setPosicao(p)
        navigation.navigate('Competências por posição')
    };

    async function handleRemoverPosicao(p) {
        try {
            await axios.delete(`https://api-treinamento-t2m.herokuapp.com/posicoes/${p.idPosicoes}`);
            Alert.alert('Posição removida com sucesso!');
            setRefresh(!refresh);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <ListScroll>
                <MenuIcon />
                <Titulo>Posições</Titulo>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => { navigation.navigate('Cadastrar Posições') }}>
                        <TreinamenText>Cadastrar posição</TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView>
                {posicoes.map((p, i) => {
                    return (
                        <TreinamentoColaArea key={i}>
                            <TreinamentoColaView>
                                <TreinamenText>{p.nome}</TreinamenText>
                                <TreinamenText>{p.descricao}</TreinamenText>
                                <TreinamentoButton onPress={() => handleClick(p)}>
                                    <TreinamenText>Requisitos para ocupação</TreinamenText>
                                </TreinamentoButton>
                                <TreinamentoButton onPress={() => handleRemoverPosicao(p)}>
                                    <TreinamenText>Remover</TreinamenText>
                                </TreinamentoButton>
                            </TreinamentoColaView>
                        </TreinamentoColaArea>
                    )
                })}
            </ListScroll>
        </Container>

    );
};