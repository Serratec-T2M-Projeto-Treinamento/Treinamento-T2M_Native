import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, ProjetoArea, ProScroll, InputCadastro, MensagemArea, MensagemView, MensagemText, ProjetoButton, ProjetoText, InserirText, InserirView, CardText, CardView, ProjetoView, DateView } from './styles';
import { Alert } from 'react-native';
import { handleDate } from '../../components/dataFormatada';
import DateField from 'react-native-datefield';
import { AuthContext } from '../../services/auth';

export default function InserirConhecimento({ navigation }) {
    const { competencia, setCompetencia } = React.useContext(AuthContext);
    const [conhecimentos, setConhecimento] = useState([]);

    useEffect(() => {
        axios.get(`https://api-treinamento-t2m.herokuapp.com/conhecimentos`)
            .then((response) => {
                setConhecimento(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);

    const handleClick = async (p) => {
        try {
            await axios.put(`https://api-treinamento-t2m.herokuapp.com/compsCons/competencia/${competencia.idCompetencias}/conhecimentoAInserir/${p.idConhecimentos}`)
            Alert.alert('Conhecimento inserido com sucesso!')
            const responseCompetencia = await axios.get(`https://api-treinamento-t2m.herokuapp.com/competencias/${competencia.idCompetencias}`);
            setCompetencia(responseCompetencia.data);
            navigation.reset({
                routes: [{ name: 'Conhecimentos por competência' }]
            })

        } catch (error) {

        }
    };

    return (
        <Container>
            <ProScroll>
                <EspacoView></EspacoView>
                <ProjetoView>
                    <InserirText> Inserir Conhecimento</InserirText>
                </ProjetoView>
                <ProjetoArea>
                    {conhecimentos.map((p, i) => {
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
                                <InserirView>
                                    <ProjetoButton onPress={() => handleClick(p)}>
                                        <ProjetoText>Inserir</ProjetoText>
                                    </ProjetoButton>
                                </InserirView>
                                <InserirView>
                                </InserirView>
                            </InserirView>
                        )
                    })}
                </ProjetoArea>
            </ProScroll>
        </Container>
    )
}
