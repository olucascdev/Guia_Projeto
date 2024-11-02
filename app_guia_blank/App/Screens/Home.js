import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Home/Header';
import GoogleMapView from '../Components/Home/GoogleMapView';


export default function Home() {
  return (
    <View style={{paddingTop:40,backgroundColor:'#fff',flex:1
    }}>
      <Header/>
      <GoogleMapView/>
    </View>
  )
}