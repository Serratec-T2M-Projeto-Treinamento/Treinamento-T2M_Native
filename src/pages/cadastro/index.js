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
  PickerView
} from './styles';
import MenuIcon from '../../components/icon';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';

export default function Cadastro({ navigation }) {
  const [posicoes, setPosicoes] = useState([]);
  const [posicaoEscolhida, setPosicaoEscolhida] = useState();
  const [permissaoEscolhida, setPermissaoEscolhida] = useState();
  
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

    const [colaborador, setColaborador] = useState(
      {
      nome: '',
      rg: '',
      cpf: '',
      email: '',
      dataNascimento: '',
      pix: '',
      cnh: '',
      permissao: 0,
      posicao: {
        idPosicoes: 1
      }
    });

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

  async function postColaborador(){
    try {
      const responseColaborador = await axios.post('https://api-treinamento-t2m.herokuapp.com/colaboradores', colaborador)
      const idColaborador = responseColaborador.data.idColaboradores
      
  
      const responseEndereco = await axios.post('https://api-treinamento-t2m.herokuapp.com/enderecos', endereco)
      const idEndereco = responseEndereco.data.idEnderecos
      
  
      const response = await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsEndrs/colaborador/${idColaborador}/enderecoAInserir/${idEndereco}`)
      console.log(response.data);
      Alert.alert('Colaborador cadastrado com sucesso!')
  
      navigation.reset({
        routes:[{name:'Lista de Colaboradores'}]
      })
      
    } catch (error) {
      console.error(error.message);
    }

  }


  return (
    <Container>
      <CadastroScroll>
        <MenuIcon />
        <EspacoView>
        </EspacoView>
        <InputArea>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, nome: text })} placeholder="Nome" placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, rg: text })} placeholder="RG" placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cpf: text })} placeholder="CPF" placeholderTextColor='#181818' />
          <InputCadastro autoCapitalize='none' onChangeText={(text) => setColaborador({ ...colaborador, email: text })} placeholder="E-mail" placeholderTextColor='#181818'/>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, dataNascimento: text })} placeholder="Data de Nascimento" placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cnh: text })} placeholder="CNH" placeholderTextColor='#181818' />
          <InputCadastro autoCapitalize='none' onChangeText={(text) => setColaborador({ ...colaborador, pix: text })} placeholder="Pix" placeholderTextColor='#181818' />
          <PickerView>
            <Picker
              mode='dropdown'
              itemStyle={{color:'#181818'}}
              selectedValue={posicaoEscolhida}
              onValueChange={(itemValue, itemIndex) => setPosicaoEscolhida(itemValue)}>
                {posicoes.map((p,i) => (
                <Picker.Item color='#181818' key={i} label={p.nome} value={p.idPosicoes} />
                )
              )}
            </Picker>
          </PickerView>
          <PickerView>
            <Picker
              mode='dropdown'
              itemStyle={{color:'#181818'}}
              selectedValue={permissaoEscolhida}
              onValueChange={(itemValue, itemIndex) => setPermissaoEscolhida(itemValue)}>
                <Picker.Item color='#181818' label='Administrador' value={2} />
                <Picker.Item color='#181818' label='Líder' value={1} />
                <Picker.Item color='#181818' label='Colaborador' value={0} />
            </Picker>
          </PickerView>
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, pais: text })} placeholder="País"  placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, estado: text })} placeholder="Estado"  placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cidade: text })} placeholder="Cidade"  placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, bairro: text })} placeholder="Bairro"  placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, rua: text })} placeholder="Rua"  placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, numero: text })} placeholder="Numero"  placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, complemento: text })} placeholder="Complemento"  placeholderTextColor='#181818' />
          <InputCadastro onChangeText={(text) => setEndereco({ ...endereco, cep: text })} placeholder="Cep" placeholderTextColor='#181818'/>
        </InputArea>
        <ButtonView>
          <CadastroButton onPress={() => postColaborador()}>
            <CadastroText>SALVAR</CadastroText>
          </CadastroButton>
        </ButtonView>
        <EspacoView>
        </EspacoView>
      </CadastroScroll>
    </Container>
  );

}

