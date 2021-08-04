import React from 'react';
import axios from 'axios';
import { Container, InputArea, InputView, InputCadastro, ButtonView, CadastroButton, CadastroText, PickerView } from './styles';
import { Alert, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function CadastroEndereco({ route }) {

    const enderecoValidationSchema = yup.object().shape({
        rua: yup
            .string()
            .max(100, ({ max }) => `Maximo de ${max} caracteres`)
            .required("Rua é obrigatório"),
        numero: yup
            .string()
            .max(10, ({ max }) => `Maximo de ${max} caracteres`)
            .required("Numero é obrigatório"),
        complemento: yup
            .string()
            .max(15, ({ max }) => `Maximo de ${max} caracteres`),
        bairro: yup
            .string()
            .max(50, ({ max }) => `Maximo de ${max} caracteres`)
            .required("Bairro é obrigatório"),
        cidade: yup
            .string()
            .max(50, ({ max }) => `Maximo de ${max} caracteres`)
            .required("Cidade é obrigatório"),
        estado: yup
            .string()
            .max(2, ({ max }) => `Maximo de ${max} caracteres`)
            .required("Estado é obrigatório"),
        cep: yup.string().required("CEP é obrigatório"),
        pais: yup
            .string()
            .max(15, ({ max }) => `Maximo de ${max} caracteres`)
            .required("Pais é obrigatório"),
    });

    return (
        <Container>
            <Formik
                initialValues={{
                    pais: '',
                    estado: '',
                    cidade: '',
                    bairro: '',
                    rua: '',
                    numero: '',
                    complemento: '',
                    cep: '',
                }}
                onSubmit={async (values) => {
                    const endereco = {
                        pais: values.pais,
                        estado: values.estado,
                        cidade: values.cidade,
                        bairro: values.bairro,
                        rua: values.rua,
                        numero: values.numero,
                        complemento: values.complemento,
                        cep: values.cep,
                    }
                    try {
                        const responseEndereco = await axios.post('https://api-treinamento-t2m.herokuapp.com/enderecos', endereco);
                        const idEndereco = responseEndereco.data.idEnderecos
                        console.log(idEndereco);

                        const response = await axios.put(`https://api-treinamento-t2m.herokuapp.com/colabsEndrs/colaborador/${route.params.idColaboradores}/enderecoAInserir/${idEndereco}`);
                        console.log(response);
                        Alert.alert('Endereço inserido com sucesso!')
                    } catch (error) {
                        Alert.alert('Ocorreu um erro, por favor cheque os dados enviados')
                        console.error(error);
                    }
                }}
                validationSchema={enderecoValidationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched, isValid }) => (
                    <>
                        <InputArea>
                            <InputView>
                                <InputCadastro name='pais' onChangeText={handleChange('pais')} onBlur={handleBlur('pais')} value={values.pais} placeholder='País' placeholderTextColor='#181818' />
                                {(errors.pais && touched.pais) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.pais}</Text>
                                }
                            </InputView>
                            <InputView>
                                <PickerView>
                                    <Picker
                                        mode='dropdown'
                                        itemStyle={{ color: '#181818' }}
                                        selectedValue={values.estado}
                                        onValueChange={(itemValue, itemIndex) => setFieldValue('estado', itemValue)}>
                                        <Picker.Item color='#181818' label='Escolha um Estado' value='' />
                                        <Picker.Item color='#181818' value='AC' label='Acre' />
                                        <Picker.Item color='#181818' value='AL' label='Acre' />
                                        <Picker.Item color='#181818' value='AP' label='Alagoas' />
                                        <Picker.Item color='#181818' value='AM' label='Amapá' />
                                        <Picker.Item color='#181818' value='BA' label='Amazonas' />
                                        <Picker.Item color='#181818' value='CE' label='Bahia' />
                                        <Picker.Item color='#181818' value='DF' label='Distrito Federal' />
                                        <Picker.Item color='#181818' value='ES' label='Espírito Santo' />
                                        <Picker.Item color='#181818' value='GO' label='Goiás' />
                                        <Picker.Item color='#181818' value='MA' label='Maranhão' />
                                        <Picker.Item color='#181818' value='MT' label='Mato Grosso' />
                                        <Picker.Item color='#181818' value='MS' label='Mato Grosso do Sul' />
                                        <Picker.Item color='#181818' value='MG' label='Minas Gerais' />
                                        <Picker.Item color='#181818' value='PA' label='Pará' />
                                        <Picker.Item color='#181818' value='PB' label='Paraíba' />
                                        <Picker.Item color='#181818' value='PR' label='Paraná' />
                                        <Picker.Item color='#181818' value='PE' label='Pernambuco' />
                                        <Picker.Item color='#181818' value='PI' label='Piauí' />
                                        <Picker.Item color='#181818' value='RJ' label='Rio de Janeiro' />
                                        <Picker.Item color='#181818' value='RN' label='Rio Grande do Norte' />
                                        <Picker.Item color='#181818' value='RS' label='Rio Grande do Sul' />
                                        <Picker.Item color='#181818' value='RO' label='Rondônia' />
                                        <Picker.Item color='#181818' value='RR' label='Roraima' />
                                        <Picker.Item color='#181818' value='SC' label='Santa Catarina' />
                                        <Picker.Item color='#181818' value='SP' label='São Paulo' />
                                        <Picker.Item color='#181818' value='SE' label='Sergipe' />
                                        <Picker.Item color='#181818' value='TO' label='Tocantins' />
                                    </Picker>
                                </PickerView>
                            </InputView>
                            <InputView>
                                <InputCadastro onChangeText={handleChange('cidade')} onBlur={handleBlur('cidade')} value={values.cidade} placeholder='Cidade' placeholderTextColor='#181818' />
                                {(errors.cidade && touched.cidade) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.cidade}</Text>
                                }
                            </InputView>
                            <InputView>
                                <InputCadastro onChangeText={handleChange('bairro')} onBlur={handleBlur('bairro')} value={values.bairro} placeholder='Bairro' placeholderTextColor='#181818' />
                                {(errors.bairro && touched.bairro) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.bairro}</Text>
                                }
                            </InputView>
                            <InputView>
                                <InputCadastro onChangeText={handleChange('rua')} onBlur={handleBlur('rua')} value={values.rua} placeholder='Rua' placeholderTextColor='#181818' />
                                {(errors.rua && touched.pais) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.rua}</Text>
                                }
                            </InputView>
                            <InputView>
                                <InputCadastro onChangeText={handleChange('numero')} onBlur={handleBlur('numero')} value={values.numero} keyboardType='number-pad' placeholder='Numero' placeholderTextColor='#181818' />
                                {(errors.numero && touched.numero) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.numero}</Text>
                                }
                            </InputView>
                            <InputView>
                                <InputCadastro onChangeText={handleChange('complemento')} onBlur={handleBlur('complemento')} values={values.complemento} placeholder='Complemento' placeholderTextColor='#181818' />
                                {(errors.complemento && touched.complemento) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.complemento}</Text>
                                }
                            </InputView>
                            <InputView>
                                <InputCadastro onChangeText={handleChange('cep')} onBlur={handleBlur('cep')} value={values.cep} keyboardType='number-pad' placeholder='Cep' placeholderTextColor='#181818' />
                                {(errors.cep && touched.cep) &&
                                    <Text style={{ fontSize: 15, color: 'red' }}>{errors.cep}</Text>
                                }
                            </InputView>
                        </InputArea>
                        <ButtonView>
                            <CadastroButton onPress={() => handleSubmit()}
                                disabled={!isValid}>
                                <CadastroText>SALVAR</CadastroText>
                            </CadastroButton>
                        </ButtonView>
                    </>
                )}
            </Formik>
        </Container>
    )
}



{/* <InputCadastro onChangeText={handleChange('estado')} onBlur={handleBlur('estado')} value={values.estado} placeholder='Sigla do Estado' placeholderTextColor='#181818' />
{(errors.estado && touched.estado) &&
    <Text style={{ fontSize: 15, color: 'red' }}>{errors.estado}</Text>
} */}