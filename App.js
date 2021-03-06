import { StyleSheet, Text, View } from "react-native";
import Saludar from "./src/components/Saludar";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/Navigation/NavigationStack";
import NavigationTab from "./src/Navigation/NavigationTab";
import NavigationDrawer from "./src/Navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
