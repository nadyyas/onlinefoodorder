import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfileScreen from './screens/EditProfileScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import OtpForgetPasswordScreen from './screens/OtpForgetPasswordScreen';
import OtpScreen from './screens/OtpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import VerifyPhoneScreen from './screens/VerifyPhoneScreen';

import Home from './screens/Home';
import MyTabs from './navigations/MyTabs';
import Logout from './screens/Logout';

const Stack = createStackNavigator();
export default function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false
        }} >
          {/* { props => <SplashScreen {...props} user={user}/> } */}
        </Stack.Screen>
        <Stack.Screen name = "EditProfile" component={EditProfileScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "ForgetPassword" component={ForgetPasswordScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "Login" component={LoginScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "Home" component={MyTabs} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Logout" component={Logout} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "OtpForgetPassword" component={OtpForgetPasswordScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "Otp" component={OtpScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "ResetPassword" component={ResetPasswordScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "SignUp" component={SignUpScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "VerifyPhone" component={VerifyPhoneScreen} options = {{
          headerShown : false,
        }}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}