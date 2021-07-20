import React from 'react';
import { ContainerInicial, TitleText, TelaView, TelaButton, TitleView, TelaText, ButtonView, Logo, LogoView } from './styles';

export default function TelaIncial({navigation}) {
    return (
        <ContainerInicial>
                <TelaView>
                    <LogoView>
                    <Logo source={require('../../icons/logo.png')} />
                    </LogoView>
                    <TitleView>
                    <TitleText>Bem-Vindo Administrador</TitleText>
                    </TitleView>
                    <ButtonView>
                    <TelaButton onPress={() => {navigation.navigate('Login')}}>
                        <TelaText>Clique para fazer login</TelaText>
                    </TelaButton>
                    </ButtonView>
                </TelaView>
        </ContainerInicial>
    );
};
