import React from 'react'
import {View, StyleSheet, Image, FlatList} from 'react-native'


const promo = [
    {
      id: 1,
      src: require('../img/cashback.png')
    },
  
    {
      id: 2,
      src: require('../img/70desconto.png')
    },
  
    {
      id: 3,
      src: require('../img/leve2pague1.png')
    }
  ]
  
  function renderItem({item}) {
    return <View style={styles.containerPromo}>
      <Image style={styles.imgPromo} source={item.src}/>
    </View>
  }
  
  export default function Promo() {

      return (
            <FlatList
                data={promo}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
      )
  }

const styles = StyleSheet.create({

    containerPromo: {
      height: 700,
      marginTop: 50,
    },

    imgPromo: {
      height: 170,
      width: 250,
      borderRadius: 10,
      marginHorizontal: 10,
    },

})