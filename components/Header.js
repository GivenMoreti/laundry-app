import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  TextInput,

} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "location loading..."
  );
  const [locationEnabled, setLocationEnabled] = useState(false);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        "Location not enabled",
        "Please Enable location",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel pressed"),
            styles: "cancel",
          },
          {
            text: "Ok",
            onPress: () => console.log("Ok pressed"),
          },
        ],
        {
          cancelable: false,
        }
      );
    } else {
      setLocationEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app to use location service",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel pressed"),
            styles: "cancel",
          },
          {
            text: "Ok",
            onPress: () => console.log("Ok pressed"),
          },
        ],
        {
          cancelable: false,
        }
      );
    }

    //getting coords
    const { coords } = await Location.getCurrentPositionAsync();

    // console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      //   console.log(response);

      for (let item of response) {
        let address = ` ${item.name} ${item.city} ${item.postalCode} ${item.country} ${item.street} ${item.district} ${item.timezone}`;
        if (item !== null) {
          setDisplayCurrentAddress(address);
        }
      }
    }
  };

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
    //run everytime the homescreen component loads
    //run whenever there is a state update
  }, []); //if item is passed, its gonna run everytime it changes

  return (
    <View style={styles.homeMainContainer}>
      <View style={styles.homeContainer}>

        <View style={styles.locationContainer}>
          <Ionicons name="location" size={30} color="orangered" />

          <Text style={styles.locationText}> {displayCurrentAddress}</Text>
        </View>
        {/* profile image */}
        <Pressable>
          <Image
            contentFit="cover"
            transition={1000}
            style={styles.profileImg}
            source={{
              uri: "https://t3.ftcdn.net/jpg/05/52/15/68/360_F_552156839_hQTIBjd35zljkgSz65pDaUUSyKK53DtZ.jpg",
            }}
          />
        </Pressable>
      </View>
      {/* search bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="search" />
        <AntDesign name="search1" size={24} color="orangered" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  homeContainer: {
    flexDirection: "row",
    width: "100%",
    // height: 120,
    padding: 20,
    
  },
  homeMainContainer:{
    flex:1,
    backgroundColor: "#ecf0f1",
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginTop: 16,
    marginLeft: 4,
  },
  locationContainer: {
    marginTop: 30,
    width: "80%",
    flexDirection: "row",
  },
  locationText: {
    padding: 1,
    borderRadius: 2,
  },
  searchBar: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 0.8,
    justifyContent: "space-between",
    padding: 10,
    
    margin:20,
    marginTop:2,
  
    borderRadius: 7,
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
