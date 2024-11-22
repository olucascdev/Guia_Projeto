import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Shared/Colors";
import HorizontalLine from "./HorizontalLine";

export default function PlaceItem({ place }) {
  // Verifica se a foto existe e cria a URL ou define como null se não houver
  const imageUri = place?.photos?.[0]?.photo_reference
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place?.photos[0]?.photo_reference}&key=AIzaSyC8TiHpintrDnne4odCeIw2SJVK57TGtv8`
    : null;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 20,
      }}
    >
      {/* Exibe a imagem se existir, caso contrário, exibe a imagem de fallback */}
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      ) : (
        <Image
          source={require("./../../../assets/placeholder.jpg")} // Caminho da imagem de fallback
          style={{ width: 110, height: 110, borderRadius: 15 }}
        />
      )}

      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            marginBottom: 5,
            fontFamily: "raleway-bold",
          }}
        >
          {place.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 5,
            color: Colors.DARK_GRAY,
          }}
          numberOfLines={2}
        >
          {place.vicinity}
        </Text>
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
      </View>

      <HorizontalLine />
    </View>
  );
}
