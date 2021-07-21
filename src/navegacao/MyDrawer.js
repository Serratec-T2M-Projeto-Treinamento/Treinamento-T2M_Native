import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login';
import Home from '../pages/home';
import ListaDeColaboradores from '../pages/listaColaboradores';
import Cadastro from '../pages/cadastro';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Login'
            screenOptions={{ headerTransparent: true, headerShown: true }}>
            <Drawer.Screen name='Login' component={Login} options={{headerStyle:{backgroundColor:'#39C2C1'}}}/>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Lista de Colaboradores' component={ListaDeColaboradores} />
            <Drawer.Screen name='Cadastro' component={Cadastro} options={{headerStyle:{backgroundColor:'#CBCBCB'}}}/>
        </Drawer.Navigator>
    );
};












