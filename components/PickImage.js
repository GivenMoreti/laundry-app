import { StyleSheet, Text, TextInput, View, Image, Button, Platform } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import CustomButton from './CustomButton';
import AsyncStorage from "@react-native-async-storage/async-storage";



const PickImage = () => {

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
        
        {image ? (
            <Image source={{ uri: image }} style={styles.imagePick} />
            
          ) : (
            <CustomButton title={"upload image"} onPress={pickImage} style={styles.uploadImg} />
          )}
            
           


        </View>
    )
}

export default PickImage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },imagePick:{
        width:200,
        height:200,
        borderRadius:100,
    },uploadImg:{
        backgroundColor:"#fff"
    }
})