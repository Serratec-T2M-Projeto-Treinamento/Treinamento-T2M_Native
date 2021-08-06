import React from 'react';
import { Container, ListScroll, Titulo,TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import{} from './styles'
import MenuIcon from '../../components/icon';

export default function ListaPosicoes({navigation}){
    return( 
        <Container>
            <ListScroll>
                <MenuIcon/>
                <Titulo>Treinamentos</Titulo>
            <TreinamentoColaArea>
                <TreinamentoColaView>
                <TreinamentoButton >
                            <TreinamenText>Posição: </TreinamenText>
                </TreinamentoButton>
                </TreinamentoColaView>
                <TreinamentoColaView>
                <TreinamentoButton >
                            <TreinamenText>Posição: </TreinamenText>
                </TreinamentoButton>
                </TreinamentoColaView>
                <TreinamentoColaView>
                <TreinamentoButton>
                            <TreinamenText>Posição: </TreinamenText>
                </TreinamentoButton>
                </TreinamentoColaView>
            </TreinamentoColaArea>
            </ListScroll>
        </Container>

    
    
    
    
    
    
    
    
    
    
        );
};