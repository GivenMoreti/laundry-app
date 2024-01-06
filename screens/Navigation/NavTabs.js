import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen";
import CartScreen from "../CartScreen";
import UserProfile from "../UserProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Payment from "../Payment";

const Stack = createNativeStackNavigator();

const NavTabs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#ecf0f1",
          tabBarActiveTintColor: "red",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color: size }) => (
              <Feather name="home" size={24} color="#7f8c8d" />
            ),
          }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color: size }) => (
              <Feather name="home" size={24} color="#7f8c8d" />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox-outline" size={24} color="#7f8c8d" />
            ),
          }}
        />

        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-basket" size={24} color="#7f8c8d" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavTabs;
