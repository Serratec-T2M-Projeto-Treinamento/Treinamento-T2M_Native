import React from 'react';
import { CertificacaoScroll, Container, CertiText, CertifiArea, CertiView, DadosView, DadosText, Titulo, MensagemArea, MensagemView, MensagemText, EndText, EndButton, EndView, CertifButton, CertifText, CertifView } from './styles';
import MenuIcon from '../../components/icon';

export default function certificacao({ route, navigation }) {
  if (route.params) {

    const { colaborador } = route.params

    function handleCadasCert() {
      navigation.navigate('Inserir Certificações', { colaborador })
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
                    <EndText>Atualizar</EndText>
                  </EndButton>
                </EndView>
                <EndView>
                  <EndButton>
                    <EndText>Deletar</EndText>
                  </EndButton>
                </EndView>
              </CertifiArea>
            )
          })}
          <CertifView>
            <CertifButton onPress={() => handleCadasCert()}>
              <CertifText>Inserir Certificação</CertifText>
            </CertifButton>
          </CertifView>
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