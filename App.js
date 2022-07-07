import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./components/About";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}> HomeScreen</Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate("Contact")}
      />
    </View>
  );
}
function ContactScreen({ navigation }) {
  return (
    <View>
      <Text style={{ fontSize: 40 }}> ContactScreen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
function AboutScreen({ navigation }) {
  return (
    <View>
      <About />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
