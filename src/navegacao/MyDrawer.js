import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login';
import Home from '../pages/Home';
import ListaDeColaboradores from '../pages/listaColaboradores';
import Cadastro from '../pages/cadastro';
import ListaPosicao from '../pages/ListaPosicao';
import Competencia from '../pages/competencias';
import Conhecimento from '../pages/conhecimento'
import InserirConhecimento from '../pages/inserirConhecimento';
import PossiveisTreinamentos from '../pages/possiveisTreinamentos';
import NovosTreinamentos from '../pages/novosTreinamentos';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Lista de Colaboradores' component={ListaDeColaboradores} />
            <Drawer.Screen name='Lista de Posições' component={ListaPosicao} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Sair' component={Login} options={{gestureEnabled:false}}/>
        </Drawer.Navigator>
    );
};












