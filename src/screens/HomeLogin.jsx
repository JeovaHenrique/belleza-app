import React from 'react'
import {View, StyleSheet, SafeAreaView,SectionList, TouchableOpacity, Text, Image, Card} from 'react-native'

const DATA = [
    {
      title: "Unhas",
      data: ['Maos e pes', "Mão"]
    },
    {
      title: "Cabelo",
      data: ["escova em cabelos curtos", "Serviço de Hidratação, corte e reparação de cabelos danificados"]
    },
    {
      title: "Depilação",
      data: ["Depilação com pinca", "depilação a laizer"]
    },
    {
      title: "Massagem",
      data: ["Massagem japonesa", "massagem indiana"]
    }
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

export default function HomeLogin() {
    return (
        <View style={styles.container}>
            <View style={styles.recepção}>
                <Text style={{fontSize: 36, color: "#FFFFFFF2",}}>
                    Olá, "Nome",
                    </Text>
                <Text style={{fontSize: 16, color: "#FFFFFFF2"}}>
                    Onde será seu atendimento hoje?
                </Text>
            </View>
            <View>
                <SafeAreaView style={styles.containerView}>
                    <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                    />
                </SafeAreaView>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      
    },

    recepção: {
        justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingLeft: 30,
      paddingTop: 60,
      height: 340,
      backgroundColor: '#95B8C4',
      
    },

    containerView: {
        marginHorizontal: 16
    }

})