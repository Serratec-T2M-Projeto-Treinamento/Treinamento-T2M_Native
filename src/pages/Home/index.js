import React from 'react';
import {
  ContainerHome,
  HomeView,
  HomeButton,
  ButtonText,
  IconView,
  IconButton
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

export default function Home({navigation}) {
  return (
    <ContainerHome>
      
      <HomeView>
        <HomeButton>
          <ButtonText onPress={()=>{navigation.navigate('Lista de Colaboradores')}}>Colaboradores</ButtonText>
        </HomeButton>

        <HomeButton>
          <ButtonText>Treinamentos</ButtonText>
        </HomeButton>
      </HomeView>
    </ContainerHome>
  );
}

