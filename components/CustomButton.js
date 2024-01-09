import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";

const CustomButton = (props) => {
  return (
    <View style={StyleSheet.container}>
      <Pressable onPress={props.onPress} style={styles.genButton}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  container: {
    
  },
  genButton: {
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    backgroundColor:"orangered",
    borderWidth:0.5,
  },
  buttonText: {
    textAlign: "center",
    marginTop: 15,
    color: "#fff",
  },
});
