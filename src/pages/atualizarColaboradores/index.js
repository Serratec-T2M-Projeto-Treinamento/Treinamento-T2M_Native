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
    DataView,
    MensagemArea,
    MensagemView,
    MensagemText
} from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
import DateField from 'react-native-datefield';
import { AuthContext } from '../../services/auth';

export default function AtualizarColaboradores({ route, navigation }) {
    if (route.params) {
        const { isAdmin } = React.useContext(AuthContext);
        const { colaborador } = route.params;
        const [posicoes, setPosicoes] = useState([]);

        const handlePermissao = (p) => {
            if (p) {
                return <Picker.Item color='#181818' label='Administrador' value={2} />
            }
        }

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

        const [valores, setValores] = useState({
            nome: colaborador.nome,
            rg: colaborador.rg,
            cpf: colaborador.cpf,
            dataNascimento: colaborador.dataNascimento,
            email: colaborador.email,
            cnh: colaborador.cnh,
            pix: colaborador.pix,
            permissao: colaborador.permissao,
            posicao: {
                idPosicoes: colaborador.posicao.idPosicoes
            }

        })

        const putColaboradores = async () => {
            try {
                await axios.put(`https://api-treinamento-t2m.herokuapp.com/colaboradores/${colaborador.idColaboradores}`, valores)
                Alert.alert('Dados Atualizados!')
                navigation.reset({
                    routes: [{ name: 'Lista de Colaboradores' }]
                  })
                
            } catch (error) {
                Alert.alert('Ocorreu um erro, cheque os dados passados.')
                console.error(error);
            }
        }

        return (
            <Container>
                <CadastroScroll>
                    <MenuIcon />
                    <EspacoView>
                    </EspacoView>
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
                    <EspacoView>
                    </EspacoView>
                </CadastroScroll>
            </Container>
        )
    }else{
        return (
            <Container>
              <MenuIcon />
              <MensagemArea>
                <MensagemView>
                  <MensagemText>Nenhuma informação encontrada,</MensagemText>
                  <MensagemText>escolha um colaborador primeiro para atualiza-lo.</MensagemText>
                </MensagemView>
              </MensagemArea>
            </Container>
          )
    }
}