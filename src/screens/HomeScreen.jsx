import React from "react"
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'

import Buttons from "../components/Buttons"

export default function HomeScreen({navigation}) {
    return (
        <ScrollView>

            <View style={styles.container}>
                <Image style={styles.logo} source={require("../img/logo.png")}/>
                <Image style={styles.picture} source={require("../img/tela.png")}/>
                <Text style={styles.title}>
                    Inspiração que aproxima
                </Text>
                <Text style={styles.texto}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Etiam sodales 
                est enim, id luctus dui dignissim nec
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                >
                    <Buttons caminho="Entrar"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.textcadastro}>Fazer cadastro</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
        width: 145.1,
        height:80.43,
        marginTop: 57,
        marginHorizontal: 115.45,
        marginBottom: 34,
        
    },

    picture: {
        width: 343.24,
        height: 305.14,
        marginHorizontal: 15.88,
    },

    title: {
        fontSize: 24,
        color: '#041637',
        paddingTop: 21.43,
        opacity: 1,
        letterSpacing: 0,
        textAlign: 'center',
    },

    texto: {
        paddingTop: 12,
        marginLeft:48,
        marginRight: 47,
        fontSize: 14,
        textAlign: 'center',
        color: '#B3B9C2',
        opacity: 1,
        letterSpacing: 0,
    },

    textcadastro: {
        paddingTop: 34,
        marginBottom: 20,
        fontSize: 14,
        color: '#D28369',
        textAlign: 'center',
        opacity: 1,
        letterSpacing: 0,
    }
  });
  
