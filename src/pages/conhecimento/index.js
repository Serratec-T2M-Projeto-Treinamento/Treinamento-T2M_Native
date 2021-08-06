import React from 'react';
import { Container, ListScroll, Titulo,TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';

export default function Conhecimento({ navigation }){

    const { competencia, setConhecimento } = React.useContext(AuthContext);

    const handleClick = (p) => {
        console.log(p);
        setConhecimento(p);
        navigation.navigate('Possiveis treinamentos');
    }

    const posicaoMap = competencia.competencia.setCompsCons.map((p,i) => {
        return(
            <TreinamentoColaArea key={i}>
                <TreinamentoColaView>
                    <TreinamenText>Nome: </TreinamenText>
                    <TreinamenText>{p.conhecimento.nome}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamenText>Descrição: </TreinamenText>
                    <TreinamenText>{p.conhecimento.descricao}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => handleClick(p)}>
                        <TreinamenText>Possiveis Treinamentos</TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView>
            </TreinamentoColaArea>
        )
    })

    return( 
        <Container>
            <ListScroll>
                <MenuIcon/>
                <Titulo>Conhecimentos</Titulo>
                    {posicaoMap}
            </ListScroll>
        </Container>
    
        );
};