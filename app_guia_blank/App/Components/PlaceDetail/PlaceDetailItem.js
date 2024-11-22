import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import Colors from '../../Shared/Colors';
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import GoogleMapView from '../Home/GoogleMapView';
import Share from '../../Services/Share';

export default function PlaceDetailItem({ place, onDirectionClick }) {
  // Verificação da foto
  const photoReference = place?.photos?.[0]?.photo_reference;
  const imageUri = photoReference
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=AIzaSyC8TiHpintrDnne4odCeIw2SJVK57TGtv8`
    : null;

  return (
    <View>
      {/* Nome do local */}
      <Text style={{ fontSize: 26, fontFamily: "raleway-bold" }}>
        {place.name}
      </Text>

      {/* Avaliação */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>

      {/* Verificação e exibição da imagem */}
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: "100%",
            height: 160,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      ) : (
        // Exibe uma imagem de fallback se a foto não estiver disponível
        <Image
          source={require('./../../../assets/placeholder.jpg')}
          style={{
            width: "100%",
            height: 160,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      )}

      {/* Endereço do local */}
      <Text
        style={{ fontSize: 16, marginTop: 10, color: Colors.DARK_GRAY }}
        numberOfLines={2}
      >
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>

      {/* Horário de funcionamento */}
      {place?.opening_hours ? (
        <Text style={{ fontFamily: "raleway" }}>
          {place?.opening_hours?.open_now === true ? "(Aberto)" : "(Fechado)"}
        </Text>
      ) : null}

      {/* Botões de direção e compartilhamento */}
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          display: 'flex',
          gap: 10,
        }}
      >
        {/* Botão de direção */}
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 120,
            padding: 3,
            borderRadius: 20,
            justifyContent: 'center',
          }}
        >
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Direção</Text>
        </TouchableOpacity>

        {/* Botão de compartilhamento */}
        <TouchableOpacity
          onPress={() => Share.SharePlace(place)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: Colors.GRAY,
            width: 180,
            padding: 3,
            borderRadius: 20,
            justifyContent: 'center',
          }}
        >
          <FontAwesome name="share-alt" size={24} color="black" />
          <Text style={{ fontFamily: "raleway", fontSize: 16 }}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
