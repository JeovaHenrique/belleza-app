import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, SafeAreaView } from 'react-native'

const CabeloData = [
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

export default function Cabelo() {
    return (
        <FlatList
            data={CabeloData}
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
        width:200,
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