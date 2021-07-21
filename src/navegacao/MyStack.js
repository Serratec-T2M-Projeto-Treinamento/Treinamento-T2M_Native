import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/home';
import ListaColaboradores from '../pages/listaColaboradores';
import Cadastro from '../pages/cadastro';

const Stack = createStackNavigator();

export default function MyStack(){
    return(
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{headerTransparent:true, headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Lista de Colaboradores' component={ListaColaboradores}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
    </Stack.Navigator>
); 
};