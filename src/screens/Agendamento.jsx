import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text, Image, Card} from 'react-native'

export default function HomeLogin() {
    return (
        <View style={styles.container}>
            <Text>
                Agendamento
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