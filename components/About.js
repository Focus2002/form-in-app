import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const About = () => {
  return (
    <View>
      <Text style={{ fontSize: 50 }}>Form</Text>
      <TextInput placeholder="enter your name" style={Style1.Textinput1} />
      <TextInput placeholder="enter your email" style={Style1.Textinput1} />
      <TextInput placeholder="enter your password" style={Style1.Textinput1} />
      <Button title="Submit" />
    </View>
  );
};

export default About;

const Style1 = StyleSheet.create({
  Textinput1: {
    fontSize: 30,
    borderWidth: 4,
    borderColor: "Blue",
    margin: 20,
  },
});
