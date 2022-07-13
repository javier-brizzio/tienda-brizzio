import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../../screens/Cart";
import { COLORS } from "../../../constants/colors";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.accent,
      headerTitleStyle: { fontWeight: "bold" },
    }}
  >
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
);
