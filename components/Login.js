import React from "react";
import { View, Text } from "react-native";

const Login = (props) => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: "white",
          color: "orange",
          borderRadius: 2,
          top: 10,
          left: 10,
          width: 400,
          height: 50,
          fontSize: 35,
          textAlign: "center",
        }}
      >
        This is login page {props.dat}{" "}
      </Text>
    </View>
  );
};
export default Login;
