import styled from 'styled-components/native';

export const ContainerHome = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    background-color: #EFFFFB;
    height: 100%;
    
`;

export const HomeView = styled.View`
  justify-content: space-between;
  margin-top: -120px;
  
`;

export const HomeButton = styled.TouchableOpacity`
margin: 30px;
height: 40px;
background-color: #01a999;
font-size: 18px;
width: 200px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
`;


export const InputHome = styled.TextInput`
background: white;
  font-size: 16px;
  border-color: black;
  margin-left: 10px;
`;

export const ButtonText = styled.Text`  
text-align: center;
color: white;
`;
