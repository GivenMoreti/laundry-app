import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen";
import CartScreen from "../CartScreen";
import AddLaundry from "../AddLaundry";
import UserProfile from "../UserProfile";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import InboxScreen from "../InboxScreen";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const NavTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ tabBarActiveBackgroundColor: "#ecf0f1", tabBarActiveTintColor: "red" }}
            >
                <Tab.Screen
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
                {/* <Tab.Screen
                    name="Inbox"
                    component={InboxScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: "",
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="chatbox-outline" size={24} color="#7f8c8d" />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Add"
                    component={AddLaundry}
                    options={{
                        headerShown: false,
                        tabBarLabel: "",
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="pluscircleo" size={24} color="#7f8c8d" />
                        ),
                    }}
                /> */}
                <Tab.Screen
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
                {/* <Tab.Screen
                    name="Profile"
                    component={UserProfile}
                    options={{
                        headerShown: false,
                        tabBarLabel: "",
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name="profile" size={24} color="#7f8c8d" />
                        ),
                    }}
                /> */}

            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default NavTabs;

const styles = StyleSheet.create({});
