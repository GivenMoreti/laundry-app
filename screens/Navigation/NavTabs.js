import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen";
import CartScreen from "../CartScreen";
import UserProfile from "../UserProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Payment from "../Payment";
import LogonScreen from "../LogonScreen";




const Stack = createNativeStackNavigator();

const NavTabs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       
      >
        <Stack.Screen
          name="Login"
          component={LogonScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavTabs;
