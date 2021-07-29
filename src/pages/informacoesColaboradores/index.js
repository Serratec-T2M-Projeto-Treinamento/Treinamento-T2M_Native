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
import axios from 'axios';


export default function Informacoes({ route, navigation }) {


  if (route.params) {
    const { colaborador } = route.params

    const [endereco, setEndereco] = useState({})

    const getDados = () => {
      axios.get(`https://api-treinamento-t2m.herokuapp.com/enderecos/${colaborador.setColaboradoresEnderecos[0].idColaboradoresEnderecos.idEndereco}`)
        .then((response) => {
          setEndereco(response.data);
        })
    }

    useEffect(() => {
      getDados()
    }, []);

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
                <InformacoesText>Data de Nascimento: </InformacoesText>
                <DadosText>{colaborador.dataNascimento}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>CNH: </InformacoesText>
                <DadosText>{colaborador.cnh}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Permissão: </InformacoesText>
                <DadosText>{colaborador.permissao}</DadosText>
              </DadosView>
              <DadosView>
                <InformacoesText>Usuario: </InformacoesText>
                <DadosText>{colaborador.usuario}</DadosText>
              </DadosView>
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
            <TodoButton>
              <ButtonText onPress={() => navigation.navigate('Certificações')}>Certificações</ButtonText>
            </TodoButton>
            <TodoButton>
              <ButtonText onPress={() => navigation.navigate('Formações')}>Treinamentos</ButtonText>
            </TodoButton>
            <TodoButton>
              <ButtonText onPress={() => navigation.navigate('Histórico Profissional')}>Histórico Profissional</ButtonText>
            </TodoButton>
            <TodoButton>
              <ButtonText >Projetos atuais</ButtonText>
            </TodoButton>
            <InformacoesButton>
              <ButtonText>Alterar dados</ButtonText>
            </InformacoesButton>
          </ButtonView>
          <EspacoView></EspacoView>
        </InformacoesScroll>
      </Container >
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
