import React, { useEffect, useState } from 'react';
import { Container, ProjetoView, ProjetoText, ProjetoArea, DadosView, DadosText, MensagemArea, MensagemView, MensagemText } from './styles';
import axios from 'axios';
import MenuIcon from   '../../components/icon';
import { handleDate } from '../../components/dataFormatada';

export default function Projetos({ route }) {
    if (route.params) {

        const { colaborador } = route.params

        const [projetos, setProjetos] = useState([]);

        const getProjetos = () => {
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
                getProjetos()
            }, [colaborador]);

            const verificaGerenc = () => {
                if (condition) {
                    
                }
            }

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
                         <ProjetoText>Função: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{colaborador.setColaboradoresProjetos[i].funcao}</DadosText>
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
                     {handleDate(p.dataEntregaEsperada)}
                     <ProjetoView>
                         <ProjetoText>Data de entrega: </ProjetoText>
                     </ProjetoView>
                     {handleDate(p.dataEntrega)}
                     <ProjetoView>
                         <ProjetoText>N° de integrantes: </ProjetoText>
                     </ProjetoView>
                     <DadosView>
                         <DadosText>{p.equipe}</DadosText>
                     </DadosView>
                 </ProjetoArea>
                 )
                })}

            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Nenhuma informação encontrada,</MensagemText>
                        <MensagemText>escolha um colaborador primeiro para ver seus projetos.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}