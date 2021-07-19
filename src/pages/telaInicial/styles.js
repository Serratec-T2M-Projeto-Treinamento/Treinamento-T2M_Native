import React from 'react';
import styled from 'styled-components/native';

export const ContainerInicial = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    flex: 1;
    background-color: #ddd;
`;

export const TelaView = styled.View`
    width: 300px;
    height: 400px;
    margin-right: 50px;
`;

export const TitleText = styled.Text`
    color: #679E9C;
    font-size: 20px;
`;

export const TelaButton = styled.TouchableOpacity`
    border-radius: 30px;
    height: 40px;
    font-size: 18px;
    padding: 5px 15px;
    font-weight: 600;
    background-color: #01a999;
    color: white;
    
`;

export const TitleView = styled.View`
    
`;

export const TelaText = styled.Text`
    text-align: center;
    color: white;
    margin-top: 5px;
`;

export const ButtonView = styled.View`
    align-items: center;
    margin-top: 100px;
    margin-left: 25px;
    
`;