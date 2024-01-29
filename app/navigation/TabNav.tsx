import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedScreen from "../screens/Feed";
import RootStack from "./RootStack";
import { Feather, Entypo } from "@expo/vector-icons";

type TabParamList = {
  HomeTab: undefined;
  Feed: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={RootStack}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="news" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;
