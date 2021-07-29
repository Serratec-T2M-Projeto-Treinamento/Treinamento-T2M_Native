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
import { Alert, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Cadastro({ navigation }) {
  const [idColaborador, setIdColaborador] = useState(0);
  const [idEndereco, setIdEndereco] = useState(0);
  const [posicoes, setPosicoes] = useState([]);
  const[posicaoEscolhida, setPosicaoEscolhida] = useState();

  console.log(posicaoEscolhida);

  useEffect(async () => {
    try {
     const response = await axios.get("https://api-treinamento-t2m.herokuapp.com/posicoes")
        setPosicoes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }, []);

  // const pickerPosicoes = posicoes.map((p, i) => {
  //   return (
  //     <Picker.Item key={i} label={p.nome} value={p.idPosicao} />
  //   );
  // });

  // console.log(pickerPosicoes);

  const [colaborador, setColaborador] = useState(
    {
      nome: '',
      rg: '',
      cpf: '',
      email: '',
      dataNascimento: '',
      contaBancaria: 0,
      pix: '',
      cnh: '',
      permissao: 0,
      posicao: {
        idPosicoes: 1
      },
      setColaboradoresEndereco: [{
        idColaboradoresEnderecos: {
          idColaborador: idColaborador,
          idEndereco: idEndereco
        }
      }]
    })

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

  return (
    <Container>
      <CadastroScroll>
        <MenuIcon />
        <EspacoView>
        </EspacoView>
        <InputArea>
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, nome: text })} placeholder="Nome" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, rg: text })} placeholder="Usuario" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cpf: text })} placeholder="CPF" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, email: text })} placeholder="E-mail" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, dataNascimento: text })} placeholder="Data de Nascimento" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, cnh: text })} placeholder="CNH" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, pix: text })} placeholder="Pix" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, contaBancaria: text })} placeholder="Conta Bancária" />
          <PickerView>
            <Picker
              mode='dropdown'
              selectedValue={posicaoEscolhida}
              onValueChange={(itemValue,itemIndex) => setPosicaoEscolhida(itemValue)}>
                {posicoes.map((p,i) => (
                <Picker.Item key={i} label={p.nome} value={p.idPosicoes} />
                )
              )}
            </Picker>
          </PickerView>
          {/* <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, endereco: { ...colaborador.endereco, rua: text } })} placeholder="Rua" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, endereco: { ...colaborador.endereco, numero: text } })} placeholder="Numero" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, endereco: { ...colaborador.endereco, complemento: text } })} placeholder="Complemento" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, endereco: { ...colaborador.endereco, bairro: text } })} placeholder="Bairro" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, endereco: { ...colaborador.endereco, cidade: text } })} placeholder="Cidade" />
          <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, endereco: { ...colaborador.endereco, estado: text } })} placeholder="Estado" />
        <InputCadastro onChangeText={(text) => setColaborador({ ...colaborador, endereco: { ...colaborador.endereco, cep: text } })} placeholder="Cep" /> */}
        </InputArea>
        <ButtonView>
          {/* <CadastroButton>
            <CadastroText>Histórico Profissional</CadastroText>
          </CadastroButton> */}
          <CadastroButton>
            <CadastroText>SALVAR</CadastroText>
          </CadastroButton>
        </ButtonView>
        <EspacoView>
        </EspacoView>
      </CadastroScroll>
    </Container>
  );

}


