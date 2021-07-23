import React, { useEffect, useState } from 'react';
import { Container, ButtonInserir, ButtonText, ButtonView, InfoButton, InfoButtonText, InfoView, ContentView, ListScroll, EspacoView } from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';

export default function Listagem({ navigation }) {

    const [colaborador, setColaborador] = useState([]);

    const getColaboradores = () => {
        axios.get('https://api-zerocommerce.herokuapp.com/cliente')
            .then((response) => {
                setColaborador(response.data);

            })
            .catch(function (error) {
                console.error(error.message);
            });
    }

    useEffect(() => {
        getColaboradores()
    }, []);

    const handleClick = (p) => {
        navigation.navigate('Informações Colaboradores', {
            colaborador: p
        });
    }
    // id: colaborador.id,
    // nome: colaborador.nome,
    // posicao: colaborador.posicao,
    // dataNascimento: colaborador.dataNascimento,
    // cpf: colaborador.cpf,
    // rg: colaborador.rg,
    // pais: colaborador.pais,
    // estado: colaborador.estado,
    // cidade: colaborador.cidade,
    // bairro: colaborador.bairro,
    // rua: colaborador.rua,
    // numero: colaborador.numero,
    // complemento: colaborador.complemento,
    // contaBancaria: colaborador.contaBancaria,
    // pix: colaborador.pix,
    // email: colaborador.email,
    // emailT2m: colaborador.emailT2m,
    // treinamento: colaborador.treinamento,
    // certificacao: colaborador.certificacao

    const info = colaborador.map((p, i) => {
        return (
            <InfoView key={i}>
                <InfoButton onPress={() => handleClick(p)}>
                    <InfoButtonText>{p.nome}</InfoButtonText>
                </InfoButton>
            </InfoView>
        );
    });

    return (
        <Container>
            <ListScroll>
                <MenuIcon />
                <ContentView>
                    <ButtonView>
                        <ButtonInserir onPress={() => { navigation.navigate('Cadastro') }}>
                            <ButtonText>Novo Colaborador</ButtonText>
                        </ButtonInserir>
                    </ButtonView>
                    {info}
                </ContentView>
                <EspacoView>
                </EspacoView>
            </ListScroll>
        </Container>
    );
};