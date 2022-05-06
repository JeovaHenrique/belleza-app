import React from 'react'
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native'

const UnhaData = [
    {
        id: 1,
        title: "Pés e Mão",
        valor: "R$ 19,90",
        src: require('../img/pesMao.jpg')

    },
    {
        id: 2,
        title: "Pés",
        valor: "R$ 9,90",
        src: require("../img/pes.png")

    },
    {
        id: 3,
        title: "Mão",
        valor: "R$ 9,90",
        src: require("../img/mao.png")

    }
]

function renderItem({ item }) {
    return <View style={styles.container}>
        <Image style={styles.imgPromo} source={item.src} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.valor}>A partir de</Text>
        <Text style={styles.valorReal}>{item.valor}</Text>
        <TouchableOpacity style={styles.bts}>
            <Text style={styles.texto}>Conhecer</Text>
        </TouchableOpacity>
    </View>
}

export default function Unhas() {
    return (
        <FlatList
            data={UnhaData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        borderColor: '#FFFFFF',
        borderRadius: 20,
        marginLeft: 10,
        backgroundColor: '#FFFFFF',
    },

    imgPromo: {
        height: 150,
        width: "100%",
        marginBottom: 10,
        paddingLeft: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },

    title: {
        fontSize: 18,
        paddingLeft: 20,
        color: '#434343F2',
        fontWeight: "bold",
        marginBottom: 10,
    },

    valor: {
        color: '#D28369',
        fontSize: 12,
        paddingLeft: 20,
    },

    valorReal: {
        color: '#D28369',
        fontSize: 16,
        paddingLeft: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

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