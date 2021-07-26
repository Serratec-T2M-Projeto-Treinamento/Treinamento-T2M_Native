import React, { useState } from 'react';
import {
  CadastroButton,
  InputCadastro,
  CadastroText,
  CadastroScroll,
  InputArea,
  Container,
  ButtonView,
  EspacoView
} from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function Cadastro() {
  const [colaborador, setColaborador] = useState(
    {
    nome: '',
    usuario: '',
    cpf: '',
    email: '',
    dataNascimento: '',
    endereco:{
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
      } 
    })

  const navigation = useNavigation();
  
  const postColaborador = () => {
    axios.post('https://api-zerocommerce.herokuapp.com/cliente', colaborador)
    .then(() => {
      Alert.alert('Colaborador Cadastrado!')
      navigation.reset({
        routes:[{name:'Lista de Colaboradores'}]
      })
    })
    .catch(() => {
      Alert.alert('Por favor, chegue os dados novamente: erro de requisição (400)');
    });
  };
  
  console.log(colaborador);

  return (
    <Container>
      <CadastroScroll>
        <MenuIcon />
        <EspacoView>
        </EspacoView>
        <InputArea>
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, nome: text})} placeholder="Nome" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, usuario: text})} placeholder="Usuario" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, cpf: text})} placeholder="CPF" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, email: text})} placeholder="E-mail" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, dataNascimento: text})} placeholder="Data de Nascimento" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, endereco: {...colaborador.endereco, rua: text}})} placeholder="Rua" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, endereco: {...colaborador.endereco, numero: text}})} placeholder="Numero" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, endereco: {...colaborador.endereco, complemento: text}})} placeholder="Complemento" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, endereco: {...colaborador.endereco, bairro: text}})} placeholder="Bairro" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, endereco: {...colaborador.endereco, cidade: text}})} placeholder="Cidade" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, endereco: {...colaborador.endereco, estado: text}})} placeholder="Estado" />
          <InputCadastro onChangeText={(text) => setColaborador({...colaborador, endereco: {...colaborador.endereco, cep: text}})} placeholder="Cep" />
        </InputArea>
        <ButtonView>
          {/* <CadastroButton>
            <CadastroText>Histórico Profissional</CadastroText>
          </CadastroButton> */}
          <CadastroButton onPress={() => postColaborador()}>
            <CadastroText>SALVAR</CadastroText>
          </CadastroButton>
        </ButtonView>
        <EspacoView>
        </EspacoView>
      </CadastroScroll>
    </Container>
  );

}


