import { View, Text, Button } from "react-native";
import React from "react";
import { FeedPageProps } from "../navigation/RootStack";

const FeedScreen = ({ navigation }: FeedPageProps) => {
  return (
    <View>
      <Button title="Profile" onPress={() => navigation.push("Profile")} />
    </View>
  );
};

export default FeedScreen;
