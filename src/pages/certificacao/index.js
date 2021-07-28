import React from 'react';
import{CertificacaoScroll, Container, CertiText, CertifiArea, CertiView, ButtonView, ButtonText, CertiButton }from './styles';


export default function certificacao() {


    return(
        <Container>
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