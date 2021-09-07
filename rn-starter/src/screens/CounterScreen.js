import React from "react";
import {Text, View, StyleSheet, Button} from "react-native"
import { useState } from "react";


const CounterScreen  = () => {

    const [ counter, setCounter ] = useState(0);
   return <View>
       <Button
       style={styles.incr}
       title="Increment"
       onPress={() => {
           setCounter ( counter + 1 );
       }}
       />
       <Button
       title="Decrement"
       onPress={() => {
           setCounter ( counter - 1 );
       }}
       />
    <Text>Current count : {counter}</Text>
    </View>
}

const styles = StyleSheet.create({
    incr: {
        height: 50,
        width: 100
    }
});

export default CounterScreen;