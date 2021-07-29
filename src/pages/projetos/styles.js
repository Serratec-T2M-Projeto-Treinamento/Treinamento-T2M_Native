import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    height: 100%;
    background-color: #5CB3B2;
    
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