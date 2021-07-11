import React from 'react';
import {View, Text, Image, TextInput,StyleSheet,Button} from 'react-native';

export default class OtpScreen extends React.Component{
  render(){
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
              }}>We sent OTP code to Verify Your Number 
              </Text>
              <Text style={{
                color : '#687980'
              }}>Enter 4 digits verification code sent to your number</Text>
            </View>
            <View style ={{justifyContent:'space-evenly', flexDirection:'row', paddingTop: 20}}>
              <TextInput
              maxLength={1}
              style={styles.TextInput}
              value ={Number}
              keyboardType={'numeric'}></TextInput>
              <TextInput
              maxLength={1}
              style={styles.TextInput}
              value ={Number}
              keyboardType={'numeric'}></TextInput>
              <TextInput
              maxLength={1}
              style={styles.TextInput}
              value ={Number}
              keyboardType={'numeric'}></TextInput>
              <TextInput
              maxLength={1}
              style={styles.TextInput}
              value ={Number}
              keyboardType={'numeric'}></TextInput>
            </View>
            <View style={{marginHorizontal:50, marginVertical: 25}}>
            <Button
              title = 'Sign Up'
              color = '#018EF7'
            />
            </View>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  TextInput :{
    backgroundColor:'#f5f4f2',
    fontWeight:'bold',
    alignSelf: 'center',
    padding: 10,
    fontSize:20,
    height: 55,
    width: '10%',
    borderRadius: 10,
    borderColor:'grey',
    textAlign:'center',
  }
})