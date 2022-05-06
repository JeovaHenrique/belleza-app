import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'


import PedidoAndamento from '../components/PedidoAndamento'
import PedidoConcluido from '../components/PedidoConcluido'

export default function Pesquisa() {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.title}>Pedido</Text>
            </View>
            <ScrollView style={styles.areaPedido}>
                <Text style={styles.title}>Em Andamento</Text>
                <PedidoAndamento/>
                <PedidoAndamento/>
                <PedidoAndamento/>
                <Text style={styles.title}>Concluído</Text>
                <PedidoConcluido/>
                <PedidoConcluido/>
                <PedidoConcluido/>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    Header: {
        marginTop: 30,
        height: 150,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#041637',
        
    },

    title: {
        paddingTop: 10,
        fontSize: 20,
        color: '#434343F2',
    },

    areaPedido: {
        paddingLeft: 23,
    },

})