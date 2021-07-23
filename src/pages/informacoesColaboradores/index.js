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
          <InformacoesText>Posição: {colaborador.posicao}</InformacoesText>
          <InformacoesText>Data de Nascimento: {colaborador.dataNascimento}</InformacoesText>
          <InformacoesText>CPF: {colaborador.cpf}</InformacoesText>
          <InformacoesText>RG: {colaborador.rg}</InformacoesText>
          <InformacoesText>País: {colaborador.pais}</InformacoesText>
          <InformacoesText>Estado: {colaborador.estado}</InformacoesText>
          <InformacoesText>Cidade: {colaborador.cidade}</InformacoesText>
          <InformacoesText>Bairro: {colaborador.bairro}</InformacoesText>
          <InformacoesText>Rua: {colaborador.rua}</InformacoesText>
          <InformacoesText>Número: {colaborador.numero}</InformacoesText>
          <InformacoesText>Complemento: {colaborador.complemento}</InformacoesText>
          <InformacoesText>Conta Bancária: {colaborador.contaBancaria}</InformacoesText>
          <InformacoesText>Pix: {colaborador.pix}</InformacoesText>
          <InformacoesText>E-mail: {colaborador.email}</InformacoesText>
          <InformacoesText>E-mail T2M: {colaborador.emailT2m}</InformacoesText>
          <InformacoesText>Treinamentos: {colaborador.treinamentos}</InformacoesText>
          <InformacoesText>Certificações: {colaborador.certificacoes}</InformacoesText>
         </InformacoesArea>
        <ButtonView>
          <InformacoesButton>
            <ButtonText>Alterar dados</ButtonText>
          </InformacoesButton>
        </ButtonView>
        <EspacoView></EspacoView>
      </InformacoesScroll>
    </Container>
  );
}
