import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import HomeStackScreen from './HomeStackScreen'
import Pedido from '../screens/Pedido'
import Pesquisa from '../screens/Pesquisa'

const Tab = createBottomTabNavigator()

export default function LoggedTabNavigator() {
    return (
      <Tab.Navigator>
            <Tab.Screen
                name="HomeStackScreen"
                component={HomeStackScreen}
                options={{
                    headerShown: false,
                    title: 'Principal',
                    tabBarIcon: () => <Ionicons name='home' color='#434343F2' size={23}/>
                }}
           />
           <Tab.Screen
                name="Pesquisa"
                component={Pesquisa}
                options={{
                    headerShown: false,
                    title: 'Pesquisa',
                    tabBarIcon: () => <Ionicons name='ios-search' color='#434343F2' size={23}/>
                }}
           />
           <Tab.Screen
                name="Pedido"
                component={Pedido}
                options={{
                    headerShown: false,
                    title: 'Pedidos',
                    tabBarIcon: () => <Ionicons name='md-document-text-outline' color='#434343F2' size={23}/>
                }}
           />
       </Tab.Navigator> 
    );
}