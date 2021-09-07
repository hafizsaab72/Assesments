import React, {Component} from "react";
import {Text, View, StyleSheet, Button, TouchableOpacity, Touchable } from "react-native"
import { useState } from "react";
import { color, event } from "react-native-reanimated";
import { render } from "react-dom";
import { TextInput } from "react-native-gesture-handler";

 class Calculator extends React.Component {
        constructor (props){
            super();
            this.state = {
            num1 : '',
            num2 : '',
            res : ''
            }
        }

        handlenum1 = (event) => {
            this.setState({
                num1:event.target.value
            })
        }

        handlenum2 = (event) => {
            this.setState({
                num2:event.target.value
            })
        }

        add = (event) => {
            this.setState({ res : parseInt(this.state.num1) + parseInt(this.state.num2) })
        }
        sub = (event) => {
            this.setState({ res : parseInt(this.state.num1) - parseInt(this.state.num2) })
        }
        mul = (event) => {
            this.setState({ res : parseInt(this.state.num1) * parseInt(this.state.num2) })
        }
        div = (event) => {
            this.setState({ res : parseInt(this.state.num1) / parseInt(this.state.num2) })
        }

     render() {
        return (
       <View style={styles.form}>
       <View style={styles.num1}>
               <input type="text" value={this.state.num1} placeholder="First Number" style={{height:"100%", textAlign: 'center' ,backgroundColor:'red',color:'black',fontSize:30}} onChange={this.handlenum1}/>
       </View>
       <View style={styles.num2}>
       <input type="text" value={this.state.num2} placeholder="Second Number" style={{height:"100%", textAlign:'center',backgroundColor:'blue',color:'black',fontSize:30}} onChange={this.handlenum2} />
       </View>
       <View style={styles.first2}>
          <TouchableOpacity style={{ alignItems: "stretch", justifyContent: 'center', alignSelf: 'stretch' }} onPress={this.add} >
              <Text>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={this.sub}  >
              <Text>SUB</Text>
          </TouchableOpacity>
       </View>
       <View style={styles.last2}>
       <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={this.mul}  >
              <Text>MUL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={this.div} >
              <Text>DIV</Text>
          </TouchableOpacity>
       </View>
       <View style={styles.res}>
               {this.state.res}
       </View>
       </View>
        )
        }
    }
    
const styles = StyleSheet.create ({

    form: {
        flex: 1,
        justifyContent: 'center'
    },

    num1: {
        flex: 1
    },
    num2: {
        flex: 1
    },
    first2: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'green'
    },

    last2: {
        flex:2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'green'
    },

    add : {
        flex: 1
    },

    sub : {
        flex: 1,
        justifyContent: 'center'
    },

    mul : {
        flex: 1,
        justifyContent: 'center'
    },

    div : {
        flex: 1,
        justifyContent: 'center'
    },

    res: {
        backgroundColor: 'yellow',
        flex: 3,
        textAlign: 'centre',
        fontSize: 60,
        alignItems: 'center',
        paddingTop: 30
    }

})


export default Calculator;