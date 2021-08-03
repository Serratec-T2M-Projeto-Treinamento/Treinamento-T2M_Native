
import React, { useEffect, useState } from 'react';
import { Container, ProjetoView, ProjetoText, ProjetoArea, DadosView, DadosText, MensagemArea, MensagemView, MensagemText, ProjetoButton, ProText, ButtonView} from './styles';
import axios from 'axios';
import MenuIcon from '../../components/icon';
import { handleDate } from '../../components/dataFormatada';

export default function Projetos({ route }) {
    if (route.params) {

        const { colaborador } = route.params

        return (
            <Container>
                <ProjetoScroll>
                    <MenuIcon />
                    <Titulo>Projetos:</Titulo>
                    {colaborador.setColabsProjs.map((p, i) => {
                        return (
                            <ProjetoArea key={i}>
                                <ProjetoView>
                                    <ProjetoText>Nome: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.nome}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>Descrição: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.descricao}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>App Gerenciador: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.appGerenciamento}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>Segmento: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.segmento}</DadosText>
                                </DadosView>
                                <ProjetoView>
                                    <ProjetoText>Entrega esperada: </ProjetoText>
                                </ProjetoView>
                                {handleDate(p.projeto.dataEntregaEsperada)}
                                <ProjetoView>
                                    <ProjetoText>Data de entrega: </ProjetoText>
                                </ProjetoView>
                                {handleDate(p.projeto.dataEntrega)}
                                <ProjetoView>
                                    <ProjetoText>N° de integrantes: </ProjetoText>
                                </ProjetoView>
                                <DadosView>
                                    <DadosText>{p.projeto.equipe}</DadosText>
                                </DadosView>
                            </ProjetoArea>
                        )
                    })}
                </ProjetoScroll>

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

// const [projetos, setProjetos] = useState([]);

        // const getProjetos = () => {
        //     colaborador.setColaboradoresProjetos.map((p, i) => {
        //         axios.get(`https://api-treinamento-t2m.herokuapp.com/projetos/${colaborador.setColaboradoresProjetos[i].idColaboradoresProjetos.idProjeto}`)
        //             .then((response) => {
        //                 setProjetos([response.data]);
        //             })
        //             .catch((error) => {
        //                 console.error(error.message);
        //             })
        //         })

        //     }

            // useEffect(() => {
            //     getProjetos()
            // }, [colaborador]);

            // const verificaGerenc = () => {
            //     if (condition) {

            //     }
            // }