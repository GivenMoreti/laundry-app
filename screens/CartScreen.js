import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import Theme from './Theme/Theme';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Enter Address</Text>
      <TextInput style={styles.textInputField}
        placeholder='enter delivery address...'
      />
      <Text>pick date</Text>
     
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    backgroundColor: "#ecf0f1",

  }, textInputField: {
    padding: 10,
    borderWidth: 0.7,
    height: 100,
    borderRadius: 10,
  }
})