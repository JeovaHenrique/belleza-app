import React, {useState} from "react"
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { FloatingLabelInput } from 'react-native-floating-label-input'


import Buttons from "../components/Buttons"

export default function Cadastro({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handlerNew(data) {
        if (email !=='' && password!=='') {

            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Ionicons name='chevron-back-sharp' color='#434343F2' size={23} style={styles.back}/>
                    </TouchableOpacity>
                    <Text style={styles.pagina}>Entrar</Text>
                </View>
                <View style={styles.loginArea}>

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
                    
                    <TouchableOpacity>
                        <Buttons caminho='Entrar'/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                >
                    <Text style={styles.lost}>Esqueceu senha?</Text>
                </TouchableOpacity>
                <Text style={styles.textCadastro}>
                    Não possui uma conta?<Text style={styles.cadastro}> Cadastre-se</Text>
            
                </Text>

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
        paddingLeft: 35,
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

    loginArea: {
        marginTop: 159,
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
    },
    lost: {
        paddingTop: 5,
        marginBottom: 20,
        fontSize: 14,
        color: '#D28369',
        textAlign: 'center',
        opacity: 1,
        letterSpacing: 0,
    },
    cadastro: {
        color: '#0F5BFF',
        paddingLeft: 10,
    },
     textCadastro: {
        alignItems: 'center', 
        paddingLeft: 60,
        marginTop: 50,
     }

  })
  