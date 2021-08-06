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
  TodoButton,
  EndButton,
  EndText,
  EndView
} from './styles';
import MenuIcon from '../../components/icon';
import { handleDate } from '../../components/dataFormatada';
import { AuthContext } from '../../services/auth';
import axios from 'axios';
import { Alert } from 'react-native';

export default function Informacoes({ route, navigation }) {

  if (route.params) {
    const { setEnderecos, setColaboradores, colaboradores } = React.useContext(AuthContext);

    const { colaborador } = route.params

    const [refresh, setRefresh] = useState(false);

    useEffect(async () => {
      try {
        const responseColab = await axios.get(`https://api-treinamento-t2m.herokuapp.com/colaboradores/${colaboradores.idColaboradores}`);
        setColaboradores(responseColab.data);
      } catch (error) {
        Alert.alert('Ocorreu um erro... ' + error);
      }
    }, [refresh]);

    const handleClickEndr = () => {
      navigation.navigate('Inserir Endereço em Colaborador', { colaborador });
    }

    const handleClickProj = () => {
      navigation.navigate('Projetos de um colaborador', { colaborador });
    }

    const handleClickForm = () => {
      navigation.navigate('Formações de um colaborador', { colaborador });
    }

    const handleClickCert = () => {
      navigation.navigate('Certificações de um colaborador', { colaborador });
    }

    const handleClickTrein = () => {
      navigation.navigate('Treinamentos de um colaborador', { colaborador });
    }

    const handleClickColab = () => {
      navigation.navigate('Atualizar Colaborador', { colaborador });
    }

    const handleClickEnder = (p) => {
      setEnderecos(p)
      navigation.navigate('Atualizar Endereço', { colaborador });
    }

    const handleDeleteColab = async () => {
      console.log(colaboradores.idColaboradores);
      try {
        await axios.delete(`https://api-treinamento-t2m.herokuapp.com/colaboradores/${colaboradores.idColaboradores}`);
        Alert.alert('Colaborador deletado com sucesso!');
        navigation.reset({
          routes: [{ name: 'Lista de Colaboradores' }]
        })

      } catch (error) {
        console.error(error.message);
      }
    }

    const handleRemoveEndr = async (p) => {
      console.log(p.endereco.idEnderecos);
      console.log(colaboradores.idColaboradores);
      await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsEndrs/colaborador/${colaboradores.idColaboradores}/enderecoARemover/${p.endereco.idEnderecos}`)
      Alert.alert('Endereço removido com sucesso!');
      setRefresh(!refresh);
    } 

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
          <MenuIcon />
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
              <EndView>
                <EndButton onPress={() => handleClickColab()}>
                  <EndText>Alterar dados</EndText>
                </EndButton>
              </EndView>
              <EndView>
                <EndButton onPress={() => handleDeleteColab()}>
                  <EndText>Deletar Colaborador</EndText>
                </EndButton>
              </EndView>
            </DadosArea>
            {colaborador.setColabsEndrs.map((p, i) => {
              return (
                <DadosArea key={i}>
                  <DadosView>
                    <InformacoesText>País: </InformacoesText>
                    <DadosText>{p.endereco.pais}</DadosText>
                  </DadosView>
                  <DadosView>
                    <InformacoesText>Estado: </InformacoesText>
                    <DadosText>{p.endereco.estado}</DadosText>
                  </DadosView>
                  <DadosView>
                    <InformacoesText>Cidade: </InformacoesText>
                    <DadosText>{p.endereco.cidade}</DadosText>
                  </DadosView>
                  <DadosView>
                    <InformacoesText>Bairro: </InformacoesText>
                    <DadosText>{p.endereco.bairro}</DadosText>
                  </DadosView>
                  <DadosView>
                    <InformacoesText>Rua: </InformacoesText>
                    <DadosText>{p.endereco.rua}</DadosText>
                  </DadosView>
                  <DadosView>
                    <InformacoesText>Numero: </InformacoesText>
                    <DadosText>{p.endereco.numero}</DadosText>
                  </DadosView>
                  <DadosView>
                    <InformacoesText>Complemento: </InformacoesText>
                    <DadosText>{p.endereco.complemento}</DadosText>
                  </DadosView>
                  <DadosView>
                    <InformacoesText>CEP: </InformacoesText>
                    <DadosText>{p.endereco.cep}</DadosText>
                  </DadosView>
                  <EndView>
                    <EndButton onPress={() => handleClickEnder(p)}>
                      <EndText>Alterar dados</EndText>
                    </EndButton>
                  </EndView>
                  <EndView>
                <EndButton onPress={() => handleRemoveEndr(p)}>
                  <EndText>Remover Endereço</EndText>
                </EndButton>
              </EndView>
                </DadosArea>
              )
            })}
            <EndView>
              <EndButton onPress={() => handleClickEndr()}>
                <EndText>Inserir endereço</EndText>
              </EndButton>
            </EndView>
          </InformacoesArea>
          <ButtonView>
            <TodoButton onPress={() => handleClickCert()}>
              <ButtonText>Certificações</ButtonText>
            </TodoButton>
            <TodoButton onPress={() => handleClickTrein()}>
              <ButtonText>Treinamentos</ButtonText>
            </TodoButton>
            <TodoButton onPress={() => handleClickForm()}>
              <ButtonText>Formações</ButtonText>
            </TodoButton>
            <TodoButton onPress={() => handleClickProj()}>
              <ButtonText>Projetos atuais</ButtonText>
            </TodoButton>
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