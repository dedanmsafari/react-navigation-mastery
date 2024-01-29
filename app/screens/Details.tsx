import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { DetailsPageProps } from "../navigation/RootStack";

const DetailsScreen = ({ navigation, route }: DetailsPageProps) => {
  const { itemId } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Details : " + itemId,
    });
  }, []);

  return (
    <View>
      <Text>It is :{itemId}</Text>
    </View>
  );
};

export default DetailsScreen;
