import React from 'react';
import {View, Text, Image, TextInput,StyleSheet,Button} from 'react-native';

export default class ForgetPasswordScreen extends React.Component{
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
              }}>Enter You Phone Number
              </Text>
              <Text style={{
                color : '#687980'
              }}>To Reset Your Password</Text>
            </View>
            <View style={{
              flexDirection:'row',
              marginLeft:50,
              marginRight:20,
              marginTop :15,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5
            }}>
              <View>
                <Text style={{fontWeight:'bold', fontSize:19, marginTop:7}}>
                  +62
                </Text>
              </View>
              <View style={{borderRightColor:'#cc', borderRightWidth:0.5, margin: 10}}></View>
              <View style={{marginLeft:10}}>
                <TextInput
                placeholder="Mobile Number"/>
              </View>
            </View>
            <View style={{marginHorizontal:50, marginVertical: 25}}>
            <Button
              title = 'Send OTP'
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