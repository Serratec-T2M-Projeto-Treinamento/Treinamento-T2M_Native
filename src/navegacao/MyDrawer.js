import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login';
import Home from '../pages/Home';
import ListaDeColaboradores from '../pages/listaColaboradores';
import InformacoesColaboradores from '../pages/informacoesColaboradores';
import Cadastro from '../pages/cadastro';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Sair'
            screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Lista de Colaboradores' component={ListaDeColaboradores} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Sair' component={Login} options={{gestureEnabled:false}}/>
            <Drawer.Screen name='Informações Colaboradores' component={InformacoesColaboradores} options={{drawerLabel: () => null}}/>
            {/* Fazer o "Informações Colaboradores" sair do drawer navigator  */}
        </Drawer.Navigator>
    );
};












