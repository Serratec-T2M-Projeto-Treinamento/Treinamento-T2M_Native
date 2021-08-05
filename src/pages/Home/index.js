import React, { useEffect, useState, useRef } from 'react';
import {
  ContainerHome,
  HomeView,
  HomeButton,
  ButtonText,
  IconArea,
  ButtonView,
  LogoView,
  Logo,
  HoView,
  HomeText
} from './styles';
import { Text, Button, Animated } from'react-native';
import MenuIcon from '../../components/icon';

export default function Home({ navigation }) {
  
    

  return (
    <ContainerHome>
      <IconArea>
        <MenuIcon />
      </IconArea>
      <HomeView>
      <LogoView>
          <Logo source={require('../../../assets/logo.png')} />
      </LogoView>
      <HoView>
              <HomeText>Bem Vindo!</HomeText>
        </HoView>
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

