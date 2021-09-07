import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Text style={styles.text}>Hello World!</Text>
    <Button 
    onPress={() => navigation.navigate('Components') }
    title="Go to Components Demo"
    />
    <Button
    onPress={() => navigation.navigate('List')}
    title="Go to List Demo"
    />
    <Button
    onPress={() => navigation.navigate('Image')}
    title="Go to Image Demo"
    />
    <Button
    onPress={() => navigation.navigate('Counter')}
    title="Go to Counter Demo"
    />
    <Button
    onPress={() => navigation.navigate('Calc')}
    title="Go to Calculator"
    />
    <Button
    onPress={() => navigation.navigate('Square')}
    title="Go to Square Demo"
    />
    </View>
  );
  };

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  }
});

export default HomeScreen;
