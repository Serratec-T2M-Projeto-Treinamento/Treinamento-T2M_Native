import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/Home';
import ListaColaboradores from '../pages/listaColaboradores';
import InformacoesColaboradores from '../pages/informacoesColaboradores';
import Cadastro from '../pages/cadastro';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function MyStack(){
    return(
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{headerTransparent:true, headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Lista de Colaboradores' component={ListaColaboradores}/>
        <Stack.Screen name='Informações Colaboradores' component={InformacoesColaboradores}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        {/* <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
            title: 'Awesome app',
            headerLeft: () => (
                <ButtonIcon onPress={() => navigation.toggleDrawer()}>
                <MenuIcon name='md-menu' size={40}/>
                </ButtonIcon>
            ),
        })}
        /> */}
    </Stack.Navigator>
); 
};