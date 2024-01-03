import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const GoToCart = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.totalCost}>R {props.price}</Text>
      <Text style={styles.cartQuantity}>{props.totalItems} items</Text>
      <Pressable
      style={styles.goToCartPressible}
        onPress={() => {
          navigation.navigate("Cart");
        }}
      >
        <Text style={styles.goToCart}>Go to cart</Text>
      </Pressable>
    </View>
  );
};

export default GoToCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bdc3c7",
    width: "90%",
    flexDirection: "row",
    padding: 12,
    height: 40,
    borderRadius: 5,
    marginBottom:0,
  },
  goToCart: {
    marginLeft: 30,
    color:"#fff",
  },
  cartQuantity: {
    marginLeft: 20,
  }
});
