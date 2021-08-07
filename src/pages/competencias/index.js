import React from 'react';
import { Container, ListScroll, Titulo,TreinaText, TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';

export default function Competencia({ navigation }) {
    const { posicao, setCompetencia } = React.useContext(AuthContext);

    const handleClick = (p) => {
        setCompetencia(p);
        navigation.navigate('Conhecimentos por posição');
    }

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