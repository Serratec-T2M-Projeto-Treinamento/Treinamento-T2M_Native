import React, {useState, useEffect} from 'react';
import {
  Container,
  FormacoesView,
  FormacoesText,
  DadosView,
  DadosText,
  ListScroll,
  EspacoView,
  FormacoesArea,
  MensagemArea,
  MensagemView,
  MensagemText,
  FormacoesButton,
  FormaText,
  EndView,
  EndText,
  EndButton
} from './styles';
import MenuIcon from '../../components/icon';
import { Titulo } from '../certificacao/styles';
import axios from 'axios';
import { AuthContext } from '../../services/auth';

export default function Formacoes({ route, navigation }) {
  if (route.params) {
    const { colaborador } = route.params

    const { colaboradores, setColaboradores } = React.useContext(AuthContext);


    const [refresh, setRefresh] = useState(false);

    const getColab = async () => {
        try {
            const responseColab = await axios.get(`https://api-treinamento-t2m.herokuapp.com/colaboradores/${colaboradores.idColaboradores}`);
            setColaboradores(responseColab.data);
        } catch (error) {
            Alert.alert('Ocorreu um erro... ' + error);
        }
    }

    useEffect(() => {
        getColab()
    }, [refresh]);

    function handleNavForm() {
      navigation.navigate('Inserir Formações em Colaborador', { colaborador })
    }

    async function handleRemoveForm(p){
      await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsForms/${colaboradores.idColaboradores}/formacaoARemover/${p.formacao.idFormacoes}`);
      alert("Formação removida com sucesso!");
      setRefresh(!refresh);
    };

    return (
      <Container>
        <ListScroll>
          <MenuIcon />
          <Titulo>Formações:</Titulo>
          {colaboradores.setColabsForms.map((p, i) => {
            return (
              <FormacoesArea key={i}>
                <FormacoesView>
                  <FormacoesText>Nome: </FormacoesText>
                </FormacoesView>
                <DadosView>
                  <DadosText>{p.formacao.nome}</DadosText>
                </DadosView>
                <FormacoesView>
                  <FormacoesText>Nível: </FormacoesText>
                </FormacoesView>
                <DadosView>
                  <DadosText>{p.formacao.nivel}</DadosText>
                </DadosView>
                <FormacoesView>
                  <FormacoesText>Instituição: </FormacoesText>
                </FormacoesView>
                <DadosView>
                  <DadosText>{p.formacao.instituicao}</DadosText>
                </DadosView>
                <EndView>
                  <EndButton onPress={() => handleRemoveForm(p)}>
                    <EndText>Deletar</EndText>
                  </EndButton>
                </EndView>
              </FormacoesArea>
            )
          })}
          <FormacoesView>
            <FormacoesButton onPress={() => handleNavForm()}>
              <FormaText>Inserir Formações</FormaText>
            </FormacoesButton>
          </FormacoesView>
          <EspacoView></EspacoView>
        </ListScroll>
      </Container>
    );
  } else {
    return (
      <Container>
        <MenuIcon />
        <MensagemArea>
          <MensagemView>
            <MensagemText>Nenhuma informação encontrada,</MensagemText>
            <MensagemText>escolha um colaborador primeiro para ver sua formação.</MensagemText>
          </MensagemView>
        </MensagemArea>
      </Container>
    )
  }
}

{/* <ButtonView>
  <ButtonInserir onPress={() => navigation.navigate('Cadastro')}>
    <ButtonText>Inserir Treinamento</ButtonText>
  </ButtonInserir>
</ButtonView> */}