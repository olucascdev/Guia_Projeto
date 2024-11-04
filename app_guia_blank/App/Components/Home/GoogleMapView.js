import { View, Text, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { UserLocationContext } from "../../Context/UserLocationContext";
import PlaceMarker from "./PlaceMarker";
import Colors from "../../Shared/Colors";

export default function GoogleMapView({placeList}) {
    const { location, setLocation } = useContext(UserLocationContext);
    const [mapRegion, setmapRegion] = useState({});

    useEffect(() => {
        if (location) {
            setmapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.00222,
                longitudeDelta: 0.0121,
            });
        }
    }, [location]);

    return (
        <View style={{marginLeft:10, marginTop: 20 }}>
            <Text
                style={{
                    fontSize: 16,
                    marginBottom: 10,
                    fontWeight: "650",
                    fontFamily: 'raleway-bold'
                }}
            >
                Melhores lugares perto de você!
            </Text>
            <View style={{borderRadius: 20, overflow: "hidden", backgroundColor: 'white'  }}>
                <MapView
                    style={{
                        width: Dimensions.get("screen").width * 0.93,
                        height: Dimensions.get("screen").height * 0.23,
                    }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    region={mapRegion.latitude ? mapRegion : null} // Use null if mapRegion is empty
                >
                    {mapRegion.latitude && (
                        <Marker
                            title="You"
                            coordinate={mapRegion}
                        />
                    )}
                    {placeList.map((item,index)=>index<=5&&(
                        <PlaceMarker item={item}/>
                    ))}
                </MapView>
            </View>
        </View>
    );
}
