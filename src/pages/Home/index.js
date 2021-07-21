import React from 'react';
import {
  ContainerHome,
  HomeView,
  HomeButton,
  ButtonText,
  IconArea,
  ButtonView
} from './styles';
import MenuIcon from '../../components/icon';

export default function Home({navigation}) {
  return (
    <ContainerHome>
      <IconArea>
      <MenuIcon />
      </IconArea>
      <HomeView>
        <ButtonView>
        <HomeButton>
          <ButtonText onPress={()=>{navigation.navigate('Lista de Colaboradores')}}>Colaboradores</ButtonText>
        </HomeButton>

        <HomeButton>
          <ButtonText>Treinamentos</ButtonText>
        </HomeButton>
        </ButtonView>
      </HomeView>
    </ContainerHome>
  );
}

