import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import FeedScreen from "../screens/Feed";
import DetailsScreen from "../screens/Details";
import ProfileScreen from "../screens/Profile";

type StackParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
  Details: { itemId: number };
};

const Stack = createNativeStackNavigator<StackParamList>();

export type HomePageProps = NativeStackScreenProps<StackParamList, "Home">;
export type FeedPageProps = NativeStackScreenProps<StackParamList, "Feed">;
export type ProfilePageProps = NativeStackScreenProps<
  StackParamList,
  "Profile"
>;
export type DetailsPageProps = NativeStackScreenProps<
  StackParamList,
  "Details"
>;

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1c357f",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "HomePage" }}
      />
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
