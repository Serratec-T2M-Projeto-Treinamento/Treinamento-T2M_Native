import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #effffb;
`;

export const CadastroButton = styled.TouchableOpacity`
  height:50px;
  background-color: #01a999;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  border: white;
`;

export const InputCadastro = styled.TextInput`
  font-size: 15px;
  margin-top: 10px;
  border: black;
  width: 70%;
  background-color: white;
  height: 50px;
  border-radius: 10px;
`;

export const CadastroText = styled.Text`
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const InputArea = styled.View`
  border-color: black;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  margin-top: -55px;
`;

export const CadastroScroll = styled.ScrollView`
  background-color: #5CB3B2;
`;

export const EspacoView = styled.View`
  height: 60px;

`;

export const ButtonView = styled.View`
  margin-top: 50px;
  align-items: center;
`;