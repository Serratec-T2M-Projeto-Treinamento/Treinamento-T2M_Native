import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #A0C8C3;
`;

export const InputArea = styled.View`
  background-color: black;
  width:80%;
  height: 300px;
  border-radius: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px;
  justify-content: center;
  border-width: 2px;
  border: white;
`;

export const InputCadastro = styled.TextInput`
  font-size: 15px;
  margin-top: 10px;
  border: white;
  width: 80%;
  background-color: white;
  height: 50px;
  border-radius: 10px;
  color: #181818;
  padding-left: 2px;
  border-width: 2px;
  margin: 10px;
`;

export const MensagemArea = styled.View`
    border-color: black;
    align-items:center;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 800px;
`;

export const MensagemView = styled.View`
    margin-bottom: 200px;
`;

export const MensagemText = styled.Text`
    text-align: center;
    color: black;
    font-size:18px;
    font-weight: bold;
`;
export const FormaButton = styled.TouchableOpacity`
  height:50px;
  background-color: #01a999;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: white;
  margin: 10%;
`;
export const FormaView = styled.View`

`;
export const FormacaoText = styled.Text`
text-align: center;
color: black;
font-size: 30px;
font-weight: bold;
margin-top: 20px;

`;
export const FormaText = styled.Text`
  text-align: center;
  color:white;
  font-size:18px;
  font-weight: bold;
  `;