import { View, Text, Image } from 'react-native';
import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import Colors from '../../Shared/Colors';

export default function BusinessItem({ place }) {
  // Verificação se place e place.photos[0] existem antes de tentar usá-los
  const photoReference = place?.photos?.[0]?.photo_reference;
  const imageUri = photoReference
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=AIzaSyDPOgAcCAav-ky6eEZVgrSk_c8t0ORGvco`
    : null;

  return (
    <View style={{
      width: 140,
      backgroundColor: Colors.WHITE,
      borderRadius: 10,
      padding: 10,
      margin: 5,
      elevation: 0.4
    }}>
      {/* Verificação condicional para imagem */}
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 120, height: 80, borderRadius: 10 }}
        />
      ) : (
        <Image
          source={require('./../../../assets/placeholder.jpg')}
          style={{ width: 130, height: 100, borderRadius: 9 }}
        />
      )}

      {/* Verificação para o nome do local */}
      <Text
        numberOfLines={2}
        style={{ fontFamily: 'raleway-bold', fontSize: 16, marginTop: 5 }}
      >
        {place?.name || 'Nome não disponível'}
      </Text>

      {/* Verificação para a localização do lugar */}
      <Text
        numberOfLines={2}
        style={{ fontFamily: 'raleway', fontSize: 13, marginTop: 5, color: Colors.DARK_GRAY }}
      >
        {place?.vicinity || place?.formatted_address || 'Endereço não disponível'}
      </Text>

      {/* Verificação para a classificação */}
      {place?.rating != null && (
        <View style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          marginTop: 5,
          flexDirection: "row",
          marginBottom: -5
        }}>
          <AntDesign name="star" size={20} color={Colors.YELLOW} />
          <Text>{place.rating}</Text>
        </View>
      )}
    </View>
  );
}
