import React from "react";
import { Text, View, StyleSheet, } from 'react-native'
import ImageDetails from "../Components/ImageDetails";

const ImageScreen = () => {
    return <View>
        <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score="50" />
        <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score="100" />
        <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="70" />
    </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;