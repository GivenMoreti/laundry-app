import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Payment = () => {
    return (
        <View style={styles.container}>
            <Text>Payment</Text>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#bdc3c7",
        padding: 30,
    }
})