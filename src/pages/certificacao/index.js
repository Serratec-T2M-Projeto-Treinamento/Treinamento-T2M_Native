import React from 'react';
import {
  CertificacaoScroll,
  Container,
  CertiText,
  CertifiArea,
  CertiView,
  DadosView,
  DadosText,
  Titulo,
  MensagemArea,
  MensagemView,
  MensagemText,
  EndText,
  EndButton,
  EndView
} from './styles';
import MenuIcon from '../../components/icon';

export default function certificacao({route}) {
  if (route.params) {
    const {colaborador} = route.params;

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
              
            );
          })}
        </CertificacaoScroll>
      </Container>
    );
  } else {
    return (
      <Container>
        <MenuIcon />
        <MensagemArea>
          <MensagemView>
            <MensagemText>Nenhuma informação encontrada,</MensagemText>
            <MensagemText>
              escolha um colaborador primeiro para ver suas certificações.
            </MensagemText>
          </MensagemView>
        </MensagemArea>
      </Container>
    );
  }
}

// const [certificados, setCertificados] = useState([]);

// const getCetificados = async () => {
//     try {
//         colaborador.setColaboradoresCertificacoes.map((p,i) => {
//         const response = axios.get(`https://api-treinamento-t2m.herokuapp.com/certificacoes/${colaborador.setColaboradoresCertificacoes[i].idColaboradoresCertificacoes.idCertificacao}`)
//         setCertificados(response.data);
//     })
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// useEffect(() => {
//     getCetificados()
// }, [colaborador])
