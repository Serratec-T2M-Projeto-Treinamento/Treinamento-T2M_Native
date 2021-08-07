import React, { useEffect, useState } from 'react';
import { Container, EspacoView, ProjetoArea, ProScroll, InputCadastro, MensagemArea, MensagemView, MensagemText, ProjetoButton, ProjetoText, InserirText, InserirView, CardText, CardView, ProjetoView, DateView } from './styles';
import MenuIcon from '../../components/icon';
import { AuthContext } from '../../services/auth';
import axios from 'axios';
import { Alert } from 'react-native';

export default function AdicionarTreinamentos({ navigation }) {
    const { conhecimento, setConhecimento } = React.useContext(AuthContext);
    const [treinamentos, setTreinamentos] = useState([]);

    useEffect(() => {
        axios.get(`https://api-treinamento-t2m.herokuapp.com/treinamentos`)
            .then((response) => {
                setTreinamentos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    const handleClick = async (p) => {
        try {
            await axios.put(`https://api-treinamento-t2m.herokuapp.com/consTrns/conhecimento/${conhecimento.idConhecimentos}/treinamentoAInserir/${p.idTreinamentos}`)
            Alert.alert('Treinamento inserido com sucesso!')
            const responseConhecimento = await axios.get(`https://api-treinamento-t2m.herokuapp.com/conhecimentos/${conhecimento.idConhecimentos}`);
            setConhecimento(responseConhecimento.data);
            navigation.reset({
                routes: [{ name: 'Treinamentos' }]
            })
        } catch (error) {
            console.error(error);
        }
    }

    const treinamentosMap = treinamentos.map((p, i) => {
        return (
            <ProjetoArea key={i}>
                <InserirView>
                    <CardView>
                        <CardText>Nome:</CardText>
                        <CardText>{p.nome}</CardText>
                    </CardView>
                    <CardView>
                        <CardText>Descrição:</CardText>
                        <CardText>{p.descricao}</CardText>
                    </CardView>
                    <CardView>
                        <CardText>Instituição:</CardText>
                        <CardText>{p.instituicao}</CardText>
                    </CardView>
                    <CardView>
                        <CardText>Carga Horária:</CardText>
                        <CardText>{p.cargaHoraria} Hora(s)</CardText>
                    </CardView>
                    <InserirView>
                        <ProjetoButton onPress={() => handleClick(p)}>
                            <ProjetoText>Inserir</ProjetoText>
                        </ProjetoButton>
                    </InserirView>
                    <InserirView>
                    </InserirView>
                </InserirView>
            </ProjetoArea>
        )
    })

    return (
        <Container>
            <ProScroll>
                <MenuIcon />
                <EspacoView></EspacoView>
                <ProjetoView>
                    <InserirText> Inserir Treinamento</InserirText>
                </ProjetoView>
                {treinamentosMap}
            </ProScroll>
        </Container>
    )
}
