import React from 'react'
import {  View, StyleSheet, TouchableOpacity, Text, Image, FlatList, SafeAreaView } from 'react-native'

const dados = [
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

    },

    {
        id: 4,
        title: "Escova em Cabelos Curtos",
        valor: "R$ 49,90",
        src: require("../img/escovaCurto.png")

    },

    {
        id: 5,
        title: "corte e reparação de cabelos danificados",
        valor: "R$ 79,90",
        src: require("../img/danificado.png")

    },

    {
        id: 6,
        title: "corte cabelos cacheados",
        valor: "R$ 49,90",
        src: require("../img/cacheado.png")

    },

    {
        id: 7,
        title: "Massagem Corporal",
        valor: "R$ 89,90",
        src: require("../img/MassagemCorporal.png")

    },

    {
        id: 8,
        title: "Massagem Facial",
        valor: "R$ 59,90",
        src: require("../img/MassagemFacial.png")

    },

    {
        id: 9,
        title: "Massagem Casal",
        valor: "R$ 109,90",
        src: require("../img/MassagemCasal.png")

    },

    {
        id: 10,
        title: "Depilação na Cera",
        valor: "R$ 159,90",
        src: require('../img/depilacaoCera.png')

    },
    {
        id: 11,
        title: "Depilação a Lazer",
        valor: "R$ 9,90",
        src: require("../img/depilacaoLaser.png")

    },
    {
        id: 12,
        title: "Depilação na pinca",
        valor: "R$ 9,90",
        src: require("../img/depilacaoPince.png")

    }
]

function renderItem({ item }) {
    return <SafeAreaView style={styles.container}>
        <Image style={styles.imgPromo} source={item.src} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.valor}>A partir de</Text>
        <Text style={styles.valorReal}>{item.valor}</Text>
        <TouchableOpacity style={styles.bts} >
            <Text style={styles.texto}>Conhecer</Text>
        </TouchableOpacity>
    </SafeAreaView>
}

export default function Dados() {
    return (
        <View style={styles.container}>

            <FlatList
                data={dados}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerBox: {
        height: 300,
        width: 150,
        borderColor: '#FFFFFF',
        borderRadius: 20,
        marginLeft: 10,
        backgroundColor: '#FFFFFF',
    },

    imgPromo: {
        height: 150,
        width: 150,
        marginBottom: 10,
        paddingLeft: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },

    title: {
        flexDirection: 'row',
        flexWrap: "wrap",
        fontSize: 16,
        paddingLeft: 20,
        color: '#434343F2',
        fontWeight: "bold",
        marginBottom: 5,
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
        marginBottom: 5,
    },

    bts: {
        width: 120,
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
    }

})