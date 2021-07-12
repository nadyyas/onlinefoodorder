import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import EditProfileScreen from './screens/EditProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';

import Home from './screens/Home';
import MyTabs from './navigations/MyTabs';
import Logout from './screens/Logout';

const Stack = createStackNavigator();

export default function App (){

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {user ?
        <>
        <Stack.Screen name = "Home" component={MyTabs} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name="Logout" options={{ headerShown: false }}>
                { props => <Logout {...props} user={user}/> }
      </Stack.Screen>
        </>:
        <>
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          headerShown: false
        }} >
          {/* { props => <SplashScreen {...props} user={user}/> } */}
        </Stack.Screen>
        <Stack.Screen name = "EditProfile" component={EditProfileScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "Login" component={LoginScreen} options = {{
          headerShown : false,
        }}/>
        <Stack.Screen name = "SignUp" component={SignUpScreen} options = {{
          headerShown : false,
        }}/>
        </>
        }
        

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}