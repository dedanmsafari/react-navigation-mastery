import { View, Text } from "react-native";
import React from "react";
import { DetailsPageProps } from "../navigation/RootStack";

const DetailsScreen = ({ navigation, route }: DetailsPageProps) => {
  const { itemId } = route.params;
  return (
    <View>
      <Text>It is :{itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
