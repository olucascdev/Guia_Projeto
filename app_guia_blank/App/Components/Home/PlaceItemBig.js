import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import HorizontalLine from "./HorizontalLine";

export default function PlaceItemBig({ place }) {
  // Verificação da foto
  const imageUri = place?.photos?.[0]?.photo_reference
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place?.photos[0]?.photo_reference}&key=AIzaSyDPOgAcCAav-ky6eEZVgrSk_c8t0ORGvco`
    : null;

  return (
    <View style={{ marginTop: 20 }}>
      {/* Exibe a foto somente se existir uma URL válida */}
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: "100%", height: 130, borderRadius: 15 }}
        />
      ) : (
        // Fallback para imagem se não houver foto
        <Image
          source={require('./../../../assets/placeholder.jpg')} // Caminho da imagem de fallback
          style={{ width: "100%", height: 130, borderRadius: 15 }}
        />
      )}
      
      {/* Nome do local */}
      <Text
        numberOfLines={2}
        style={{ fontSize: 18, marginBottom: 2, fontFamily: "raleway-bold" }}
      >
        {place.name}
      </Text>

      {/* Endereço ou proximidade do local */}
      <Text
        style={{ fontSize: 16, marginBottom: 5, color: Colors.DARK_GRAY }}
        numberOfLines={2}
      >
        {place.vicinity}
      </Text>

      {/* Avaliação */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name="star" size={20} color={Colors.YELLOW} />
        <Text>{place.rating}</Text>
      </View>

      <HorizontalLine />
    </View>
  );
}
