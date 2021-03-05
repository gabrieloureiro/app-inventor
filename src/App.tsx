import "react-native-gesture-handler";
import React from "react";
import Routes from "./routes";
import { StatusBar, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#16161B" }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: "#16161B" }}>
          <Routes />
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
