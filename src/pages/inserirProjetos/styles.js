import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #effffb;
`;

export const InputArea = styled.View`
  border-color: black;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 750px;
  display: flex;;
`;

export const InputCadastro = styled.TextInput`
  font-size: 18px;
  margin-top: 10px;
  border: black;
  width: 70%;
  background-color: white;
  height: 50px;
  border-radius: 10px;
  color: #181818;
  
`;

export const EspacoView = styled.View`

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