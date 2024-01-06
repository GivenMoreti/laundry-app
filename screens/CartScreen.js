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
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import GoToCart from "../components/GoToCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useKeepAwake } from "expo-keep-awake";

const CartScreen = () => {
  useKeepAwake();
  const navigation = useNavigation();
  const [userAddress,setUserAdress] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); //date
  const [collection, setCollection] = useState(""); //time
  const [duration, setDuration] = useState(""); //duration

  const validateAddressFields = () => {
    if (!selectedDate || !collection || !duration ||!userAddress) {
      Alert.alert("Some fields empty", "All fields mandatory", [
        {
          text: "cancel",
          onPress: () => console.log("Cancelled"),
          style: "cancel",
        },
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed"),
        },
        { cancelable: false },
      ]);
    }
  };
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
      timeSlot: "9h00",
    },
    {
      id: "1",
      timeSlot: "10h00",
    },
    {
      id: "2",
      timeSlot: "11h00",
    },
    {
      id: "3",
      timeSlot: "12h00",
    },
    {
      id: "4",
      timeSlot: "13h00",
    },
    {
      id: "5",
      timeSlot: "14h00",
    },
    {
      id: "6",
      timeSlot: "15h00",
    },
  ];

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  console.log("cart arr : ", cart);

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
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>Enter Address</Text>
        <TextInput
          value={userAddress}
          style={styles.textInputField}
          placeholder="enter delivery address..."
        />
      </View>
      <View style={styles.collectionDate}>
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
      <View style={styles.duration}>
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
                    backgroundColor: "#bdc3c7",
                    borderRadius: 10,
                    height: 40,
                    padding: 10,
                  }
                  : {
                    backgroundColor: "#ececec",
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
      <View style={styles.collectionTime}>
        <Text style={styles.textHeader}>Collection time</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.timeContainer}
          data={collectionTime}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setCollection(item.timeSlot)}
              key={item.id.toString()}
              style={
                collection.includes(item.timeSlot)
                  ? {
                    backgroundColor: "#bdc3c7",
                    borderRadius: 10,
                    height: 40,
                    padding: 10,
                  }
                  : {
                    margin: 10,
                    backgroundColor: "#ececec",
                    height: 38,
                    padding: 5,
                    borderRadius: 10,
                  }
              }
              onLongPress={(item) => id.id === !item.timeSlot}
            >
              <Text>{item.timeSlot}</Text>

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
            if (selectedDate && collection && duration && userAddress) {
              navigation.navigate("Payment");
            } else {
              validateAddressFields();
            }
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
    flex: 4,
    backgroundColor: "#ecf0f1",
  },
  headerContainer: {
    flex: 1,
  },
  collectionDate: {
    flex: 1,
  },
  collectionTime: {
    flex: 1,
  },
  duration: {
    flex: 1,
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
