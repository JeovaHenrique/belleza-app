import React from 'react'
import 'react-native-gesture-handler'

import { createStackNavigator } from "@react-navigation/stack"

import HomeLogin from '../screens/HomeLogin'
import Endereco from '../screens/Endereco'
import Agendamento from '../screens/Agendamento'
import Pagamento from '../screens/Pagamento'

const stack = createStackNavigator()

export default function App() {
  return (
      <stack.Navigator>
        <stack.Screen name= 'HomeLogin' component={HomeLogin} options={{headerShown: false}}/>
        <stack.Screen name= 'Endereco' component={Endereco} options={{headerShown: false}}/>
        <stack.Screen name= 'Agendamento' component={Agendamento} options={{headerShown: false}}/>
        <stack.Screen name= 'Pagamento' component={Pagamento} options={{headerShown: false}}/>
      </stack.Navigator>
  )
}
