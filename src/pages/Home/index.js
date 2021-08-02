import React, { useEffect, useState } from 'react';
import {
  ContainerHome,
  HomeView,
  HomeButton,
  ButtonText,
  IconArea,
  ButtonView
} from './styles';
import MenuIcon from '../../components/icon';

export default function Home({ navigation }) {

  return (
    <ContainerHome>
      <IconArea>
        <MenuIcon />
      </IconArea>
      <HomeView>
        <ButtonView>
          <HomeButton onPress={() => { navigation.navigate('Lista de Colaboradores') }}>
            <ButtonText>Colaboradores</ButtonText>
          </HomeButton>
          {/* <HomeButton>
          <ButtonText>Treinamentos</ButtonText>
        </HomeButton> */}
        </ButtonView>
      </HomeView>
    </ContainerHome>
  );
}

