import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #A0C8C3;
`;
export const CadastroButton = styled.TouchableOpacity`
  height:50px;
  background-color: #01a999;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  border: white;
  margin: 4%;
`;
export const InputCadastro = styled.TextInput`
  font-size: 18px;
  margin-top: 3%;
  border: black;
  width: 80%;
  background-color: white;
  height: 50px;
  border-radius: 10px;
  color: #181818;
  flex-direction:column;
  margin-bottom: 5px;
  
`;
export const CadastroText = styled.Text`
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
export const InputArea = styled.View`
  background-color: black;
  width:80%;
  align-items: center;
  border-radius: 15px;
  flex-direction: column;
  margin: 40px;
  justify-content: center;
  border: white;
  padding: 20px 0;
`;
export const InputView = styled.View`
  border-color: black;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  display: flex;
  
`;
export const CadastroScroll = styled.ScrollView`
  background-color: #A0C8C3;
`;
export const EspacoView = styled.View`
  height: 80px;

`;
export const ButtonView = styled.View`
  align-items: center;
`;
export const PickerView = styled.View`
  background-color: white;
  height: 50px;
  width: 80%;
  margin-top: 10px;
  border-radius: 10px;
  border: black;
`;
export const DataView = styled.View`
  width: 80%;
  height: 50px;
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  
`;
export const CadasText = styled.Text`
 text-align: center;
color: black;
font-size: 30px;
font-weight: bold;
margin-top: 20px;
`;
export const CadasView = styled.View`
  justify-content:center;
  align-items:center;
`;