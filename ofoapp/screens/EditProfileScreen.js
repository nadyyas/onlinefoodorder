import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,Button, StyleSheet} from 'react-native';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Profile = <Icon2 name="ios-person-circle" size={100} color="#DDDDDD"/>;

export default class EditProfileScreen extends React.Component{
  render(){
    return(
      <View style={{
        flex: 1,
        backgroundColor: '#018EF7'
      }}>
        <View style={{
          justifyContent: 'center', 
          alignItems: 'center',
          flexDirection:'column',
          marginTop: 20
        }}>
          {Profile}
          <Text style={styles.Tulisan1}>Edit Profile Photo</Text>
        </View>
        <View style={styles.Container1}>
          <View>
          <Text style={styles.Tulisan2}> Name </Text>
          </View>
          <View>
          <TextInput 
          placeholder = 'input your name'
          placeholderTextColor='white'/>
          </View> 
        </View>
        <View style={styles.Container1}>
          <View>
          <Text style={styles.Tulisan2}> User Name </Text>
          </View>
          <View>
          <TextInput 
          placeholder = 'input your user name'
          placeholderTextColor='white'/>
          </View> 
        </View>
        <View style={styles.Container1}>
          <View>
          <Text style={styles.Tulisan2}> Phone Number </Text>
          </View>
          <View>
          <TextInput 
          placeholder = 'input your phone number'
          placeholderTextColor='white'
          value ={Number}
          keyboardType={'numeric'}
          maxLength={12}/>
          </View> 
        </View>
        <View style={styles.Container1}>
          <View>
          <Text style={styles.Tulisan2}> Email </Text>
          </View>
          <View>
          <TextInput 
          placeholder = 'input your Email'
          placeholderTextColor='white'
          value ={Number}
          keyboardType={'numeric'}
          maxLength={12}/>
          </View> 
        </View>
        <View style={{marginHorizontal:50, marginVertical: 20}}>
            <Button
              title = 'Start'
              color = '#11698E'
            />
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Tulisan1:{
    fontFamily:'Roboto',
    color:'white',
    fontWeight:'bold',
    fontSize: 20
  },
  Tulisan2:{
    fontFamily:'Roboto',
    fontWeight: 'bold',
    fontSize: 17, 
    marginTop: 7,
    color:'white'
  },
  Container1:{
    flexDirection:'row',
    marginTop: 15,
    marginHorizontal: 10,
    justifyContent:'space-between',
    borderBottomColor: '#E8F0F2',
    borderBottomWidth: 0.5
  }
})