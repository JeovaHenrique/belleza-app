import React, {useState, useCallback} from "react"
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import {useAsyncStorage} from '@react-native-async-storage/async-storage'
import { useFocusEffect } from "@react-navigation/native"


import Buttons from "../components/Buttons"
import Header from "../components/Header"

export default function Cadastro({navigation}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState([])

    const {getItem} = useAsyncStorage('@SaveUser:User')

    async function handlerUser() {

        const response = await getItem()
        const data = response ? JSON.parse(response) : []
        setData(data)
        
            if(data.email === email && data.password === password) {
                navigation.navigate('Login')

        }
    }

    useFocusEffect(useCallback(()=> {
        handlerUser()
    }, []))

    return (
        <View style={styles.container}>
                <Header navigation = {navigation} name="Entrar"/>
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
                    
                    <TouchableOpacity onPress={() => handlerUser()}>
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

    loginArea: {
        marginTop: 140,
        marginBottom: 20,
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
  