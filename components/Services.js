import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: "data:image/jpeg;base64,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",
      title: "laundry",
    },
    {
      id: 2,
      image: "https://clipart-library.com/images/BcaKzbzRi.jpg",
      title: "Washing",
    },
    {
      id: 3,
      image: "data:image/jpeg;base64,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",
      title: "Drying",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2yTZcfl1nvg5dAXb1MCLOaEUEHJ8ltRKH9g&usqp=CAU",
      title: "ironing",
    },
  ];

  return (
    <ScrollView >
      <View style={styles.listContainer}>

        <View>
          <Text>Our Services</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}

          data={servicesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable key={item.id}>
              <Image style={styles.serviceImg} source={{ uri: item.image }} />
              <Text style={styles.serviceText}>{item.title}</Text>
            </Pressable>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    margin: 10,
  },
  serviceImg: {
    width: 200,
    height: 200,
    margin: 5,
    borderRadius:5,
  }, serviceText: {
    marginTop: 10,
    fontSize: 20,

    textAlign: "center"
  }
});
