import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function PedidoConcluido() {
    return (
        <View style={styles.box}>
            <Text style={styles.titleBox}>Nome dee serviço grande</Text>
            <View style={styles.boxData}>
                <Text style={styles.textDataBox}>Terça 10/04/22 as 21:00h</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Ionicons name='star' color='#FFD800' size={23} style={styles.star}/>
                <Ionicons name='star' color='#FFD800' size={23} style={styles.star}/>
                <Ionicons name='star' color='#FFD800' size={23} style={styles.star}/>
                <Ionicons name='star' color='#FFD800' size={23} style={styles.star}/>
                <Ionicons name='star' color='#FFD800' size={23} style={styles.star}/>
            </View>
            <Text style={styles.textAttend}>Av. Miguel Castro, 600, Lagoa Nova</Text>
        </View>

    )
}

const styles = StyleSheet.create({

    box: {
        marginTop: 20,
        width: 320,
        height: 180,
        backgroundColor: '#fff',
        borderRadius: 20,
    },

    titleBox: {
        paddingTop: 26,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },

    boxData: {
        marginTop: 17,
        backgroundColor: '#D28369',
        height: 30,
        width: 200,
        borderRadius: 15,
        alignSelf: 'center',
    },

    textDataBox: {
        textAlign: 'center',
        padding: 5,
        color: '#FFFFFF',
        fontSize: 12,
    },
    textAttend: {
        textAlign: 'center',
        color: '#919191F2',
    },
    star: {
        fontSize: 24,
        textAlign: 'center',
        padding: 10,
    }
})