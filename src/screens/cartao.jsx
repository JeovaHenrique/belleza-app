import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Image, Card} from 'react-native'

export default function Cartao() {
    return (
        <View style={styles.container}>
            <Text>
                cartao
            </Text>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
})