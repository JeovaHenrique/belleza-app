import React from 'react'
import {StyleSheet, Text, View} from 'react-native'


export default function Buttons(props) {
    return ( 
        <TouchableOpacity style={styles.bts}>
            <Text style={styles.texto}>Conhecer</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bts: {
        width: 190,
        height: 45,
        marginHorizontal: 10,
        backgroundColor: '#95B8C4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },

    texto: {
        fontSize: 14,
        color: '#fff',
        opacity: 1,
        letterSpacing: 0,
    },

})