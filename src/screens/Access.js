import { signInAnonymously } from "firebase/auth";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { StyleSheet, TouchableOpacity } from "react-native-web";
import { signUp } from "../../app/api";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <View>
      <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} />
      <TextInput
        style={styles.input}
        onChangeText={(pass) => setPassword(pass)}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={async () => {
          await signIn(email, password);
        }}
      >
        <Text style={styles.white}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: "#000",
    pqdding: 10,
    margin: 10,
    borderRadius: 5,
  },
  white: {
    color: "white",
  },
});
export default Register;
