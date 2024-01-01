import { StyleSheet, Text, View, Image, FlatList, Pressable, ScrollView } from 'react-native'
import React from 'react'

const MyImageList = () => {

    const imagesData = [
        {
            id: 1,
            image: "https://source.unsplash.com/1024x768/?puppy",

        },
        {
            id: 2,
            image: "https://source.unsplash.com/1024x768/?nature",

        },
        {
            id: 3,
            image: "https://source.unsplash.com/1024x768/?water",

        },
        {
            id: 4,
            image: "https://source.unsplash.com/1024x768/?tree",

        },
    ];
    return (
       
            <View style={styles.container}>
                <View>
                    <Text style={styles.headingBanner}>What we have done</Text>
                </View>
                <FlatList
                    data={imagesData}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Pressable key={item.id}>
                            <Image style={styles.serviceImg} source={{ uri: item.image }} />

                        </Pressable>
                    )}
                />
            </View>
     
    )
}

export default MyImageList

const styles = StyleSheet.create({
    serviceImg: {
        width: 100,
        height: 100,
        margin: 5,
        borderRadius: 5
    }, container: {
        flex: 1,
        margin: 5,
    }, headingBanner: {
        textAlign: "center",
        fontWeight: "900",
    }
})