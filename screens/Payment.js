import {
    StyleSheet,
    Text,
    View,
    Alert,
    Pressable,
    FlatList,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Payment = () => {
    const paymentMethods = [
        {
            id: "0",
            method: "card",
        },
        {
            id: "1",
            method: "cash on delivery",
        },
        {
            id: "2",
            method: "EFT",
        },
    ];

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);

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
            <View style={styles.paymentContainer}>
                <View>
                    <Text>Pay for your laundry </Text>

                    <Text>Payment due :R {totalPrice}</Text>
                    <Text>Total items :{cartQuantity}</Text>
                </View>
                <View>
                    <Text>Choose payment method</Text>
                    <View>
                        <View style={styles.cardsIcons}>
                        <MaterialIcons name="payment" size={24} color="orangered" />

                        <Ionicons name="cash-outline" size={24} color="blue" />

                        <FontAwesome name="bank" size={24} color="green" />
                        </View>
                        <FlatList
                            style={styles.paymentMethods}

                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={paymentMethods}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <View style={styles.paymentMethod}>
                                    <Pressable key={item.id}>
                                        <Text style={styles.methodText}>{item.method}</Text>
                                    </Pressable>
                                </View>
                            )}
                        />


                    </View>
                </View>
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
                                    onPress: () => navigation.navigate("Cart"),
                                },
                            ],
                            {
                                cancelable: false,
                            }
                        )
                    }
                />
                <CustomButton title={"Pay"} />
            </View>
        </View>
    );
};

export default Payment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f5",
        padding: 20,
    },
    textContainer: {
        padding: 10,
        flex: 0.5,
        backgroundColor: "#E5E5E5",
        marginTop: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        flex: 0.5,
        marginBottom: 20,
    },
    paymentContainer: {
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        flex: 0.5,
        backgroundColor: "#E5E5E5",
    },
    paymentMethods: {
        flexDirection: "row",
        margin: 10,
       
    },cardsIcons:{
        flexDirection:"row",
        margin:10,
        padding:10,
        justifyContent:"space-between"
    }
});
