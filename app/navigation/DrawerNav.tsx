import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import FeedScreen from "../screens/Feed";
import ProfileScreen from "../screens/Profile";
import HomeScreen from "../screens/Home";

type DrawerParamList = {
  Home: undefined;
  Feed: undefined;
  Profile: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent = (props: any) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Reset Navigation"
        onPress={() => navigation.goBack()}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Feed" component={FeedScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
