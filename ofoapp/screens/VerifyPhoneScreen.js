import { styles } from 'ansi-colors';
import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const phone = <Icon name="mobile-phone" size={40} color="#687980" />;
const lock = <Icon name="lock" size={40} color="#687980" />;
export default class App extends React.Component{
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
                marginTop:20
              }}>
                Verify Your Mobile Number
              </Text>
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
            <View style={{marginHorizontal:50, marginVertical: 20}}>
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