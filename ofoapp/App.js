import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import EditProfileScreen from './screens/EditProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import SplashScreen from './screens/SplashScreen';



import MyTabs from './navigations/MyTabs';
import Logout from './screens/Logout';
import HotSale from './screens/HotSale';
import Promotion from './screens/Promotion';
import Reorder from './screens/Reorder';
import TopUp from './screens/Topup';
import Method from './screens/Method';
import Invoice from './screens/Invoice';
import Nearme from './screens/Nearme';
import Nearme1 from './screens/Nearme1';
import Nearme2 from './screens/Nearme2';
import Order from './screens/Order';

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
        <Stack.Screen name = "HotSale" component={HotSale} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Promotion" component={Promotion} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Reorder" component={Reorder} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Topup" component={TopUp} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Method" component={Method} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Invoice" component={Invoice} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Nearme" component={Nearme} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Nearme1" component={Nearme1} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Nearme2" component={Nearme2} options = {{
          headerShown : false,}}
        />
        <Stack.Screen name = "Order" component={Order} options = {{
          headerShown : false,}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}