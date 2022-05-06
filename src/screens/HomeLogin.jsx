import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Promo from '../components/Promo'
import Unhas from '../components/Unhas'
import Massagem from '../components/Massagem'
import Cabelo from '../components/Cabelo'
import Depilacao from '../components/Depilacao'

export default function HomeLogin({navigation}) {
  const [endereço, setEndereco] = useState("Adicione um endereço")

  return (
    <View style={styles.container}>
      <View style={styles.backgr} />
      <View style={styles.recepção}>
        <Text style={{ fontSize: 36, color: "#FFFFFFF2" }}>
          Olá, "Nome",
        </Text>
        <Text style={styles.atendimento}>
          Onde será seu atendimento hoje?
        </Text>
        <TouchableOpacity style={styles.addEndereco} onPress= {() => navigation.navigate('Endereco')}>
          <Text style={styles.name}>{endereço}</Text>
          <Ionicons name='md-chevron-forward-outline' color='#FFFF' size={23} style={styles.marc} />
        </TouchableOpacity>
      </View>
      <Promo />
      <ScrollView>
        <Text style={styles.titleText}>Unhas</Text>
        <Unhas navigation={navigation}/>
        <Text style={styles.titleText}>Cabelo</Text>
        <Cabelo navigation={navigation}/>
        <Text style={styles.titleText}>Depilação</Text>
        <Depilacao navigation={navigation}/>
        <Text style={styles.titleText}>Massagem</Text>
        <Massagem navigation={navigation}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  backgr: {
    height: 360,
    width: "100%",
    backgroundColor: '#95B8C4',
    position: 'absolute',
  },
  recepção: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingTop: 60,
  },

  titleText: {
    color: '#434343F2',
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 10,
    margin: 20,
  },

  atendimento: {
    fontSize: 16,
    color: "#FFFFFFF2",

  },

  name: {
    paddingLeft: 10,
    color: "#FFFFFFF2",
    fontSize: 16,
  },

  addEndereco: {
    flexDirection: 'row',
    height: 60,
    color: "#FFFFFFF2",
    borderColor: '#F3F0F0',
    marginTop: 30,
    borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    width: 300,
  },

  marc: {
    paddingHorizontal: 15,
  },

})