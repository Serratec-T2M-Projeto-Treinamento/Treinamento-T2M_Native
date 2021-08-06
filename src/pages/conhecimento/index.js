import React from 'react';
import { Container, ListScroll, Titulo,TreinamentoButton, TreinamentoColaArea, TreinamentoColaView, TreinamenText } from './styles';
import{} from './styles'
import MenuIcon from '../../components/icon';

export default function Competencia({navigation}){
    return( 
        <Container>
            <ListScroll>
                <MenuIcon/>
                <Titulo>Conhecimentos</Titulo>
            <TreinamentoColaArea>
                <TreinamentoColaView> 
                            <TreinamenText>Linguagens:Python </TreinamenText>
                            <TreinamenText>nivel:Avançado</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                            <TreinamenText>Linguagem:C+ </TreinamenText>
                            <TreinamenText>nivel:Avançado</TreinamenText>
                </TreinamentoColaView>
                <TreinamentoColaView>
                            <TreinamenText>Linguagem:JavaScript </TreinamenText>
                            <TreinamenText>nivel:Avançado </TreinamenText>
                </TreinamentoColaView>
            </TreinamentoColaArea>
            </ListScroll>
        </Container>

    
    
    
    
    
    
    
    
    
    
        );
};