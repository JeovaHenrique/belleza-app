import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, Card } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import PedidoAndamento from '../components/PedidoAndamento'


export default function HomeLogin() {
    return (
        <View style={styles.container}>
            <View style={styles.containerService}>
                <TouchableOpacity style={styles.header} onPress={() => props.navigation.goBack()}>
                    <View style={styles.back}>
                        <Ionicons name='chevron-back-sharp' color='#434343F2' size={23}/>
                    </View>
                    <Text style={styles.name}>Pagamento</Text>
                </TouchableOpacity>
                <View style={styles.service}>
                    <PedidoAndamento/>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({


    container:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        
    },

    name: {
        paddingTop: 10,
        fontSize: 18,
        color: '#ffff',
        textAlign: 'center',
    },
    containerService: {
        height: 460,
        width: 380,
        flexDirection: 'row',
        backgroundColor: '#95B8C4',
    },

    header: {
        flexDirection: 'row',
        paddingTop: 64,
        
    },

    back: {
        marginRight: 50,
        marginLeft: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    service:{
        alignItems: 'center',
        justifyContent: 'center',
    }
})

