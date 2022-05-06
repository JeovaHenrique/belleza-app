import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native'



const UnhaData = [
    {
        id: 1,
        title: "Depilação na Cera",
        valor: "R$ 159,90",
        src: require('../img/depilacaoCera.png')

    },
    {
        id: 2,
        title: "Depilação a Lazer",
        valor: "R$ 9,90",
        src: require("../img/depilacaoLaser.png")

    },
    {
        id: 3,
        title: "Depilação na pinca",
        valor: "R$ 9,90",
        src: require("../img/depilacaoPince.png")

    }
]

function renderItem({ item }) {
    return <View style={styles.containerUnha}>
        <Image style={styles.imgPromo} source={item.src} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.valor}>A partir de</Text>
        <Text style={styles.valorReal}>{item.valor}</Text>
        <TouchableOpacity style={styles.bts} >
            <Text style={styles.texto}>Conhecer</Text>
        </TouchableOpacity>
    </View>
}

export default function Depilacao() {
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
    containerUnha: {
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