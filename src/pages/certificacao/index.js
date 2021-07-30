// import React, { useEffect, useState } from 'react';
// import { CertificacaoScroll, Container, CertiText, CertifiArea, CertiView, ButtonView, ButtonText, CertiButton, DadosView, DadosText } from './styles';
// import MenuIcon from '../../components/icon';
// import axios from 'axios';

// export default function certificacao({ route }) {
//     if (route.params) {

//         const { colaborador } = route.params

//         const [certificados, setCertificados] = useState([]);

//         const getCetificados = async () => {
//             try {
//                 colaborador.setColaboradoresCertificacoes.map((p,i) => {
//                 const response = axios.get(`https://api-treinamento-t2m.herokuapp.com/certificacoes/${colaborador.setColaboradoresCertificacoes[i].idColaboradoresCertificacoes.idCertificacao}`)
//                 setCertificados(response.data);
//             })
//             } catch (error) {
//                 console.error(error.message);
//             }
//         }

//         useEffect(() => {
//             getCetificados()
//         }, [colaborador])

//         return (
//             <Container>
//                 <MenuIcon />
//                 {certificados.map((p, i) => {
//                     return (
//                         <CertificacaoScroll key={i}>
//                             <CertifiArea>
//                                 <CertiView>
//                                     <CertiText>Nome: </CertiText>
//                                 </CertiView>
//                                 <DadosView>
//                                     <DadosText>{p.nome}</DadosText>
//                                 </DadosView>
//                                     <CertiText>- Certificação </CertiText>
//                                     <CertiText>- Certificação </CertiText>
//                                 <ButtonView>
//                                     <CertiButton>
//                                         <ButtonText>Inserir certificacao</ButtonText>
//                                     </CertiButton>
//                                 </ButtonView>
//                             </CertifiArea>
//                         </CertificacaoScroll>
//                     )
//                 })}
//             </Container>

//         )
//     } else {
//         return (
//             <Container>

//             </Container>
//         )
//     }
// }