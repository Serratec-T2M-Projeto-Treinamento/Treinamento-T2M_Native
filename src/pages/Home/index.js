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
import { Text, Button} from'react-native';
import MenuIcon from '../../components/icon';
import * as Animatable from 'react-native-animatable';

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

