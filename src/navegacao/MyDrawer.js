import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaInicial from '../pages/telaInicial';
import Login from '../pages/login';
import Home from '../pages/home';
import ListaDeColaboradores from '../pages/listaColaboradores';
import Cadastro from '../pages/cadastro';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{ headerTransparent: true, headerShown: true }}>
            <Drawer.Screen name='Tela Inicial' component={TelaInicial} options={{headerStyle:{backgroundColor:'#ddd'}}}/>
            <Drawer.Screen name='Login' component={Login} options={{headerStyle:{backgroundColor:'#39C2C1'}}}/>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Lista de Colaboradores' component={ListaDeColaboradores} />
            <Drawer.Screen name='Cadastro' component={Cadastro} options={{headerStyle:{backgroundColor:'#CBCBCB'}}}/>
        </Drawer.Navigator>
    );
};












