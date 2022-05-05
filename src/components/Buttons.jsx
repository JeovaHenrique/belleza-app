import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


export default function Buttons(props) {

    const {caminho} = props

    return (
        <View style={styles.bts}>
            <Text style={styles.texto}>{caminho}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    bts: {
        marginTop: 34,
        width:295,
        height:70,
        marginHorizontal: 40,
        backgroundColor:'#95B8C4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:35,
    },
    
    texto: {
        fontSize: 14,
        color: '#fff',
        opacity: 1,
        letterSpacing: 0,
    },

  });
  
