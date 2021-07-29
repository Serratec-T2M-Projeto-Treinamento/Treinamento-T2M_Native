import React from 'react';
import{ CertificacaoScroll, Container, CertiText, CertifiArea, CertiView, ButtonView, ButtonText, CertiButton }from './styles';
import MenuIcon from '../../components/icon';

export default function certificacao() {


    return(
        <Container>
            <MenuIcon />
            <CertificacaoScroll>
                <CertifiArea>
                    <CertiView>
                        <CertiText>- Certificação </CertiText>
                        <CertiText>- Certificação </CertiText>
                        <CertiText>- Certificação </CertiText>
                    </CertiView>
                    <ButtonView>
                    <CertiButton>
                        <ButtonText>Inserir certificacao</ButtonText>
                    </CertiButton>
                    </ButtonView>
                </CertifiArea>
            </CertificacaoScroll>
        </Container>

    )
}