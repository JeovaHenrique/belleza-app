import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native'



const MassagemData = [
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

export default function Massagem() {
    return (
        <FlatList
            data={MassagemData}
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