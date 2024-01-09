import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import GoToCart from "../components/GoToCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useKeepAwake } from "expo-keep-awake";
import CustomButton from "../components/CustomButton";
import { AntDesign } from "@expo/vector-icons";
import {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} from "../Redux/Reducers/CartReducer";

import {
  decrementProductQuantity,
  incrementProductQuantity,
} from "../Redux/Reducers/ProductReducer";

const Payment = ({ item }) => {
  const navigation = useNavigation();
  const paymentMethods = [
    {
      id: "0",
      method: "card",
      img: "",
    },
    {
      id: "1",
      method: "cash on delivery",
      img: "",
    },
    {
      id: "2",
      method: "EFT",
      img: "",
    },
  ];

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  console.log("PAYMENT : ", cart);

  // to be added to GoToCart.js bottom pane
  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  //total cart quantity.
  const cartQuantity = cart
    .map((item) => item.quantity)
    .reduce((curr, prev) => curr + prev, 0);

  return (
    <View style={styles.container}>
      {/* cart items */}
      <View style={styles.itemInCartContainer}>
        <Text>Cart content</Text>
        {cart.map((item) => (
          <View style={styles.itemInCart}>
            <Text style={styles.item}>{item.title}</Text>
            <Text style={styles.item}>R{item.price}</Text>
            {/* minus */}
            <AntDesign
              name="minus"
              size={24}
              color="skyblue"
              onPress={() => {
                dispatch(decrementProductQuantity(item));
                dispatch(decrementQuantity(item));
              }}
            />
            <Text>{item.quantity}</Text>
            <AntDesign
              name="plus"
              size={24}
              color="orangered"
              onPress={() => {
                dispatch(incrementProductQuantity(item));
                dispatch(incrementQuantity(item));
              }}
            />
          </View>
        ))}
      </View>
      <View style={styles.billingContainer}>
        <View style={styles.billingItem}>
          <Text style={styles.billingItemTextHeader}>Billing Information </Text>
          <Text style={styles.billingItemText}>
            Payment due :R {totalPrice}
          </Text>
          <Text style={styles.billingItemText}>
            Total items :{cartQuantity}
          </Text>
        </View>
        <View style={styles.paymentMethods}>
          <Text>Choose payment method</Text>

          <FlatList
            style={styles.methodItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={paymentMethods}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable
                key={item.id}
                onPress={() => Alert.alert("You chose " + item.method + item.id)}
              >
                <Text style={styles.methodText}>{item.method}</Text>
              </Pressable>
            )}
          />
        </View>
        {/* <View style={styles.distance}>
          <Text>Distance</Text>
        </View> */}
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title={"Cancel"}
          onPress={() =>
            Alert.alert(
              "Are you sure you want to cancel?",
              "cancelling will take you back to cart",
              [
                {
                  text: "Cancel",
                  // user proceeds
                  onPress: () => console.log("cancelled"),
                  styles: "cancel",
                },
                {
                  text: "Ok",
                  onPress: () => navigation.goBack("Cart"),
                },
              ],
              {
                cancelable: false,
              }
            )
          }
        />
        <CustomButton
          title={"Pay"}
          onPress={() => navigation.navigate("Orders")}
        />
        <Text
          style={styles.goToCartText}
          onPress={() => navigation.replace("Home")}
        >
          Go back home
        </Text>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    paddingTop: 40,
    padding: 10,
  },
  itemInCart: {
    flexDirection: "row",
    padding: 10,
    margin: 5,
    borderWidth: 0.1,
    borderRadius: 5,
    justifyContent: "space-around",
  },
  itemInCartContainer: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ecf0f5",
    marginBottom: 10,
  },
  billingContainer: {
    marginBottom: 10,
    flex: 1,
    padding: 10,
    backgroundColor: "#ecf0f5",
    borderRadius: 10,
  },
  billingItem: {
    padding: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  billingItemText: {
    margin: 10,
  },
  goToCartText: {
    marginTop: 10,
    textAlign: "center",
    color: "gray",
  },
  paymentMethods: {
    padding: 10,
  },
  methodItem: {
    margin: 10,
  },
  methodText: {
    margin: 10,
    borderWidth: 0.2,

    borderRadius: 2,
    padding: 3,
  },
});
