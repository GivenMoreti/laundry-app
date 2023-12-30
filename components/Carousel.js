import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {

    const [images, setImages] = React.useState([
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?tree",
    ]);

    return (
        <View style={styles.imageSliderContainer}>
            <SliderBox
                images={images}
                sliderBoxHeight={400}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
            />
        </View>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    imageComponent: {
        borderRadius: 6,
        width: "94%",
    },
    imageSliderContainer: {
        margin: 0,
    }
})