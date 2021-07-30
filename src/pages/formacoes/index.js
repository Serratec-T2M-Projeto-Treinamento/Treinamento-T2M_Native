import React, { useEffect, useState } from 'react';
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
  MensagemText
} from './styles';
import MenuIcon from '../../components/icon';
import { handleDate } from '../../components/dataFormatada';
import axios from 'axios';


export default function Formacoes({ route, navigation }) {
  if (route.params) {
    const { colaborador } = route.params

    const [formacao, setFormacao] = useState([]);

    const getFormacao = () => {
      colaborador.setColaboradoresFormacoes.map((p, i) => {
        axios.get(`https://api-treinamento-t2m.herokuapp.com/formacoes/${colaborador.setColaboradoresFormacoes[i].idColaboradoresFormacoes.idFormacao}`)
          .then((response) => {
            setFormacao([response.data]);
          })
          .catch((error) => {
            console.error(error.message);
          })
      })

    }

    useEffect(() => {
      getFormacao()
    }, [colaborador]);

    return (
      <Container>
        {formacao.map((p, i) => {
          return (
            <ListScroll key={i}>
              <MenuIcon />
              <FormacoesArea>
                <FormacoesView>
                  <FormacoesText>Nome: </FormacoesText>
                </FormacoesView>
                <DadosView>
                  <DadosText>{p.nome}</DadosText>
                </DadosView>
                <FormacoesView>
                  <FormacoesText>Nível: </FormacoesText>
                </FormacoesView>
                <DadosView>
                  <DadosText>{p.nivel}</DadosText>
                </DadosView>
                <FormacoesView>
                  <FormacoesText>Instituição: </FormacoesText>
                </FormacoesView>
                <DadosView>
                  <DadosText>{p.instituicao}</DadosText>
                </DadosView>
                <FormacoesView>
                  <FormacoesText>Data de Entrada: </FormacoesText>
                </FormacoesView>
                {handleDate(colaborador.setColaboradoresFormacoes[i].dataEntrada)}
                <FormacoesView>
                  <FormacoesText>Data de Conclusão: </FormacoesText>
                </FormacoesView>
                {handleDate(colaborador.setColaboradoresFormacoes[i].dataConclusao)}
              </FormacoesArea>
              <EspacoView></EspacoView>
            </ListScroll>
          )
        })}
      </Container>
    );
  } else {
    return(
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