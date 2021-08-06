import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login';
import Home from '../pages/Home';
import ListaDeColaboradores from '../pages/listaColaboradores';
import Cadastro from '../pages/cadastro';
import ListaPosicao from '../pages/ListaPosicao';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Lista de Posições'
            screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Lista de Colaboradores' component={ListaDeColaboradores} />
            <Drawer.Screen name='Lista de Posições' component={ListaPosicao} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Sair' component={Login} options={{gestureEnabled:false}}/>
        </Drawer.Navigator>
    );
};












