import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #5CB3B2;
    height: 100%;
    background-color: #A0C8C3;
    
`;

export const ProjetoScroll = styled.ScrollView`

`;

export const Titulo = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    font-style: italic;
`;

export const ProjetoArea = styled.View`
    margin-top: 200px;
    flex-direction: column;
    border-radius: 20px;
    justify-content: center;
    background-color: lightgray;
    border:lightblue;
    margin:15px;
`;

export const ProjetoView = styled.View`
    border-color: black;
    align-items:center;
    width: 100%;
    display: flex;
    flex-direction: column; 
`;

export const ProjetoText = styled.Text`
    text-align: center;
    color: black;
    font-size: 20px;
    font-weight: bold;
    
`;

export const DadosView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
    justify-content: center;
    align-content: center;
    
    
`;

export const DadosText = styled.Text`
    font-size: 20px;
    text-align: center;
    font-style: italic;
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
export const ButtonView = styled.View`
  margin-top: 50px;
  align-items: center;
`;
export const ProjetoButton = styled.TouchableOpacity`
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
export const ProText = styled.Text`
  text-align: center;
  color: white;
  font-size:18px;
  font-weight: bold;
`;