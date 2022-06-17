import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button onPress={() => goToPage("Settings")} title="Go to Settings" />
    </SafeAreaView>
  );
}
