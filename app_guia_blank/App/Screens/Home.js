import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Home/Header';
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import GlobalApi from '../Services/GlobalApi';
import PlaceList from '../Components/Home/PlaceList';
import { FlatList } from 'react-native'
import { UserLocationContext } from '../Context/UserLocationContext';

export default function Home() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);
  
  useEffect(() => {
    if (location && location.coords) { // Verifica se location e location.coords existem
      GetNearBySearchPlace('Restaurantes');
    }
  }, [location]);

  const GetNearBySearchPlace = (value) => {
    GlobalApi.nearByPlace(location.coords.latitude, location.coords.longitude,value)
      .then(resp => {
        setPlaceList(resp.data.results);
      })
      .catch(error => console.error("Erro ao buscar lugares:", error));
  };

  const renderContent = () => (
    <>
      <Header />
      <GoogleMapView placeList={placeList}/>
      <CategoryList setSelectedCategory={(value)=>GetNearBySearchPlace(value)
      } />
      {placeList ? <PlaceList placeList={placeList} /> : null}
    </>
  );

  return (
    <FlatList
      data={[]}
      ListHeaderComponent={renderContent}
      style={{ paddingTop: 40, backgroundColor: '#fff', flex: 1 }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
