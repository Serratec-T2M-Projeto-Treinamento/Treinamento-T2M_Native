import React from 'react';
import { Container, ListScroll,TreinaText, Titulo,TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';

export default function Conhecimento({ navigation }){

    const { competencia, setConhecimento } = React.useContext(AuthContext);

    const handleClick = (p) => {
        console.log(p);
        setConhecimento(p);
        navigation.navigate('Treinamentos');
    }

    const posicaoMap = competencia.competencia.setCompsCons.map((p,i) => {
        return(
            <TreinamentoColaArea key={i}>
                <TreinamentoColaView>
                    <TreinaText>Nome: </TreinaText>
                    <TreinamenText>{p.conhecimento.nome}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinaText>Descrição: </TreinaText>
                    <TreinamenText>{p.conhecimento.descricao}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinamentoButton onPress={() => handleClick(p)}>
                        <TreinaText>Possiveis Treinamentos</TreinaText>
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