import {
    StyleSheet,
    Text,
    View,
    Alert,
    Pressable,
    TextInput,
    ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import Carousel from "../components/Carousel";
import Services from "../components/Services";
import MyImageList from "../components/MyImageList";
import Products from "../components/Products";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const HomeScreen = () => {

    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    
    return (
        <ScrollView vertical showsVerticalScrollIndicator>
            <View style={styles.container}>
                <Header />
                {/* removed carousel */}
                {/* <Carousel /> */}
                <MyImageList />

                {/* services */}
                <Services />
                {/* render products */}
                <Products />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
