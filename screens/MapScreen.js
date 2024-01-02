import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RideOptionsCard } from "../components/RideOptionsCard";
import { NavigateCard } from "../components/NavigateCard";

export const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            options={{ headerShown: false }}
            component={NavigateCard}
          ></Stack.Screen>
          <Stack.Screen
            name="RideOptionsCard"
            options={{ headerShown: false }}
            component={RideOptionsCard}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  );
};
