import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const GoToCart = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.totalCost}>R {props.price}</Text>
            <Text style={styles.cartQuantity}>{props.totalItems} items</Text>
            <Pressable onPress={() => navigation.navigate('Cart')}
                >
                <Text style={styles.goToCart}>Go to cart</Text>
            </Pressable>
        </View>
    )
}

export default GoToCart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#bdc3c7",
        width: "100%",
        flexDirection: "row",
        padding: 10,
    },goToCart:{
        marginLeft:200,
    },cartQuantity:{
        marginLeft:20,
    }
})