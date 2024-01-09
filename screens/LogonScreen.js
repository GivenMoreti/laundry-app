import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useKeepAwake } from "expo-keep-awake";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LogonScreen = () => {
    const navigation = useNavigation();
    const [isLogin, setIsLogin] = useState(true);
    // user input login form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    useKeepAwake(); //temporary

    const handleLogin = () => {
        // check if all the fields are populated
        // phone field shall be handled separately
        //OAuth required for authentication.

        if (
            email === "" ||
            !email.includes("@") ||
            !email.includes("@gmail.com") ||
            !email.includes(".com") ||
            password === ""
        ) {
            Alert.alert("All fields are mandatory!");
        } else {
            // take the user to home screen
            navigation.navigate("Home");
        }
    };

    const handleRegister = () => {
        // extra phone field required.
        if (
            email === "" ||
            password === "" ||
            phone === "" ||
            phone.length !== 10
        ) {
            Alert.alert("All fields are mandatory!");
        } else {
            //extract username from email.
            extractUsername(email);
            // take the user to home screen
            navigation.navigate("Home");
        }
    };
    // the function is sent to props for profile page application
    const extractUsername = (email) => {
        //email is from state.
        try {
            const atIndex = email.indexOf("@");
            const username = email.substring(0, atIndex); //substring is exclusive
            Alert.alert("Your username is " + username);
            return username;
        } catch (error) {
            console.error(error);
        }
    };
    const validateCredentials = (email, password, phone) => {
        if (phone.length !== 10 || phone.includes(" ")) {
            Alert.alert("Phone too short or too long");
        }
        if (password.length < 8) {
            //use regex 
            Alert.alert("Password too short");
        }

        if (
            email.substring(0, email.indexOf("@")).length < 8 ||
            !email.includes("@") ||
            !email.includes(".com") ||
            !email.includes(".co.za") ||
            !email.includes(".co")
        ) {
            Alert.alert("email too short or invalid");
            //@gmail
        }
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View>
                    <Text style={styles.headerText}>
                        {isLogin ? "Sign in" : "Sign up"}
                    </Text>
                </View>
                <View style={styles.keyBoardEntry}>
                    <View style={styles.keyboardContainer}>
                        <Entypo name="email" size={15} color="gray" />
                        <TextInput
                            keyboardType="email-address"
                            placeholder="email..."
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={styles.keyboardText}
                        />
                    </View>
                    <View style={styles.keyboardContainer}>
                        <Feather name="key" size={15} color="gray" />
                        <TextInput
                            style={styles.keyboardText}
                            placeholder="password..."
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    {!isLogin ? (
                        <View style={styles.keyboardContainer}>
                            <AntDesign name="phone" size={15} color="gray" />
                            <TextInput
                                style={styles.keyboardText}
                                keyboardType="phone-pad"
                                placeholder="phone..."
                                value={phone}
                                onChangeText={(text) => setPhone(text)}
                            />
                        </View>
                    ) : null}

                    <CustomButton
                        style={styles.customBtn}
                        title={isLogin ? "Login" : "Sign up"}
                        // depends on the selected page i.e. login / reg
                        onPress={isLogin ? handleLogin : handleRegister}
                    />
                    {/* dont have account sign up */}
                    {/* toggle register btn below*/}
                    <Pressable onPress={() => setIsLogin(!isLogin)}>
                        {isLogin ? (
                            <Text style={styles.accountText}>Dont have account? Sign up</Text>
                        ) : (
                            <Text style={styles.accountText}>
                                {" "}
                                Already have account? Sign in{" "}
                            </Text>
                        )}
                    </Pressable>
                    {/* after toggling  the below text appears*/}
                </View>
            </KeyboardAvoidingView>
        </View>
    );
};

export default LogonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e5e5e5",
    },
    headerText: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    keyBoardEntry: {
        // flexDirection: "row",
    },
    keyboardText: {
        padding: 5,
        textAlign: "left",
        gap: 10,
        margin: 10,
        width: 250,
    },
    accountText: {
        textAlign: "center",
        marginTop: 10,
    },
    keyboardContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
});
