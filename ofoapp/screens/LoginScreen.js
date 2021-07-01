import { styles } from 'ansi-colors';
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const phone = <Icon name="mobile-phone" size={40} color="#687980" />;
const lock = <Icon name="lock" size={40} color="#687980" />;
export default class LoginScreen extends React.Component{
  render(){
    return(
      <View style={{
        backgroundColor: '#018EF7',
        flex: 1}}>
        <View style={{
          alignItems :'center',
          justifyContent :'center'}}>
            <Image style={{width : 140, height: 140, borderRadius: 100, margin: 20}} source={require('./images/logo.png')}/>
        </View>
        <View
        style={{
          backgroundColor:'white',
          flex: 1,
          borderRadius: 10}}>
            <View style ={{
              alignItems:'center'
            }}>
              <Text style ={{
                fontFamily:'Roboto',
                fontWeight:'bold',
                fontSize: 20,
                marginTop:10
              }}>
                Welcome to OFO, Order Food Faster
              </Text>
            </View>
            <View style={{
              flexDirection:'row',
              margin:30,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5
            }}>
              <View>
                {phone}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="Mobile Number/e-mail"/>
              </View>
            </View>
            <View style={{
              flexDirection:'row',
              marginHorizontal:30,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5
            }}>
              <View>
                {lock}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="Password"/>
              </View>
            </View>
            <View style={{marginHorizontal:50, marginVertical: 20}}>
            <Button
              title = 'Log in'
              color = '#018EF7'
            />
            </View>
            <View style={{
              alignItems:'center'
            }}>
            <Text style={{textDecorationLine:'underline', color:'#018EF7'}}>
              Does't Have Account?
            </Text>
            <Text style={{textDecorationLine:'underline', marginTop:8}}>
              Forgot Password
            </Text>
            </View>
        </View>
      </View>

    )
  }
}