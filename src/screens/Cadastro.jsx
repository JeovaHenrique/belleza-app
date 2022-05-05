import React, {useState, useEffect} from "react"
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { FloatingLabelInput } from 'react-native-floating-label-input'


import Buttons from "../components/Buttons"

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')

    function handlerNew(data) {
        if (nome !== '' && email !=='' && cpf !=='' && telefone!=='' && password!=='') {

            console.log(data = {
                nome,
                email,
                cpf,
                telefone,
                password,
            })
            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Ionicons name='chevron-back-sharp' color='#434343F2' size={23} style={styles.back}/>
                    </TouchableOpacity>
                    <Text style={styles.pagina}>Fazer Cadastro</Text>
                </View>
            < ScrollView>
                <View style={styles.inputArea}>

                    <FloatingLabelInput
                        label="Nome Completo"
                        value={nome}
                        containerStyles={styles.input}
                        customLabelStyles={{
                            colorFocused: '#0F5BFF',
                            fontSizeFocused: 12,
                            topFocused: -20,
                        }}
                        labelStyles={styles.labelStyles}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                        setNome(value);
                        }}
                    />
                    <FloatingLabelInput
                        label="Email"
                        value={email}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                        setEmail(value);
                        }}
                    />
                    <FloatingLabelInput
                        label="CPF"
                        value={cpf}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                        setCpf(value);
                        }}
                    />
                    <FloatingLabelInput
                        label="Telefone"
                        value={telefone}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                        setTelefone(value);
                        }}
                    />
                    <FloatingLabelInput
                        label='Senha'
                        isPassword
                        value={password}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                        setPassword(value);
                        }}
                        customShowPasswordComponent={
                        <Ionicons name='eye' color='#434343F2' size={23} style ={styles.marc}/>
                        }
                        customHidePasswordComponent={
                        <Ionicons name='eye-off' color='#434343F2' size={23} style ={styles.marc}/>
                        }
                    />
                    
                    <TouchableOpacity onPress={() => handlerNew(nome)}>
                        <Buttons caminho='Avançar'/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
            

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'flex-start',
    },

    pagina: {
        fontSize: 18,
        color: '#434343F2',
        alignItems: 'center',
    },
    header: {
        marginTop: 64,
        flexDirection: 'row',
    },

    back: {
        alignSelf: 'flex-start',
        marginRight: 73,
        paddingLeft: 30,
    },

    inputArea: {
        marginTop: 69,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },
    marc: { 
        paddingHorizontal: 15,
    }, 
    
    input: {
        height: 70,
        borderWidth: 2,
        marginHorizontal: 40,
        marginBottom:20,
        backgroundColor: '#FFFFFF',
        borderColor: '#F3F0F0',
        borderRadius: 20,
        paddingLeft: 20,
    },

    textinput: {
        color: '#000000',
        fontSize: 12,
    },
    labelStyles: {
        justifyContent:'center',
    }

  })
  
