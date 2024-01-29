import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./app/navigation/RootStack";
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
