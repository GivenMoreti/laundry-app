import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <View>
            <Text style={styles.footerContainer}>Made with ❤️</Text>
            <Text style={styles.footerContainer}> {year} © Given Chie </Text>
        </View>
    );
};

export default Footer;
const styles = StyleSheet.create({
    footerContainer: {
        opacity: 0.1,
        textAlign: "center",
        position: "relative",
        marginBottom: 5,
    },
});
