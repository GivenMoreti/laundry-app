import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'

const CustomButton = (props) => {
    return (
        <View style={StyleSheet.container}>
            <Pressable onPress={props.onPress}
                style={styles.genButton}
            >
                <Text style={styles.buttonText}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export default CustomButton
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bdc3c7",
        padding: 40,
    }, genButton: {
        borderRadius: 10,
        height: 50,
        backgroundColor: "#16a085",
        marginBottom:10,
    }, buttonText: {
        textAlign: "center",
        marginTop: 15,
        color: "#fff",
    }
})