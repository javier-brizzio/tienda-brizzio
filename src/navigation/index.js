import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./tabs";
import AuthNavigator from "./stacks/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../app/firebase";

export default () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });
  });
  return (
    <NavigationContainer>
      {isLogged ? <ShopNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
