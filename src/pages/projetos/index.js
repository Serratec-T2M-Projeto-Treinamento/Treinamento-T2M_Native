import React, { useEffect, useState } from 'react';
import { Container, ProjetoView, ProjetoText, ProjetoArea, DadosView, DadosText, MensagemArea, MensagemView, MensagemText, ProjetoButton, ProText, ButtonView} from './styles';
import axios from 'axios';
import MenuIcon from   '../../components/icon';

export default function Projetos({ route }) {
    if (route.params) {

        const { colaborador } = route.params

        const [projetos, setProjetos] = useState([]);

        const getDados = () => {
            colaborador.setColaboradoresProjetos.map((p, i) => {
                axios.get(`https://api-treinamento-t2m.herokuapp.com/projetos/${colaborador.setColaboradoresProjetos[i].idColaboradoresProjetos.idProjeto}`)
                    .then((response) => {
                        setProjetos([response.data]);
                    })
                    .catch((error) => {
                        console.error(error.message);
                    })
                })
                
            }
            
            useEffect(() => {
                getDados()
            }, [colaborador]);


        return (
            <Container>
                <MenuIcon/>
                {projetos.map((p,i) => {
                     return(
                     <ProjetoArea key={i}>
                     <ProjetoView>
                         <ProjetoText>Nome: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{p.nome}</DadosText>
                     </DadosView>
                     <ProjetoView>
                         <ProjetoText>Descrição: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{p.descricao}</DadosText>
                     </DadosView>
                     <ProjetoView>
                         <ProjetoText>Segmento: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{p.segmento}</DadosText>
                     </DadosView>
                     <ProjetoView>
                         <ProjetoText>Entrega esperada: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{p.dataEntregaEsperada}</DadosText>
                     </DadosView>
                     <ProjetoView>
                         <ProjetoText>Data de entrega: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{p.dataEntrega}</DadosText>
                     </DadosView>
                     <ProjetoView>
                         <ProjetoText>N° de integrantes: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{p.equipe}</DadosText>
                     </DadosView>
                 </ProjetoArea>
                 )
                })}

                <ButtonView>
          <ProjetoButton>
            <ProText>Adicionar Projeto</ProText>
          </ProjetoButton>
        </ButtonView>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Nenhuma informação encontrada,</MensagemText>
                        <MensagemText>escolha um projeto do colaborador primeiro.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}