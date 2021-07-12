import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,Button} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const nama = <Icon2 name = "person" size={20} color="#687980" style={{marginTop:13}}></Icon2>
const email = <Icon2 name = "mail" size={20} color="#687980" style={{marginTop:13}}></Icon2>
const sandi = <Icon2 name = "key" size={20} color="#687980" style={{marginTop:13}}></Icon2>
const nomor = <Icon2 name = "phone-portrait" size={20} color="#687980" style={{marginTop:13}}></Icon2>

export default class SignUpScreen extends React.Component{

      constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            username: '',
            phoneNumber: '',
        }
    }

    trySignUp = async(email, password) => {
        const result = await auth().createUserWithEmailAndPassword(email, password)
        firestore().collection('users').doc(result.user.uid).set({
            name: this.state.username,
            phone: this.state.phoneNumber,
            email: result.user.email,
            uid: result.user.uid,
        })
    }

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
                Set Up Your Email and Password
              </Text>
            </View>
            <View style={{
              flexDirection:'row',
              marginHorizontal:30,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5,
              marginTop: 10
            }}>
              <View>
                {nama}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="Name"
                underlineColorAndroid='transparent'
                value={this.state.username}
                onChangeText={(text) => {this.setState({username:text})}}/>
              </View>
            </View>
            <View style={{
              flexDirection:'row',
              marginHorizontal:30,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5,
              marginTop: 10
            }}>
              <View>
                {nomor}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="Phone Number"
                underlineColorAndroid='transparent'
                keyboardType = {'numeric'}
                value={this.state.phoneNumber}
                onChangeText={(text) => { this.setState({ phoneNumber: text })}}/>
              </View>
            </View>
            <View style={{
              flexDirection:'row',
              marginHorizontal:30,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5,
              marginTop: 10
            }}>
              <View>
                {email}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="E-Mail"
                underlineColorAndroid='transparent'
                value={this.state.email}
                onChangeText={(text) => { this.setState({ email: text })}}/>
              </View>
            </View>
            <View style={{
              flexDirection:'row',
              marginHorizontal:30,
              borderBottomColor:'#cc',
              borderBottomWidth: 0.5,
              marginTop: 10
            }}>
              <View>
                {sandi}
              </View>
              <View style={{marginLeft:20}}>
                <TextInput
                placeholder="Password, minimum 8 characters"
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(text) => { this.setState({ password: text }) }}
                underlineColorAndroid='transparent'/>
              </View>
            </View>
            <View style={{marginHorizontal:50, marginVertical: 30, flexDirection: 'column'}}>
            <Button
              title = 'Sign Up'
              color = '#018EF7'
              onPress = {() => this.trySignUp(this.state.email, this.state.password, this.state.username, this.state.phoneNumber)}
            /></View>
            <View style={{
              alignItems:'center'
            }}>
            <Text>Does Have Account?</Text>
            <Text style={{textDecorationLine:'underline', color:'#018EF7', fontWeight:'bold', marginTop: 15}}
            onPress = {() => {this.props.navigation.navigate ('Login')}}>
              Login Here
            </Text>
            </View>
        </View>
      </View>

    )
  }
}