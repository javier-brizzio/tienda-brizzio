import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
import Contact from "../../screens/contact";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />

    <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
);
