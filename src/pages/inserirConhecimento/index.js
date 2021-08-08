import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, ProjetoArea, ProScroll,MensagemArea, InserirConheView, MensagemText, ProjetoButton, ProjetoText, InserirText, InserirView,CarText, CardText, CardView, ProjetoView, DateView } from './styles';
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
                                    <CarText>Nome:</CarText>
                                    <CardText>{p.nome}</CardText>
                                </CardView>
                                <CardView>
                                    <CarText>Descrção:</CarText>
                                    <CardText>{p.descricao}</CardText>
                                </CardView>
                                <InserirConheView>
                                    <ProjetoButton onPress={() => handleClick(p)}>
                                        <ProjetoText>Inserir</ProjetoText>
                                    </ProjetoButton>
                                </InserirConheView>
                            </InserirView>
                        )
                    })}
                </ProjetoArea>
            </ProScroll>
        </Container>
    )
}
