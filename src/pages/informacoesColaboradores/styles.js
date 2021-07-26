import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: #effffb;
`;

export const  InformacoesButton = styled.TouchableOpacity`
  height:50px;
  background-color: #01a999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-top: 10px;
  border: white;
`;

export const InformacoesText = styled.Text`
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-top: 9px;
`;

export const InformacoesArea = styled.View`
  border-color: black;
  align-items:flex-start;
  justify-content: flex-start;
  width: 100%;
  display: flex;
  margin-top: -10px;
  margin-left: 5px;
`;

export const InformacoesScroll = styled.ScrollView`
  background-color: #5CB3B2;
`;

export const EspacoView = styled.View`
  height: 1px;
`;

export const ButtonView = styled.View`
  margin-top: 30px;
  align-items: center;
`;
export const ButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
`;