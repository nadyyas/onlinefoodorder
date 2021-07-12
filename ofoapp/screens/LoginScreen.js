import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';

const email = <Icon2 name = "mail" size={20} color="#687980" style={{marginTop:13}}></Icon2>
const sandi = <Icon2 name = "key" size={20} color="#687980" style={{marginTop:13}}></Icon2>

export default class LoginScreen extends React.Component{

      constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    tryLogIn = (email, password) => {
        try {
            auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                this.props.navigation.navigate('Home')
          });
    } catch (error) {
          console.log(error.toString(error));
        }
      };

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
              alignItems:'center'
            }}>
              <Text style ={{
                fontFamily:'Roboto',
                fontWeight:'bold',
                fontSize: 20,
                marginTop:20
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
                {email}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="E-mail"
                underlineColorAndroid='transparent'
                value= {this.state.email}
                onChangeText= {(text) => {this.setState({email:text})}}/>
              </View>
            </View>
            <View style={{
              flexDirection:'row',
              marginHorizontal:30,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5
            }}>
              <View>
                {sandi}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="Password"
                value= {this.state.password}
                onChangeText= {(text) => {this.setState({password:text})}}
                underlineColorAndroid='transparent'
                secureTextEntry={true}/>
              </View>
            </View>
            <View style={{marginHorizontal:50, marginVertical: 30}}>
            <Button
              title = 'Log in'
              color = '#018EF7'
              onPress = {() => this.tryLogIn(this.state.email, this.state.password)}
            />
            </View>
            <View style={{
              alignItems:'center'
            }}>
            <Text>Doest Have Account?</Text>
            <Text style={{textDecorationLine:'underline', color:'#018EF7', fontWeight:'bold', marginTop: 15}}
            onPress = {() => {this.props.navigation.navigate ('SignUp')}}>
              Register now
            </Text>
            </View>
        </View>
      </View>

    )
  }
}