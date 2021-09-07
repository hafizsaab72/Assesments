import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native'

const ImageDetails = (props) => {
    return <View>
        <Image style={styles.image} source={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>Image score - {props.score}</Text>
    </View>
}

const styles = StyleSheet.create({

    image: {
        height:150,
        width: 150,
        margin:10
    }
});

export default ImageDetails;