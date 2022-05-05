import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./src/screens/HomeScreen"
import Cadastro from './src/screens/Cadastro'
import Login from './src/screens/Login'
import HomeLogin from './src/screens/HomeLogin'

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        {/*<stack.Screen name= 'HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
        <stack.Screen name= 'Cadastro' component={Cadastro} options={{headerShown: false}}/>
        <stack.Screen name= 'Login' component={Login} options={{headerShown: false}}/>*/}
        <stack.Screen name= 'HomeLogin' component={HomeLogin} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}
