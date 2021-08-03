import React from 'react';
import axios from 'axios';
import { Container, InputArea, InputCadastro } from './styles';
import { Alert } from 'react-native';

export default function CadastroEndereco({ route }) {
    const { idColaborador } = route.params


    const [endereco, setEndereco] = useState({
        pais: '',
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: '',
        cep: '',
    });

    async function postEndereco() {
        try {

            const responseEndereco = await axios.post('https://api-treinamento-t2m.herokuapp.com/enderecos', endereco)
            const idEndereco = responseEndereco.data.idEnderecos


            const response = await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsEndrs/colaborador/${idColaborador}/enderecoAInserir/${idEndereco}`)
            console.log(response.data);
            Alert.alert('Colaborador cadastrado com sucesso!')

        } catch (error) {
            Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
        }

    }
    return (
        <Container>
            <InputArea>
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, pais: text })} placeholder='País' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, estado: text })} placeholder='Estado' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cidade: text })} placeholder='Cidade' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, bairro: text })} placeholder='Bairro' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, rua: text })} placeholder='Rua' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, numero: text })} placeholder='Numero' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, complemento: text })} placeholder='Complemento' placeholderTextColor='#181818' />
                <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cep: text })} keyboardType='number-pad' placeholder='Cep' placeholderTextColor='#181818' />
            </InputArea>
        </Container>
    )
}