import React, { useEffect, useState } from 'react';
import { Container, ListScroll, Titulo,PosicaoView, PosicaoButton, PosicaoText, TreinamentoButton, TreinaColaView, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
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
                <Titulo>Posições</Titulo>
                <PosicaoView>
                    <TreinamentoButton onPress={() => { navigation.navigate('Cadastrar Posições') }}>
                        <PosicaoText>Cadastrar posição</PosicaoText>
                    </TreinamentoButton>
                </PosicaoView>
                {posicoes.map((p, i) => {
                    return (
                        <TreinamentoColaArea key={i}>
                            <TreinamentoColaView>
                                <TreinamenText>{p.nome}</TreinamenText>
                                <TreinamenText>{p.descricao}</TreinamenText>
                                <TreinamentoButton onPress={() => handleClick(p)}>
                                    <PosicaoText>Requisitos para ocupação</PosicaoText>
                                </TreinamentoButton>
                            </TreinamentoColaView>
                            <TreinaColaView>
                                <PosicaoButton onPress={() => handleRemoverPosicao(p)}>
                                    <PosicaoText>Remover</PosicaoText>
                                </PosicaoButton>
                            </TreinaColaView>
                        </TreinamentoColaArea>
                    )
                })}
            </ListScroll>
        </Container>

    );
};