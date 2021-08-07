import React from 'react';
import { Container, ListScroll, Titulo, TreinaText, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import { } from './styles'
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';

export default function PossiveisTreinamentos({ navigation }) {
    const { conhecimento } = React.useContext(AuthContext);

    const treinamentos = conhecimento.conhecimento.setConsTrns.map((p, i) => {
        return (
            <TreinamentoColaArea key={i}>
                <TreinamentoColaView>
                    <TreinaText>Nome:</TreinaText>
                    <TreinamenText>{p.treinamento.nome}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinaText>Descrição:</TreinaText>
                    <TreinamenText>{p.treinamento.descricao}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinaText>Instituição:</TreinaText>
                    <TreinamenText>{p.treinamento.instituicao}</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                    <TreinaText>Carga Horária:</TreinaText>
                    <TreinamenText>{p.treinamento.cargaHoraria}Hora(s)</TreinamenText>
                </TreinamentoColaView>
                {/* <TreinamentoColaView>
                    <TreinamentoButton onPress={() => { navigation.navigate('Treinamentos') }} >
                        <TreinamenText>Posição: </TreinamenText>
                    </TreinamentoButton>
                </TreinamentoColaView> */}
            </TreinamentoColaArea>
        )
    })
    return (
        <Container>
            <ListScroll>
                <MenuIcon />
                <Titulo>Possiveis Treinamentos</Titulo>
                    {treinamentos}
            </ListScroll>
        </Container>











    );
};