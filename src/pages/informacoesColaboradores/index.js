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

export default function Informacoes() {
  return (
    <Container>
      <InformacoesScroll>
      <MenuIcon />
        <EspacoView></EspacoView>
        <InformacoesArea>
          <InformacoesText>Nome:</InformacoesText>
          <InformacoesText>Posição:</InformacoesText>
          <InformacoesText>Data de Nascimento:</InformacoesText>
          <InformacoesText>CPF:</InformacoesText>
          <InformacoesText>RG:</InformacoesText>
          <InformacoesText>Estado:</InformacoesText>
          <InformacoesText>Cidade:</InformacoesText>
          <InformacoesText>Bairro:</InformacoesText>
          <InformacoesText>Rua:</InformacoesText>
          <InformacoesText>Número:</InformacoesText>
          <InformacoesText>Complemento:</InformacoesText>
          <InformacoesText>Conta Bancária:</InformacoesText>
          <InformacoesText>Pix:</InformacoesText>
          <InformacoesText>E-mail:</InformacoesText>
          <InformacoesText>E-mail T2M:</InformacoesText>
          <InformacoesText>CPF:</InformacoesText>
          <InformacoesText>Treinamentos:</InformacoesText>
          <InformacoesText>Certificações:</InformacoesText>
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
