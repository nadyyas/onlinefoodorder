import React, { useState } from 'react';
import {View, Text, Image, TextInput,StyleSheet,Button, Alert} from 'react-native';
import Dialog from 'react-native-dialog';

export default class ResetPasswordScreen extends React.Component{
  render(){
    const pesan = () =>
    Alert.alert (
      "Reset Password",
      "Your password has been changed successfully",
      [
        {
          text: "Start",
          onPress: () => Alert.alert("Cancel Pressed")
        },
      ]

    )
    return(
      <View style={{
        backgroundColor: '#018EF7',
        flex: 1}}>
        <View style={{
          alignItems :'center',
          justifyContent :'center'}}>
            <Image style={{width : 140, height: 140, borderRadius: 100, margin: 20}} source={require('../images/logo.png')}/>
        </View>
        <View
        style={{
          backgroundColor:'white',
          flex: 1,
          borderRadius: 10}}>
            <View style ={{
              alignItems:'center',
              flexDirection : 'column'
            }}>
              <Text style ={{
                fontFamily:'Roboto',
                fontWeight:'bold',
                fontSize: 20,
                marginTop:20
              }}>Set Up Your Password
              </Text>
            </View>
            <View>
            <View style={styles.TextInput}>
              <View>
                <TextInput
                placeholder="Enter New Password"/>
              </View>
            </View>
            <View style={styles.TextInput}>
              <View>
                <TextInput
                placeholder="Re-Enter New Password"/>
              </View>
            </View>
            </View>
            <View style={styles.Container}>
            <Button
              title = 'Reset Password'
              color = '#018EF7'
              onPress= {pesan}>
              </Button>
            </View>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  TextInput :{
    borderBottomColor:'#C8C2BC',
    borderBottomWidth: 0.5,
    marginLeft:20,
    marginTop: 10
  },
  Container:{
    marginHorizontal:50, 
    marginVertical: 25
  }
})