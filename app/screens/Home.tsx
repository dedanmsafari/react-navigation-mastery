import { View, Text, Button } from "react-native";
import React from "react";
import { HomePageProps } from "../navigation/RootStack";

const HomeScreen = ({ navigation }: HomePageProps) => {
  return (
    <View>
      <Button title="Feed" onPress={() => navigation.navigate("Feed")} />
    </View>
  );
};

export default HomeScreen;
