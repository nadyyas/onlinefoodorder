import React from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';

const SplashScreen = ({navigation, user}) => {
  setTimeout(() => {
      if(user == null) {
          navigation.replace('Login');
      }
      else {
          navigation.replace('Home');
      }   
  }, 3000)
  return (
      <View
          style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#018EF7',
      }}>
          <Image style={{width : 160, height: 160, borderRadius: 100}} source={require('../images/logo.png')}/>
          <Text style={styles.tulisan1}>Order Food Online</Text>
      </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  tulisan1:{
      marginTop: 10,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      color: 'white',
      fontSize: 30,
  }
})