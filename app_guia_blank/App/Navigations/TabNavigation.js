import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Gemini from '../Screens/Gemini';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="Home" component={HomeNavigation} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Search" component={Search}
       options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Gemini" component={Gemini}
       options={{
        tabBarLabel: 'Gemini',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="robot-happy-outline" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} 
       options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          
          <FontAwesome name="user-circle-o" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  )
}