import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #5CB3B2;
    height: 100%;
`;

export const ProjetoArea = styled.View`
    margin-top: 100px;
    border-color: black;
    align-items:center;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ProjetoView = styled.View`
    border-color: black;
    align-items:center;
    justify-content: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

export const ProjetoText = styled.Text`
    text-align: center;
    color: black;
    font-size: 26px;
    font-weight: bold;
    
`;

export const DadosView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
`;

export const DadosText = styled.Text`
    font-size: 26px;
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
    font-size: 26px;
    font-weight: bold;
`;