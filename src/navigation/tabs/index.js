import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Shop from "../stacks";
import Cart from "../../screens/Cart";
import { TouchableOpacity, Text } from "react-native-web";
import { logout } from "../../../app/api";
import { COLORS } from "../../../constants/colors";

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      haederStyle: {
        backgroudColor: COLORS.primary,
      },
      //headerShown: false,
      tabBarShowLabel: true,
      tabBarStyles: COLORS.secondary,
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerRight: (props) => (
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ),
    }}
  >
    <Tab.Screen
      name="Shop"
      component={Shop}
      options={{
        title: "Shop",
        //headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: () => <Ionicons name="md-home" size={30} color="#070606" />,
      }}
    />
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={{
        title: "Cart",
        tabBarIcon: () => <Ionicons name="md-cart" size={30} color="#070606" />,
      }}
    />
  </Tab.Navigator>
);
