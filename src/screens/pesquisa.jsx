import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Dados from '../bd/Dados'

    export default function Pesquisa() {
        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                    <TextInput
                        style={styles.pesquisa}
                        placeholder="O que está procurando?"
                    >
                        <Ionicons name='ios-search' color='#434343F2' size={23} />
                    </TextInput>
                </View>
                <View style={{flexDirection: 'row'}}>   
                    <Dados/>
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: "wrap",
            backgroundColor: '#FFFFFF',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        },
        Header: {
            backgroundColor: "#95B8C4",
            height: 200,
            width: "100%",
        },
        pesquisa: {
            marginTop: 100,
            width: "80%",
            borderRadius: 35,
            borderWidth: 2,
            borderColor: '#ffff',
            padding: 10,
            color: "#ffff",
        },
        
    })