import React from 'react';
import { CertificacaoScroll, Container, CertiText, CertifiArea, CertiView, DadosView, DadosText, Titulo, MensagemArea, MensagemView, MensagemText, EndText, EndButton, EndView, CertiButton, CertiButtonText } from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';
import { Alert } from 'react-native';

export default function certificacao({ route, navigation }) {
  if (route.params) {

    const { colaborador } = route.params

    function handleCadasCert() {
      navigation.navigate('Inserir Certificações em Colaborador', { colaborador })
    }

    async function handleRemoveCert(p){
      await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsCerts/colaborador/${colaborador.idColaboradores}/certificacaoARemover/${p.certificacao.idCertificacoes}`);
      Alert.alert("Certificação removida com sucesso!");
      navigation.reset({
        routes: [{ name: 'Lista de Colaboradores' }]
      })
      // setRefresh(!refresh);
    };

    return (
      <Container>
        <CertificacaoScroll>
          <MenuIcon />
          <Titulo>Certificações: </Titulo>
          {colaborador.setColabsCerts.map((p, i) => {
            return (
              <CertifiArea key={i}>
                <CertiView>
                  <CertiText>Nome: </CertiText>
                </CertiView>
                <DadosView>
                  <DadosText>{p.certificacao.nomeCertificado}</DadosText>
                </DadosView>
                <CertiView>
                  <CertiText>Instituição: </CertiText>
                </CertiView>
                <DadosView>
                  <DadosText>{p.certificacao.instituicaoCertificado}</DadosText>
                </DadosView>
                <EndView>
                  <EndButton onPress={() => handleRemoveCert(p)}>
                    <EndText>Deletar</EndText>
                  </EndButton>
                </EndView>
              </CertifiArea>
            )
          })}
          <CertiView>
            <CertiButton onPress={() => handleCadasCert()}>
              <CertiButtonText>Inserir Certificação</CertiButtonText>
            </CertiButton>
          </CertiView>
        </CertificacaoScroll>
      </Container>

    )
  } else {
    return (
      <Container>
        <MenuIcon />
        <MensagemArea>
          <MensagemView>
            <MensagemText>Nenhuma informação encontrada,</MensagemText>
            <MensagemText>escolha um colaborador primeiro para ver suas certificações.</MensagemText>
          </MensagemView>
        </MensagemArea>
      </Container>
    )
  }
}