import React, {useState} from 'react';
import {
  CadastroButton,
  InputCadastro,
  CadastroText,
  CadastroScroll,
  InputArea,
  Container,
  ButtonView,
  EspacoView
} from './styles';
import MenuIcon from '../../components/icon';




export default function Cadastro() {
  const [colaborador, setColaborador] = useState({
    nome: '',
    dataNascimento:'',
    Cpf: '',
    Rg:'',
    cep: '',
    email:'',
    telefone:'',
    Pais:'',
    estado:'',
    cidade: '',
    Bairro: '',
    Rua: '',
    numero: '',
    complemento: '',
    Posicao: '',
    contaBancarria: '',
    pix: '',
    emailT2m: '',
    certificacao:'',
    treinamento: ''
  });

  const handleChange = (text) => {
  console.log(text)
  }

  return (
    <Container>
        <CadastroScroll>
      <MenuIcon />
        <EspacoView>
        </EspacoView>
        <InputArea>
          <InputCadastro placeholder="Nome" onChangeText={handleChange} />
          <InputCadastro placeholder="Data de Nascimento" onChangeText={handleChange} />
          <InputCadastro placeholder="CPF" onChangeText={handleChange}/>
          <InputCadastro placeholder="RG" onChangeText={handleChange}/>
          <InputCadastro placeholder="Cep" onChangeText={handleChange}/>
          <InputCadastro placeholder="E-mail" onChangeText={handleChange}/>
          <InputCadastro placeholder="País" onChangeText={handleChange}/>
          <InputCadastro placeholder="Estado" onChangeText={handleChange}/>
          <InputCadastro placeholder="Cidade" onChangeText={handleChange}/>
          <InputCadastro placeholder="Bairro" onChangeText={handleChange}/>
          <InputCadastro placeholder="Rua" onChangeText={handleChange}/>
          <InputCadastro placeholder="Numero" onChangeText={handleChange}/>
          <InputCadastro placeholder="Complemento" onChangeText={handleChange}/>
          <InputCadastro placeholder="Posição" onChangeText={handleChange}/>
          <InputCadastro placeholder="Conta bancária" onChangeText={handleChange}/>
          <InputCadastro placeholder="Pix" onChangeText={handleChange}/>
          <InputCadastro placeholder="E-mail T2M" onChangeText={handleChange}/>
          <InputCadastro placeholder="Certificação 1" onChangeText={handleChange}/>
          <InputCadastro placeholder="Treinamento 1" onChangeText={handleChange}/>
        </InputArea>
        <ButtonView>
        <CadastroButton>
          <CadastroText>Histórico Profissional</CadastroText>
        </CadastroButton>
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

