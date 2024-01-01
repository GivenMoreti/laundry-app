import {
    StyleSheet,
    Text,
    View,
    Alert,
    Pressable,
    TextInput,
    ScrollView,
} from "react-native";
import React, { useEffect } from "react";
// import Carousel from "../components/Carousel";
import Services from "../components/Services";
import MyImageList from "../components/MyImageList";
import Products from "../components/Products";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { getProducts } from "../Redux/Reducers/ProductReducer";
import Footer from "../components/Footer";

const HomeScreen = () => {


   



    return (

        <View style={styles.container}>

            {/* removed carousel */}
            {/* <Carousel /> */}
            {/* <MyImageList /> */}
            <View style={styles.headerCont}>
                <Header />
            </View>

            {/* services */}
            <View style={styles.serviceCont}><Services /></View>

            {/* render products */}
            <View style={styles.productCont}><Products /></View>
            <Footer />

        </View>

    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, headerCont: {
        flex: 0.7,
    }, productCont: {
        flex: 1,
    }
});
