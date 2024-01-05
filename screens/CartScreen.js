import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Theme from "./Theme/Theme";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import GoToCart from "../components/GoToCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";




const CartScreen = () => {

  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState(""); //date
  const [collection, setCollection] = useState(""); //time
  const [duration, setDuration] = useState(""); //duration

  const durationTime = [
    {
      id: "0",
      name: "1-2 days",
    },
    {
      id: "1",
      name: "2-3 days",
    },
    {
      id: "2",
      name: "3-4 days",
    },
    {
      id: "3",
      name: "4-5 days",
    },
  ];

  const collectionTime = [
    {
      id: "0",
      time: "9h00",
    },
    {
      id: "1",
      time: "10h00",
    },
    {
      id: "2",
      time: "11h00",
    },
    {
      id: "3",
      time: "12h00",
    },
    {
      id: "4",
      time: "13h00",
    },
    {
      id: "5",
      time: "14h00",
    },
    {
      id: "6",
      time: "15h00",
    },
  ];

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  console.log("cart arr ", cart);

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
      <View>
        <Text style={styles.textHeader}>Enter Address</Text>
        <TextInput
          style={styles.textInputField}
          placeholder="enter delivery address..."
        />
      </View>
      <View>
        <Text style={styles.textHeader}>Collection date</Text>
        <View>
          <HorizontalDatepicker
            mode="gregorian"
            startDate={new Date("2024-01-20")}
            endDate={new Date("2024-01-31")}
            initialSelectedDate={new Date("2020-08-22")}
            onSelectedDateChange={(date) => setSelectedDate(date)}
            selectedItemWidth={170}
            unselectedItemWidth={38}
            itemHeight={38}
            itemRadius={10}
            selectedItemTextStyle={styles.selectedItemTextStyle}
            unselectedItemTextStyle={styles.selectedItemTextStyle}
            selectedItemBackgroundColor="#000000"
            unselectedItemBackgroundColor="#ecf0f1"
            flatListContainerStyle={styles.flatListContainerStyle}
          />
        </View>
      </View>
      {/* duration */}
      <View>
        <Text style={styles.textHeader}>Duration</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.durationContainer}
          data={durationTime}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              key={item.id}
              style={
                duration.includes(item.name)
                  ? {
                    backgroundColor: "#000000",
                  }
                  : {
                    backgroundColor: "#ececec",
                    color: "#fff",
                    margin: 10,
                    height: 38,
                    padding: 5,
                    borderRadius: 10,
                  }
              }
              onPress={() => setDuration(item.name)}
            >
              <Text>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
      {/* time */}
      <View>
        <Text style={styles.textHeader}>Collection time</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.timeContainer}
          data={collectionTime}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setCollection(item.time)}
              key={item.id}
              style={
                collection.includes(item.time)
                  ? {
                    backgroundColor: "#000000",
                    color: "#fff",
                    borderRadius: 10,
                  }
                  : {
                    margin: 10,
                    backgroundColor: "#ececec",
                    height: 38,
                    padding: 5,
                    borderRadius: 10,
                  }
              }
            >
              <Text>{item.name}</Text>
            </Pressable>
          )}
        />
        {/* go to payment */}

        <GoToCart
          style={styles.cart}
          price={totalPrice}
          totalItems={cartQuantity}
          title={"go to payment"}
          onPress={() => {
            navigation.navigate("Payment");
          }}
        />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  textInputField: {
    padding: 10,
    borderWidth: 0.7,
    height: 100,
    borderRadius: 10,
  },
  textHeader: {
    padding: 10,
  },
  time: {
    backgroundColor: "black",
  },
  timeSlot: {
    margin: 10,
    backgroundColor: "#ececec",
    height: 38,
    padding: 5,
    borderRadius: 10,
  },
  cart: {
    marginTop: 1000,
  },
});
