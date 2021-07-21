import React from 'react';
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
        <CadastroButton>
          <CadastroText>SALVAR</CadastroText>
        </CadastroButton>
        </ButtonView>
        <EspacoView>
        </EspacoView>
      </CadastroScroll>
      </Container>
  );
}

