import styled from 'styled-components/native';

export const ContainerLogin = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: #679E9C;
`;

export const LoginView = styled.View`
    margin-bottom: 60px;
`;

export const LoginButton = styled.TouchableOpacity`
    margin-left: 100px;
    margin-top: 10px;
    color: #0E5460;
    border: 1px;
    margin-right: 100px;
    width: 200px;
`;

export const InputArea = styled.View` 
   padding-top: 20px;
`;

export const InputLogin = styled.TextInput`
    background: white;
    font-size: 16px;
    border-color: black;
    margin-left: 10px;
    border-radius: 15px;
    border-width: 1.5px;
    width: 200px;
`;

export const ButtonText = styled.Text`
    text-align: center;
`;

export const TitleView = styled.View`
    margin-left: 70px;
 `;

export const TitleText = styled.Text`
    font-size: 50px;
    font-style: italic;
 `;

export const SubTitleText = styled.Text`
    font-size: 25px;
    font-style: italic;
`;

export const BorderArea = styled.View`
    background-color: black;
    width:250px;
    height: 195px;
    padding: 10px;
    border-radius: 15px;
`;
