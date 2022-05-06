import React from 'react'
import 'react-native-gesture-handler'

import { createStackNavigator } from "@react-navigation/stack"

import HomeLogin from '../screens/HomeLogin'
import Endereco from '../screens/Endereco'

const stack = createStackNavigator()

export default function App() {
  return (
      <stack.Navigator>
        <stack.Screen name= 'HomeLogin' component={HomeLogin} options={{headerShown: false}}/>
        <stack.Screen name= 'Endereco' component={Endereco} options={{headerShown: false}}/>
      </stack.Navigator>
  )
}
