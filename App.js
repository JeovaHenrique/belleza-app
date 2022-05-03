import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "./src/screens/HomeScreen"

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name= 'HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}
