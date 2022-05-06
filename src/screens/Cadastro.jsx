import React, {useState, useEffect} from "react"
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import {useAsyncStorage} from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'



import Buttons from "../components/Buttons"
import Header from "../components/Header"

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')

    const {getItem, setItem} = useAsyncStorage("@SaveUser:User")

     async function handlerNew() {

        const id = uuid.v4()
        
         const NewData = {
            id,
            nome,
            email,
            cpf,
            telefone,
            password
         }

         const response = await getItem()
         const PreviousData = response ? JSON.parse(response) : []

         const Data = [...PreviousData, NewData]

         await setItem(JSON.stringify(Data))

         alert(
             "Cadastrado com Sucesso"
         )

            navigation.navigate('Login')
        
    }

    return (
        <View style={styles.container}>
            <Header navigation = {navigation} name="Fazer cadastro"/>
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
                    
                    <TouchableOpacity onPress={() => handlerNew()}>
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
  
