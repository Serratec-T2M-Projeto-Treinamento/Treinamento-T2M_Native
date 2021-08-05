import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #A0C8C3;
`;

export const ProScroll = styled.ScrollView`

`;

export const TreinamentoArea = styled.View`
  width:100%;

  
`;

export const EspacoView = styled.View`

`;

export const TreinamentoButton = styled.TouchableOpacity`
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
  margin: 10%;
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

export const TreinamentoText = styled.Text`
  text-align: center;
  color:white;
  font-size:18px;
  font-weight: bold;
  
`;
export const TreinamentoView = styled.View`
  margin-bottom: 50px;
`;
export const CardText = styled.Text`
  text-align: center;
`;
export const CardView = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const InserirView = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
  `;
export const InserirText = styled.Text`
  text-align: center;
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;

`;
export const PickerView = styled.View`
  background-color: white;
  width: 70%;
  margin-top: 10px;
  border-radius: 10px;
  border: black;
`;