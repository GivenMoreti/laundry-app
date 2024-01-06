import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../components/CustomButton";
import PickImage from "../components/PickImage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useKeepAwake } from 'expo-keep-awake';

const UserProfile = () => {
  useKeepAwake();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [nickname, setNickName] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("username");
        const storedImage = await AsyncStorage.getItem("image");

        if (storedName) {
          setName(storedName);
        }

        if (storedImage) {
          setImage(storedImage);
        }

      } catch (error) {
        console.error("error loading stored name", error);
      }
    };
    loadProfileData();
  }, []);


  return (
    <View style={styles.container}>
      {/* pick image component */}


      <PickImage />

      {/* pick image component end */}
      <Text>Name: {name}</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />
      <Text>prefered name: {nickname}</Text>
      <TextInput
        style={styles.input}
        value={nickname}
        onChangeText={(text) => setNickName(text)}
        placeholder="Enter your nickname"
      />
      <Text style={styles.profileText}>Bio: {bio}</Text>
      <TextInput
        style={styles.input}
        value={bio}
        onChangeText={(text) => setBio(text)}
        placeholder="Enter your bio"
      />

      <CustomButton title={"Done"} onPress={() => console.log("saved")} />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  bioEdit: {
    borderRadius: 5,
    borderWidth: 0.5,
  },
});
