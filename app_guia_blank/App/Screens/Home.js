import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Home/Header';
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
import { ScrollView } from 'react-native'


export default function Home() {
  
  const [placeList,setPlaceList]=useState([]);
  
  
  useEffect(()=>{
    GetNearBySearchPlace();
  },[])

  const GetNearBySearchPlace=()=>{
    GlobalApi.nearByPlace().then(resp=>{
      setPlaceList(resp.data.results);
  })
  }
  return (
    <ScrollView style={{paddingTop:40,backgroundColor:'#fff',flex:1
    }}>
      <Header/>
      <GoogleMapView/>
      <CategoryList/>
      {placeList? <PlaceList placeList={placeList} />:null}
    </ScrollView>
  )
}