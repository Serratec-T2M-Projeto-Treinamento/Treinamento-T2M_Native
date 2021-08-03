import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color:  #A0C8C3;
`;

export const  InformacoesButton = styled.TouchableOpacity`
  height:50px;
  background-color: #01a999;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  border:white;
`;

export const InformacoesText = styled.Text`
  text-align: center;
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export const InformacoesArea = styled.View`
  border-color: black;
  align-items:center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const InformacoesScroll = styled.ScrollView`
  background-color: #A0C8C3;
`;

export const EspacoView = styled.View`
  height: 10px;
`;

export const ButtonView = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  justify-content: center;
`;


export const DadosText = styled.Text`
  font-size: 18px;
  text-align: center;
  font-style: italic;
  `;

export const DadosView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
  
  `;

export const DadosArea = styled.View`
  width: 90%;
  background-color: lightgrey;
  margin-top: 10px;
  border-radius: 10px;
  border:lightblue;
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
  font-size: 18px;
  font-weight: bold;
`;

export const TodoButton = styled.TouchableOpacity`
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
