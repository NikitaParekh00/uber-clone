import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";

export const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};
