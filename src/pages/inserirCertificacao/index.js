import React, { useState } from 'react';
import axios from 'axios';
import { Container, EspacoView, InputArea, InputCadastro, CertiButton, CertiText, ButtonView, CadastroText, CadastroView, MensagemArea, MensagemView, MensagemText } from './styles';
import { Alert, Text } from 'react-native';
import MenuIcon from '../../components/icon';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function InserirCertificados({ route }) {
    if (route.params) {


        const { colaborador } = route.params

        const certValidationSchema = yup.object().shape({
            nomeCertificado: yup.string().max(50, ({ max }) => `Máximo de ${max} caracteres`).required('O nome do certificado é obrigatório'),
            instituicaoCertificado: yup.string().max(30, ({ max }) => `Máximo de ${max} caracteres`).required('O nome da instituição é obrigatório'),
            tempoValidade: yup.number().max(2, ({ max }) => `Máximo de ${max} dígitos`)
        });

        console.log(colaborador.idColaboradores);

        return (
            <Container>
                <MenuIcon />
                <Formik initialValues={{
                    nomeCertificado: '',
                    instituicaoCertificado: '',
                    tempoValidade: 0
                }}
                    onSubmit={async (values) => {
                        const certificado = {
                            nomeCertificado: values.nomeCertificado,
                            instituicaoCertificado: values.instituicaoCertificado,
                            tempoValidade: values.tempoValidade
                        }
                        try {
                            const responseCertificado = await axios.post('https://api-treinamento-t2m.herokuapp.com/certificacoes', certificado)
                            const idCertificado = responseCertificado.data.idCertificacoes
                            console.log(idCertificado);
                            await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsCerts​/colaborador​/${colaborador.idColaboradores}​/certificacaoAInserir​/${idCertificado}​`)
                            Alert.alert('Colaborador cadastrado com sucesso!')
                        } catch (error) {
                            Alert.alert('Envio de dados nao permitido, cheque as informações passadas');
                            console.error(error);
                        }
                    }}
                    validationSchema={certValidationSchema}>
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                        <>
                            <CadastroView>
                                <CadastroText> Cadastro de Certificados </CadastroText>
                            </CadastroView>
                            <InputArea>
                                <InputCadastro name='nomeCertificado' onChangeText={handleChange('nomeCertificado')} onBlur={handleBlur('nomeCertificado')} value={values.nomeCertificado} placeholder='Nome do Certificado' placeholderTextColor='#181818' />
                                {(errors.nomeCertificado && touched.nomeCertificado) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.nomeCertificado}</Text>
                                }
                                <InputCadastro name='instituicaoCertificado' onChangeText={handleChange('instituicaoCertificado')} onBlur={handleBlur('instituicaoCertificado')} value={values.instituicaoCertificado} placeholder='Nome da Instuição' placeholderTextColor='#181818' />
                                {(errors.instituicaoCertificado && touched.instituicaoCertificado) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.instituicaoCertificado}</Text>
                                }
                                <InputCadastro name='tempoValidade' onChangeText={handleChange('tempoValidade')} onBlur={handleBlur('tempoValidade')} value={values.tempoValidade} keyboardType='number-pad' placeholder='Validade' placeholderTextColor='#181818' />
                                {(errors.tempoValidade && touched.tempoValidade) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.tempoValidade}</Text>
                                }
                                <ButtonView>
                                    <CertiButton onPress={() => handleSubmit()}
                                        disabled={!isValid}>
                                        <CertiText>Salvar</CertiText>
                                    </CertiButton>
                                </ButtonView>
                            </InputArea>

                        </>
                    )}
                </Formik>
            </Container>
        )
    } else {
        return (
            <Container>
                <MenuIcon />
                <MensagemArea>
                    <MensagemView>
                        <MensagemText>Não foi possivel ir para o cadastro,</MensagemText>
                        <MensagemText>escolha um colaborador para cadastrar uma certificação a ele.</MensagemText>
                    </MensagemView>
                </MensagemArea>
            </Container>
        )
    }
}