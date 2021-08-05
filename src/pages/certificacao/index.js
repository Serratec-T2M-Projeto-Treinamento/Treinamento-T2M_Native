import React from 'react';
import { CertificacaoScroll, Container, CertiText, CertifiArea, CertiView, DadosView, DadosText, Titulo, MensagemArea, MensagemView, MensagemText, EndText, EndButton, EndView, CertiButton, CertiButtonText } from './styles';
import MenuIcon from '../../components/icon';

export default function certificacao({ route, navigation }) {
  if (route.params) {

    const { colaborador } = route.params

    function handleCadasCert() {
      navigation.navigate('Inserir Certificações em Colaborador', { colaborador })
    }

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
                  <EndButton>
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