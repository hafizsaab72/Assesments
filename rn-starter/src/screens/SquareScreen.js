import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const TEMP = 10;

const SquareScreen = () => {

    const [red,setRed]= useState(0);
    const [green,setGreen]= useState(0);
    const [blue,setBlue]= useState(0);

    return (
        <View>
            <ColorCounter
            color= "red"
            onIncrease={() => setRed(red + TEMP) }
            onDecrease={() => setRed(red - TEMP) }
            />
            <ColorCounter
            color="green"
            onIncrease={() => setGreen(green + TEMP) }
            onDecrease={() => setGreen(green - TEMP)}
            />
            <ColorCounter
            color="blue"
            onIncrease={() => setBlue(blue + TEMP) }
            onDecrease={() => setBlue(blue - TEMP)}
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }}>

            </View>
        </View>
    )

};

const styles= StyleSheet.create({});

export default SquareScreen;