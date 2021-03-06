import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Breads from "../../screens/Breads";
import Details from "../../screens/Details";
import { COLORS } from "../../../constants/colors";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.accent,
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Breads" component={Breads} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);
