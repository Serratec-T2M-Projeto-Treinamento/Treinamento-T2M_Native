import React, { useEffect, useState } from 'react';
import { Container, ListScroll, Titulo, TreinaText, TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import { AuthContext } from '../../services/auth';
import axios from 'axios';
import { Alert } from 'react-native';

export default function Competencia({ navigation }) {
    const { posicao, setCompetencia, setPosicao } = React.useContext(AuthContext);
    const [refresh, setRefresh] = useState(false);

    const handleClick = (p) => {
        setCompetencia(p.competencia);
        navigation.navigate('Conhecimentos por competência');
    }

    const handleRemoveCompetencia = async (p) => {
        try {
            await axios.put(`https://api-treinamento-t2m.herokuapp.com/posComps/posicao/${posicao.idPosicoes}/competenciaARemover/${p.competencia.idCompetencias}`)
            Alert.alert('Competência removida com sucesso!');
            setRefresh(!refresh)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(async () => {
        const responsePosicao = await axios.get(`https://api-treinamento-t2m.herokuapp.com/posicoes/${posicao.idPosicoes}`)
        setPosicao(responsePosicao.data)
    }, [refresh]);

    const posicaoMap = posicao.setPosComps.map((p, i) => {
        return (
            <TreinamentoColaArea key={i}>
                <TreinamentoColaView>
                    <TreinaText>Nome: </TreinaText>
                    <TreinamenText>{p.competencia.nome}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinaText>Descrição: </TreinaText>
                    <TreinamenText>{p.competencia.descricao}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => handleClick(p)}>
                        <TreinamenText>Ver Conhecimentos</TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => handleRemoveCompetencia(p)}>
                        <TreinamenText>Remover</TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView>
            </TreinamentoColaArea>
        )
    })

    return (
        <Container>
            <ListScroll>
                <Titulo>Compentências: {posicao.nome}</Titulo>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => navigation.navigate('Cadastrar Competência')}>
                        <TreinamenText>Cadastrar Compentência</TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => navigation.navigate('Inserir Competência')}>
                        <TreinamenText>Inserir Compentência</TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView>
                {posicaoMap}
            </ListScroll>
        </Container>

    );
};