import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../pages/login';
import Home from '../pages/Home';
import ListaDeColaboradores from '../pages/listaColaboradores';
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
import ListaPosicao from '../pages/ListaPosicao';
import Competencia from '../pages/competencias';
import Conhecimento from '../pages/conhecimento'
import InserirConhecimento from '../pages/inserirConhecimento';

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
            <Drawer.Screen name='Informações Colaboradores' component={InformacoesColaboradores} />
            <Drawer.Screen name='Atualizar Colaborador' component={AtualizarColaboradores} />
            <Drawer.Screen name='Atualizar Endereço' component={AtualizarEndereco} />
            <Drawer.Screen name='Inserir Endereço em Colaborador' component={CadastroEndereco} />
            <Drawer.Screen name='Inserir Certificações em Colaborador' component={InserirCertificados} />
            <Drawer.Screen name='Inserir Treinamentos em Colaborador' component={InserirTreinamentos} />
            <Drawer.Screen name='Inserir Formações em Colaborador' component={InserirFormacoes} />
            <Drawer.Screen name='Inserir Projetos em Colaborador' component={InserirProjetos} />
            <Drawer.Screen name='InserirConhecimento' component={InserirConhecimento} />
            <Drawer.Screen name='Treinamentos de um colaborador' component={Treinamentos}/>
            <Drawer.Screen name='Certificações de um colaborador' component={Certificacoes}/>
            <Drawer.Screen name='Formações de um colaborador' component={Formacoes} />
            <Drawer.Screen name='Projetos de um colaborador' component={Projetos} />
            <Drawer.Screen name='Competencias' component={Competencia} />
            <Drawer.Screen name='Conhecimento' component={Conhecimento} />
            <Drawer.Screen name='Sair' component={Login} options={{gestureEnabled:false}}/>
            {/* <Drawer.Screen name='Histórico Profissional' component={HistoricoProfissional}/> */}
            {/* options={{drawerLabel: () => null}} />  */}
        </Drawer.Navigator>
    );
};












