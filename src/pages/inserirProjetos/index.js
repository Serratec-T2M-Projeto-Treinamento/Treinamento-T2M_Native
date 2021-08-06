import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, ProjetoArea, ProScroll, InputCadastro, MensagemArea, MensagemView, MensagemText, ProjetoButton, ProjetoText, InserirText, InserirView, CardText, CardView } from './styles';
import { Alert } from 'react-native';
import MenuIcon from '../../components/icon';
import { handleDate } from '../../components/dataFormatada';
import DateField from 'react-native-datefield';

export default function CadastroProjetos({ route, navigation }) {
    if (route.params) {

        const { colaborador } = route.params

        const [projetos, setProjetos] = useState([]);
        const [linkProj, setLinkProj] = useState({
            funcao: '',
            dataInicio: ''
        })

        useEffect(() => {
            axios.get('https://api-treinamento-t2m.herokuapp.com/projetos')
                .then((response) => setProjetos(response.data))
                .catch((error) => {
                    console.error(error);
                });
        }, []);


        const LinkarProjeto = async (p) => {
            try {
                await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsProjs/colaborador/${colaborador.idColaboradores}/projetoAInserir/${p.idProjetos}`, linkProj)
                Alert.alert('Projeto Inserido com sucesso!')
                navigation.reset({
                    routes: [{ name: 'Lista de Colaboradores' }]
                })
            } catch (error) {
                Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
                console.error(error);
            }
        }
        console.log(linkProj);
        return (
            <Container>
                <ProScroll>
                    <MenuIcon />
                    <EspacoView></EspacoView>
                    <InserirView>
                        <InserirText> Inserir Projeto </InserirText>
                    </InserirView>
                    <ProjetoArea>
                        {projetos.map((p, i) => {
                            return (
                                <InserirView key={i}>
                                        <CardView>
                                            <CardText>Nome:</CardText>
                                            <CardText>{p.nome}</CardText>
                                        </CardView>
                                        <CardView>
                                            <CardText>Descrção:</CardText>
                                            <CardText>{p.descricao}</CardText>
                                        </CardView>
                                        <CardView>
                                            <CardText>App Gerenciador:</CardText>
                                            <CardText>{p.appGerenciamento}</CardText>
                                        </CardView>
                                        <CardView>
                                            <CardText>Segmento:</CardText>
                                            <CardText>{p.segmento}</CardText>
                                        </CardView>
                                        <CardView>
                                            <CardText>Data de entrega esperada:</CardText>
                                            <CardText>{handleDate(p.dataEntregaEsperada)}</CardText>
                                        </CardView>
                                        <CardView>
                                            <CardText>Data de entrega:</CardText>
                                            <CardText>{handleDate(p.dataEntrega)}</CardText>
                                        </CardView>
                                        <CardView>
                                            <CardText>N° de integrantes:</CardText>
                                            <CardText>{p.equipe}</CardText>
                                        </CardView>
                                        <InserirView>
                                            <InputCadastro onChangeText={(text) => setLinkProj({...linkProj, funcao: text})} placeholder='Função' placeholderTextColor='#181818' />
                                            <DateField labelDate='Dia' labelMonth='Mês' labelYear='Ano' onSubmit={(value) => setLinkProj({ ...linkProj, dataInicio: value })} styleInput={{ fontSize: 22, paddingLeft: 5 }} />
                                        </InserirView>
                                    <InserirView>
                                        <ProjetoButton onPress={() => LinkarProjeto(p)}>
                                            <ProjetoText>Inserir</ProjetoText>
                                        </ProjetoButton>
                                    </InserirView>
                                </InserirView>
                            )
                        })}
                    </ProjetoArea>
                </ProScroll>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
                        <MensagemText>escolha um colaborador para cadastrar um projeto a ele.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}