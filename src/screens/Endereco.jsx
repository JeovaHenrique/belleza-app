import React, {useState, useEffect} from "react"
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, Button} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import {useAsyncStorage} from '@react-native-async-storage/async-storage'


import Buttons from "../components/Buttons"
import Header from "../components/Header"

export default function Endereco({navigation}) {

    const [CEP, setCEP] = useState('')
    const [rua, setRua] = useState('')
    const [numCasa, setNumCasa] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')

    const {getItem, setItem} = useAsyncStorage('@SaveEndereco:Endereco')

    async function handlerNewEndereco() {
        
         const NewData = {
            CEP,
            rua,
            numCasa,
            complemento,
            bairro,
         }

         await setItem(JSON.stringify(NewData))

         alert(
             "Cadastrado com Sucesso"
         )

        const response = await getItem()
        const data = response ? JSON.parse(response) : []
        console.log(data)
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Header navigation = {navigation} name="Fazer cadastro"/>
            < ScrollView>
                <View style={styles.inputArea}>
                    <View style={styles.cep}>

                        <FloatingLabelInput
                            label="CEP"
                            value={CEP}
                            containerStyles={styles.inputCep}
                            customLabelStyles={{
                                colorFocused: '#0F5BFF',
                                fontSizeFocused: 12,
                                topFocused: -20,
                            }}
                            labelStyles={styles.labelStyles}
                            inputStyles={styles.textinput}
                            onChangeText={value => {
                                setCEP(value);
                            }}
                            />

                        <Text style={styles.texto}>Buscar CEP</Text>
                    </View>
                    <FloatingLabelInput
                        label="rua"
                        value={rua}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                            setRua(value);
                        }}
                    />
                    <View style={styles.cnum}>

                    <FloatingLabelInput
                        label="número"
                        value={numCasa}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                            setNumCasa(value);
                        }}
                        />
                    <FloatingLabelInput
                        label=" Comple."
                        value={complemento}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                            setComplemento(value);
                        }}
                        />
                        </View>
                    <FloatingLabelInput
                        label='Bairro'
                        value={bairro}
                        customLabelStyles={{topFocused: -20}}
                        containerStyles={styles.input}
                        inputStyles={styles.textinput}
                        onChangeText={value => {
                            setBairro(value);
                        }}
                        />
                    
                    
                    <TouchableOpacity onPress={() => handlerNewEndereco()}>
                        <Buttons caminho='Adicionar Endereço'/>
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
    cep:{ 
        flexDirection: 'row',
        alignItems:"center",
        width: 200,
        justifyContent:'flex-end',
    },
    
    input: {
        height: 70,
        borderWidth: 2,
        marginHorizontal: 25,
        marginBottom:20,
        backgroundColor: '#FFFFFF',
        borderColor: '#F3F0F0',
        borderRadius: 20,
        paddingLeft: 20,
        
    },
    inputCep: {
        height: 70,
        borderWidth: 2,
        marginBottom:20,
        marginStart: 50,
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
    texto: {
        marginLeft: 20,
    },
    cnum: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        width: 200,
        marginLeft: 30,
        marginRight: 20,
    },

    inputNum:{ 
        height: 70,
        borderWidth: 2,
        marginBottom:20,
        backgroundColor: '#FFFFFF',
        borderColor: '#F3F0F0',
        borderRadius: 20,
        paddingLeft: 20,
    },

  })
  
