import React, {useEffect, useState} from 'react';
import {
  Container,
  ButtonInserir,
  ButtonText,
  ButtonView,
  FormacoesButton,
  FormacoesButtonText,
  FormacoesView,
  ContentView,
  ListScroll,
  EspacoView,
} from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';

export default function Formacoes({navigation}) {
  return (
    <Container>
      <ListScroll>
        <MenuIcon />
        <ContentView>
          <ButtonView>
            <ButtonInserir onPress={() => navigation.navigate('Cadastro')}>
              <ButtonText>Inserir Treinamento</ButtonText>
            </ButtonInserir>
          </ButtonView>
        </ContentView>
        <EspacoView></EspacoView>
      </ListScroll>
    </Container>
  );
}
