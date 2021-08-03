import React from 'react';
import { CertificacaoScroll, Container, CertiText, CertifiArea, CertiView, DadosView, DadosText, Titulo, MensagemArea, MensagemView, MensagemText, EndText, EndButton, EndView } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import MenuIcon from '../../components/icon';

export default function certificacao({ route, navigation }) {
  if (route.params) {

    const { colaborador } = route.params

    function handleCadasCert() {
      navigation.navigate('Cadastro de Certificações', { colaborador })
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
                <View>
                  <TouchableOpacity onPress={() => handleCadasCert()}>
                    <Text>Inserir Certificação</Text>
                  </TouchableOpacity>
                </View>
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