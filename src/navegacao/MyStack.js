import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/Home';
import ListaColaboradores from '../pages/listaColaboradores';
import InformacoesColaboradores from '../pages/informacoesColaboradores';
import Cadastro from '../pages/cadastro';
import CadastroEndereco from '../pages/inserirEndereco';
import InserirCertificados from '../pages/inserirCertificacao';
import InserirTreinamentos from '../pages/inserirTreinamentos';
import InserirFormacoes from '../pages/inserirFormacoes';
import InserirProjetos from '../pages/inserirProjetos';
import AtualizarEndereco from '../pages/atualizarEndereco';
import Projetos from '../pages/projetos';
import Formacoes from '../pages/formacoes';
import Certificacoes from  '../pages/certificacao';
import Treinamentos from '../pages/treinamentos';
import AtualizarColaboradores from '../pages/atualizarColaboradores';
import Competencia from '../pages/competencias';
import Conhecimento from '../pages/conhecimento'
import InserirConhecimento from '../pages/inserirConhecimento';
import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from './MyDrawer';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerTransparent: true, headerShown: false }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Lista de Colaboradores' component={ListaColaboradores} />
            <Stack.Screen name='Informações Colaboradores' component={InformacoesColaboradores} />
            <Stack.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Atualizar Colaborador' component={AtualizarColaboradores} />
            <Drawer.Screen name='Atualizar Endereço' component={AtualizarEndereco} />
            <Drawer.Screen name='Inserir Endereço em Colaborador' component={CadastroEndereco} />
            <Drawer.Screen name='Inserir Certificações em Colaborador' component={InserirCertificados} />
            <Drawer.Screen name='Inserir Treinamentos em Colaborador' component={InserirTreinamentos} />
            <Drawer.Screen name='Inserir Formações em Colaborador' component={InserirFormacoes} />
            <Drawer.Screen name='Inserir Projetos em Colaborador' component={InserirProjetos} />
            <Drawer.Screen name='InserirConhecimento' component={InserirConhecimento} />
            <Drawer.Screen name='Treinamentos de um colaborador' component={Treinamentos} />
            <Drawer.Screen name='Certificações de um colaborador' component={Certificacoes} />
            <Drawer.Screen name='Formações de um colaborador' component={Formacoes} />
            <Drawer.Screen name='Projetos de um colaborador' component={Projetos} />
            <Drawer.Screen name='Competências por posição' component={Competencia} />
            <Drawer.Screen name='Conhecimentos por posição' component={Conhecimento} />
            <Stack.Screen name='Drawer' component={MyDrawer} />
        </Stack.Navigator>
    );
};
