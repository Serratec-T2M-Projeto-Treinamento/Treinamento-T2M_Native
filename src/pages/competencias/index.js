import React from 'react';
import { Container, ListScroll, Titulo, TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';

export default function Competencia({ navigation }) {
    const { posicao, setCompetencia } = React.useContext(AuthContext);

    const handleClick = (p) => {
        setCompetencia(p);
        console.log(p);
        navigate.navigate('Conhecimentos por posição');
    }

    const posicaoMap = posicao.setPosComps.map((p, i) => {
        return (
            <TreinamentoColaArea key={i}>
                <TreinamentoColaView>
                    <TreinamenText>Nome: </TreinamenText>
                    <TreinamenText>{p.competencia.nome}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamenText>Descrição: </TreinamenText>
                    <TreinamenText>{p.competencia.descricao}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => handleClick(p)}>
                        <TreinamenText>Ver Conhecimentos</TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView>
            </TreinamentoColaArea>
        )
    })

    return (
        <Container>
            <ListScroll>
                <MenuIcon />
                <Titulo>Compentências</Titulo>
                    {posicaoMap}
            </ListScroll>
        </Container>

    );
};