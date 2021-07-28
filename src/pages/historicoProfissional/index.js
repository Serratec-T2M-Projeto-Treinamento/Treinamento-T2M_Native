import React from 'react';
import{Container, HistoricoScroll, HistoricoArea, HistoricoView, HistoricoText, EspacoView, HistoView}from './styles';
import MenuIcon from '../../components/icon';

export default function historicoProfissional() {


    return(
        <Container>
            <HistoricoScroll>
                <MenuIcon/>
                 <HistoricoArea>
                 <HistoView>
                        <HistoricoText> Historico Profissional </HistoricoText>
                    </HistoView>
                    <HistoricoView>
                        <HistoricoText> Empresa: </HistoricoText>
                        <HistoricoText>- Cargo: </HistoricoText>
                        <HistoricoText>- Data da entrada: </HistoricoText>
                        <HistoricoText>- Data de saida:</HistoricoText>
                    </HistoricoView>
                    <HistoricoView>
                        <HistoricoText>- Empresa: </HistoricoText>
                        <HistoricoText>- Cargo: </HistoricoText>
                        <HistoricoText>- Data da entrada: </HistoricoText>
                        <HistoricoText>- Data de saida:</HistoricoText>
                    </HistoricoView>
                    <HistoricoView>
                        <HistoricoText>- Empresa: </HistoricoText>
                        <HistoricoText>- Cargo: </HistoricoText>
                        <HistoricoText>- Data da entrada: </HistoricoText>
                        <HistoricoText>- Data de saida:</HistoricoText>
                    </HistoricoView>
                    <HistoricoView>
                        <HistoricoText>- Empresa: </HistoricoText>
                        <HistoricoText>- Cargo: </HistoricoText>
                        <HistoricoText>- Data da entrada: </HistoricoText>
                        <HistoricoText>- Data de saida:</HistoricoText>
                    </HistoricoView>
                </HistoricoArea>
                <EspacoView></EspacoView>
            </HistoricoScroll>
        </Container>

    )
}