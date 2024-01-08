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

        if (!email || !password) {
            Alert.alert("All fields are mandatory!");
        } else {
            // take the user to home screen
            navigation.navigate("Home");
        }
    };

    const handleRegister = () => {
        // extra phone field required.
        if (email === "" || password === "" || phone === "") {
            Alert.alert("All fields are mandatory!");
        } else {
            //extract username from email.
            extractUsername();
            // take the user to home screen
            navigation.navigate("Home");
        }
    };
    // the function is sent to props for profile page application
    const extractUsername = (email) => {
        //email is from state.
        const atIndex = email.indexOf("@");
        const username = email.substring(0, atIndex); //substring is exclusive
        Alert.alert("Your username is " + username);
        return username;
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
                    <TextInput
                        keyboardType="email-address"
                        placeholder="email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style ={styles.keyboardText}
                    />

                    <TextInput
                     style ={styles.keyboardText}
                        keyboardType="visible-password"
                        placeholder="password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />

                    {!isLogin ? (
                        <TextInput
                        style ={styles.keyboardText}
                            keyboardType="phone-pad"
                            placeholder="phone"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                    ) : null}

                    <CustomButton
                        title={isLogin ? "Login" : "Sign up"}
                        // depends on the selected page i.e. login / reg
                        onPress={isLogin ? handleLogin : handleRegister}
                    />
                    {/* dont have account sign up */}
                    {/* toggle register btn below*/}
                    <Pressable onPress={() => setIsLogin(!isLogin)}>
                        {isLogin ? (
                            <Text>Dont have account? Sign up</Text>
                        ) : (
                            <Text> Already have account? Sign in </Text>
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
        justifyContent:"center",
        backgroundColor: "#e5e5e5",
    },
    headerText: {
        fontSize: 20,
        marginBottom:20,
        textAlign: "center",
    },
    keyBoardEntry: {
        flexDirection: "column",
    },keyboardText:{
        borderWidth:0.5,
        padding:10,
        borderRadius:5,
        margin:10,
    }
});
