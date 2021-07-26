import React from 'react';
import {
  InformacoesButton,
  InformacoesText,
  InformacoesScroll,
  InformacoesArea,
  Container,
  ButtonView,
  EspacoView,
  ButtonText
} from './styles';
import MenuIcon from '../../components/icon';

export default function Informacoes({route}) {

  const {colaborador} = route.params

  return (
    <Container>
      <InformacoesScroll>
      <MenuIcon />
        <EspacoView></EspacoView>
        <InformacoesArea>
          <InformacoesText>Nome: {colaborador.nome}</InformacoesText>
          <InformacoesText>Usuario: {colaborador.usuario}</InformacoesText>
          <InformacoesText>CPF: {colaborador.cpf}</InformacoesText>
          <InformacoesText>Email: {colaborador.email}</InformacoesText>
          <InformacoesText>Data de Nascimento: {colaborador.dataNascimento}</InformacoesText>
          <InformacoesText>Rua: {colaborador.endereco.rua}</InformacoesText>
          <InformacoesText>Numero: {colaborador.endereco.numero}</InformacoesText>
          <InformacoesText>Complemento: {colaborador.endereco.complemento}</InformacoesText>
          <InformacoesText>Bairro: {colaborador.endereco.bairro}</InformacoesText>
          <InformacoesText>Cidade: {colaborador.endereco.cidade}</InformacoesText>
          <InformacoesText>Estado: {colaborador.endereco.estado}</InformacoesText>
          <InformacoesText>CEP: {colaborador.endereco.cep}</InformacoesText>
         </InformacoesArea>
        <ButtonView>
          {/* <InformacoesButton>
            <ButtonText>Alterar dados</ButtonText>
          </InformacoesButton> */}
        </ButtonView>
        <EspacoView></EspacoView>
      </InformacoesScroll>
    </Container>
  );
}
