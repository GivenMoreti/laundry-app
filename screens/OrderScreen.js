import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

const OrderScreen = () => {
 
    return (
    <View style={styles.container}>
      <Text>My orders</Text>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:30,
    }
})