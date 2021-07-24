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
import { Alert } from 'react-native';

export default function Cadastro() {
  return (
    <Container>
      <CadastroScroll>
        <MenuIcon />
        <EspacoView>
        </EspacoView>
        <InputArea>
          <InputCadastro placeholder="Nome" />
          <InputCadastro placeholder="Data de Nascimento" />
          <InputCadastro placeholder="CPF" />
          <InputCadastro placeholder="RG" />
          <InputCadastro placeholder="Cep" />
          <InputCadastro placeholder="E-mail" />
          <InputCadastro placeholder="País" />
          <InputCadastro placeholder="Estado" />
          <InputCadastro placeholder="Cidade" />
          <InputCadastro placeholder="Bairro" />
          <InputCadastro placeholder="Rua" />
          <InputCadastro placeholder="Numero" />
          <InputCadastro placeholder="Complemento" />
          <InputCadastro placeholder="Posição" />
          <InputCadastro placeholder="Conta bancária" />
          <InputCadastro placeholder="Pix" />
          <InputCadastro placeholder="E-mail T2M" />
          <InputCadastro placeholder="Certificação 1" />
          <InputCadastro placeholder="Treinamento 1" />
        </InputArea>
        <ButtonView>
          <CadastroButton>
            <CadastroText>Histórico Profissional</CadastroText>
          </CadastroButton>
          <CadastroButton >
            <CadastroText>SALVAR</CadastroText>
          </CadastroButton>
        </ButtonView>
        <EspacoView>
        </EspacoView>
      </CadastroScroll>
    </Container>
  );

    // const [colaborador, setColaborador] = useState({
  //   nome: '',
  //   usuario: '',
  //   cpf: '',
  //   email: '',
  //   dataNascimento: '',
  //   endereco: {
  //     rua: '',
  //     numero: '',
  //     complemento: '',
  //     bairro: '',
  //     cidade: '',
  //     estado: '',
  //     cep: ''
  //   }
  // });

  // const handleNomeChange = (text) => {
  //   setColaborador({ ...colaborador, nome: text });
  //   console.log(colaborador);
  // }

  // const handleUsuarioChange = (text) => {
  //   setColaborador({ ...colaborador, usuario: text });
  // }

  // const handleCpfChange = (text) => {
  //   setColaborador({ ...colaborador, cpf: text });
  // }

  // const handleEmailChange = (text) => {
  //   setColaborador({ ...colaborador, email: text });
  // }

  // const handleDataChange = (text) => {
  //   setColaborador({ ...colaborador, dataNascimento: text });
  // }

  // const handleRuaChange = (text) => {
  //   setColaborador({ ...colaborador, rua: text });
  // }

  // const handleNumeroChange = (text) => {
  //   setColaborador({ ...colaborador, numero: text });
  // }

  // const handleComplementoChange = (text) => {
  //   setColaborador({ ...colaborador, complemento: text });
  // }

  // const handleBairroChange = (text) => {
  //   setColaborador({ ...colaborador, bairro: text });
  // }

  // const handleCidadeChange = (text) => {
  //   setColaborador({ ...colaborador, cidade: text });
  // }

  // const handleEstadoChange = (text) => {
  //   setColaborador({ ...colaborador, estado: text });
  // }
  
  // const handleCepChange = (text) => {
  //   setColaborador({ ...colaborador, cep: text });
  // }
  
  
  // const postColaborador = () => {
  //   axios.post('https://api-zerocommerce.herokuapp.com/cliente', )
  // };

  // const handleChange = (text) => {
  // setColaborador({...colaborador, nome: text})
  // }
}


