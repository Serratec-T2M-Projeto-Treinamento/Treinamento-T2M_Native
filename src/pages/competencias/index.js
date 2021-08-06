import React from 'react';
import { Container, ListScroll, Titulo,TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import{} from './styles'
import MenuIcon from '../../components/icon';

export default function Competencia({navigation}){
    return( 
        <Container>
            <ListScroll>
                <MenuIcon/>
                <Titulo>Compentências</Titulo>
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