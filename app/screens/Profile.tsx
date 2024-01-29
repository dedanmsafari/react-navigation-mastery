import { View, Button } from "react-native";
import React from "react";
import { ProfilePageProps } from "../navigation/RootStack";

const ProfileScreen = ({ navigation }: ProfilePageProps) => {
  return (
    <View>
      <Button
        title="Details"
        onPress={() => navigation.navigate("Details", { itemId: 5 })}
      />
    </View>
  );
};

export default ProfileScreen;
