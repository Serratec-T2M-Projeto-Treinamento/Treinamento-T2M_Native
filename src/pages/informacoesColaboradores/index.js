import React, { useEffect, useState } from 'react';
import {
  InformacoesButton,
  InformacoesText,
  InformacoesScroll,
  InformacoesArea,
  Container,
  ButtonView,
  EspacoView,
  ButtonText,
  MensagemView,
  DadosText,
  DadosView,
  DadosArea,
  MensagemArea,
  MensagemText,
  TodoButton
} from './styles';
import MenuIcon from '../../components/icon';
import { handleDate } from '../../components/dataFormatada';
import axios from 'axios';

export default function Informacoes({ route, navigation }) {

  if (route.params) {
    const { colaborador } = route.params

    const [endereco, setEndereco] = useState([])

    const getDados = () => {
      axios.get(`https://api-treinamento-t2m.herokuapp.com/enderecos/${colaborador.setColaboradoresEnderecos[0].idColaboradoresEnderecos.idEndereco}`)
        .then((response) => {
          setEndereco(response.data);
        })
    }

    useEffect(() => {
      getDados()
    }, [colaborador]);

    const handleClickProj = () => {
      navigation.navigate('Projetos', { colaborador });
    }

    const handleClickForm = () => {
      navigation.navigate('Formações', { colaborador });
    }

    // const handleClickCert = () => {
    //   navigation.navigate('Certificações', { colaborador });
    // }

    const handlePermissao = () => {
      if (colaborador.permissao === 2) {
        return (
          <DadosView>
            <InformacoesText>Permissão: </InformacoesText>
            <DadosText>Administrador</DadosText>
          </DadosView>
        )
      } else if (colaborador.permissao === 1) {
        return (
          <DadosView>
            <InformacoesText>Permissão: </InformacoesText>
            <DadosText>Líder</DadosText>
          </DadosView>
        )
      } else {
        return (
          <DadosView>
            <InformacoesText>Permissão: </InformacoesText>
            <DadosText>Colaborador</DadosText>
          </DadosView>
        )
      }
    };

    return (
      <Container>
        <InformacoesScroll>
          <MenuIcon/>
          <InformacoesArea>
            <DadosArea>
              <DadosView>
                <InformacoesText>Nome: </InformacoesText>
                <DadosText>{colaborador.nome}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>RG: </InformacoesText>
                <DadosText>{colaborador.rg}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>CPF: </InformacoesText>
                <DadosText>{colaborador.cpf}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Email: </InformacoesText>
                <DadosText>{colaborador.email}</DadosText>
              </DadosView>
              <DadosView>
              <InformacoesText>Data de nascimento: </InformacoesText>
              {handleDate(colaborador.dataNascimento)}
              </DadosView>
              <DadosView>
                <InformacoesText>CNH: </InformacoesText>
                <DadosText>{colaborador.cnh}</DadosText>
              </DadosView>
              {handlePermissao()}
              <DadosView>
                <InformacoesText>Posição: </InformacoesText>
                <DadosText>{colaborador.posicao.nome}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>País: </InformacoesText>
                <DadosText>{endereco.pais}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Estado: </InformacoesText>
                <DadosText>{endereco.estado}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Cidade: </InformacoesText>
                <DadosText>{endereco.cidade}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Bairro: </InformacoesText>
                <DadosText>{endereco.bairro}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Rua: </InformacoesText>
                <DadosText>{endereco.rua}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Numero: </InformacoesText>
                <DadosText>{endereco.numero}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Complemento: </InformacoesText>
                <DadosText>{endereco.complemento}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>CEP: </InformacoesText>
                <DadosText>{endereco.cep}</DadosText>
              </DadosView>
            </DadosArea>
          </InformacoesArea>
          <ButtonView>
            {/* <TodoButton onPress={() => handleClickCert()}>
              <ButtonText>Certificações</ButtonText>
            </TodoButton> */}
            <TodoButton onPress={() => handleClickForm()}>
              <ButtonText>Treinamentos</ButtonText>
            </TodoButton>
            <TodoButton onPress={() => handleClickProj()}>
              <ButtonText>Projetos atuais</ButtonText>
              </TodoButton>
            {/* <InformacoesButton>
              <ButtonText>Alterar dados</ButtonText>
            </InformacoesButton> */}
          </ButtonView>
          <EspacoView></EspacoView>
        </InformacoesScroll>
      </Container>
    );

  } else {
    return (
      <Container>
        <MenuIcon />
        <MensagemArea>
          <MensagemView>
            <MensagemText>Nenhuma informação encontrada,</MensagemText>
            <MensagemText>escolha um colaborador primeiro.</MensagemText>
          </MensagemView>
        </MensagemArea>
      </Container>
    )
  }

}