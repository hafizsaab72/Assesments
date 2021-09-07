import React from "react";
import { Text, View, StyleSheet } from 'react-native'

const ComponentsScreen = () => {
    const king = 'Hafiz Saab';
    return (
        <View>
            <Text style={styles.firststyle}>GETTING started with react native!</Text >
            <Text style={styles.secondstyle} >My name is {king}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    firststyle: {
        fontSize: 50
    },
    secondstyle: {
        fontSize: 25
    }
})

export default ComponentsScreen;