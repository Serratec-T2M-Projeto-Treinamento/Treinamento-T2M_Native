import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #a0c8c3;
`;

export const InputArea = styled.View`
  border-color: black;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  
`;

export const InputView = styled.View`
  width: 100%;
  align-items: center;
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

export const ButtonView = styled.View`
  margin-top: 50px;
  align-items: center;
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
  margin-top: 5px;
  border: white;
`;

export const CadastroText = styled.Text`
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const PickerView = styled.View`
  background-color: white;
  width: 70%;
  margin-top: 10px;
  border-radius: 10px;
  border: black;
`;

export const MensagemArea = styled.View`
  border-color: black;
  align-items: center;
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
  font-size: 18px;
  font-weight: bold;
  `;