import React, { useState, useEffect } from 'react';
import {
    CadastroButton,
    InputCadastro,
    CadastroText,
    CadastroScroll,
    InputArea,
    Container,
    ButtonView,
    EspacoView,
    PickerView,
    Titulo
} from './styles';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { Alert, Text } from 'react-native';
import { AuthContext } from '../../services/auth';
import { mask } from 'remask';
import { Formik } from 'formik';
import * as yup from 'yup';
import DatePicker from 'react-native-datepicker';

export default function AtualizarColaboradores({ route, navigation }) {
    const { isAdmin } = React.useContext(AuthContext);
    const [posicoes, setPosicoes] = useState([]);
    const { colaboradores } = route.params

    const padraoCpf = '999.999.999-99'
    const padraoRg = '99.999.999-9'

    const getPosicao = async () => {
        try {
            const response = await axios.get('https://api-treinamento-t2m.herokuapp.com/posicoes')
            setPosicoes(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPosicao()
    }, []);

    const handlePermissao = (p) => {
        if (p) {
            return <Picker.Item color='#181818' label='Administrador' value={2} />
        }
    }

    const updateValidations = yup.object().shape({
        nome: yup.string().min(5, ({ min }) => `Mínimo de ${min} caracteres`).max(50, ({ max }) => `Maximo de ${max} caracteres`).required("Nome é obrigatório"),
        dataNascimento: yup.date("Inserir uma data valida").required("Data de nascimento é obrigatória"),
        email: yup.string().email("Inserir um email valido").max(30, ({ max }) => `Maximo de ${max} caracteres`).required("Email é obrigatório"),
        pix: yup.string().max(40, ({ max }) => `Maximo de ${max} caracteres`),
        cpf: yup.string().min(14, ({ min }) => `Minimo de ${min} caracteres`).required("CPF é obrigatório"),
        rg: yup.string().min(9, ({ min }) => `Minimo de ${min} caracteres`).required("RG é obrigatório")
    });

    return (
        <Container>
            <CadastroScroll>
                <CadasView>
                    <CadasText>Atualize seu Cadastro</CadasText>
                </CadasView>
                <InputArea>
                    <CadastroText>Nome Completo:</CadastroText>
                    <InputCadastro value={valores.nome} onChangeText={(text) => setValores({ ...valores, nome: text })} placeholder='Nome' placeholderTextColor='#181818' />
                    <CadastroText>RG:</CadastroText>
                    <InputCadastro value={valores.rg} onChangeText={(text) => setValores({ ...valores, rg: text })} keyboardType='number-pad' placeholder='RG' placeholderTextColor='#181818' />
                    <CadastroText>CPF:</CadastroText>
                    <InputCadastro value={valores.cpf} onChangeText={(text) => setValores({ ...valores, cpf: text })} keyboardType='number-pad' placeholder='CPF' placeholderTextColor='#181818' />
                    <CadastroText>E-mail:</CadastroText>
                    <InputCadastro value={valores.email} onChangeText={(text) => setValores({ ...valores, email: text })} keyboardType='email-address' autoCapitalize='none' placeholder='E-mail' placeholderTextColor='#181818' />
                    <CadastroText>Data de nascimento:</CadastroText>
                    <DataView>
                        <DateField labelDate='Dia' labelMonth='Mês' labelYear='Ano' onSubmit={(value) => setValores({ ...valores, dataNascimento: value })} styleInput={{ fontSize: 22, paddingLeft: 5 }} />
                    </DataView>
                    <CadastroText>Pix:</CadastroText>
                    <InputCadastro value={valores.pix} onChangeText={(text) => setValores({ ...valores, pix: text })} autoCapitalize='none' placeholder='Pix' placeholderTextColor='#181818' />
                    <CadastroText>CNH:</CadastroText>
                    <PickerView>
                        <Picker
                            mode='dropdown'
                            itemStyle={{ color: '#181818' }}
                            selectedValue={valores.cnh}
                            onValueChange={(itemValue) => setValores({ ...valores, cnh: itemValue })}>
                            <Picker.Item color='#181818' label='Escolha uma categoria' value='' />
                            <Picker.Item color='#181818' label='A' value='A' />
                            <Picker.Item color='#181818' label='B' value='B' />
                            <Picker.Item color='#181818' label='C' value='C' />
                            <Picker.Item color='#181818' label='D' value='D' />
                            <Picker.Item color='#181818' label='E' value='E' />
                            <Picker.Item color='#181818' label='AB' value='AB' />
                        </Picker>
                    </PickerView>
                    <CadastroText>Cargo:</CadastroText>
                    <PickerView>
                        <Picker
                            mode='dropdown'
                            itemStyle={{ color: '#181818' }}
                            selectedValue={valores.posicao.idPosicoes}
                            onValueChange={(itemValue) => setValores({ ...valores, posicao: { ...valores.posicao, idPosicoes: itemValue } })}>
                            {posicoes.map((p, i) => (
                                <Picker.Item color='#181818' key={i} label={p.nome} value={p.idPosicoes} />
                            )
                            )}
                        </Picker>
                    </PickerView>
                    <CadastroText>Posição:</CadastroText>
                    <PickerView>
                        <Picker
                            mode='dropdown'
                            itemStyle={{ color: '#181818' }}
                            selectedValue={valores.permissao}
                            onValueChange={(itemValue) => setValores({ ...valores, permissao: itemValue })}>
                            {handlePermissao(isAdmin)}
                            <Picker.Item color='#181818' label='Líder' value={1} />
                            <Picker.Item color='#181818' label='Colaborador' value={0} />
                        </Picker>
                    </PickerView>
                </InputArea>
                <ButtonView>
                    <CadastroButton onPress={() => putColaboradores()}>
                        <CadastroText>Atualizar Dados</CadastroText>
                    </CadastroButton>
                </ButtonView>
            </CadastroScroll>
        </Container>
    )
}
