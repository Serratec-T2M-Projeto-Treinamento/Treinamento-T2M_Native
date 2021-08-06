import React from 'react';
import { Container, ListScroll, Titulo,TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import{} from './styles'
import MenuIcon from '../../components/icon';

export default function PossiveisTreinamentos({navigation}){
    return( 
        <Container>
            <ListScroll>
                <MenuIcon/>
                <Titulo>Possiveis Treinamentos</Titulo>
            <TreinamentoColaArea>
                <TreinamentoColaView>
                <TreinamentoButton onPress={() => { navigation.navigate('Novos Treinamento') }}>
                            <TreinamenText>Posição: </TreinamenText>
                </TreinamentoButton>
                </TreinamentoColaView>
                <TreinamentoColaView>
                <TreinamentoButton onPress={() => { navigation.navigate('Novos Treinamento') }} >
                            <TreinamenText>Posição: </TreinamenText>
                </TreinamentoButton>
                </TreinamentoColaView>
                <TreinamentoColaView>
                <TreinamentoButton onPress={() => { navigation.navigate('Novos Treinamento') }}>
                            <TreinamenText>Posição: </TreinamenText>
                </TreinamentoButton>
                </TreinamentoColaView>
            </TreinamentoColaArea>
            </ListScroll>
        </Container>

    
    
    
    
    
    
    
    
    
    
        );
};