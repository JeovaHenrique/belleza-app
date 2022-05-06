import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export default function Header(props) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Ionicons name='chevron-back-sharp' color='#434343F2' size={23} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.name}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    name: {
        fontSize: 18,
        color: '#041637',
        textAlign: 'center',
    },
    header: {
        marginTop: 64,
        flexDirection: 'row',
    },

    back: {
        alignSelf: 'flex-start',
        marginRight: 73,
        paddingLeft: 30,
        backgroundColor: '#FFFFFF',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
})

