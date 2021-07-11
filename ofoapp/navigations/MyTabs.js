import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import History from '../screens/History';
import MyOrder from '../screens/MyOrder';
import Account from '../screens/Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import { useAppContext } from '../context/Context';
import { CHANGE_HEADER } from '../context/reducer';

const MyTabs = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon : ({ color }) => {
                    if(route.name === 'Home'){
                        return <MaterialCommunityIcons name="home-variant-outline" color={color} size={responsiveFontSize(3)}/>
                    } else if(route.name === 'MyOrder'){
                        return <FontAwesome5 name="shopping-cart" color={color} size={responsiveFontSize(3)}/>
                    } else if(route.name === 'History'){
                        return <MaterialCommunityIcons name="clipboard-list" color={color} size={responsiveFontSize(3)}/>
                    } else if(route.name === 'Account'){
                        return <MaterialCommunityIcons name="account" color={color} size={responsiveFontSize(3)}/>
                    }  
                }
            })}
            tabBarOptions={
                {
                    activeTintColor : 'rgba(211,211,211,0.7)',
                    activeTintColor : '#018EF7',
                    style : {
                        height : responsiveHeight(8)
                    },
                    tabStyle : {
                        padding : 5
                    },
                    labelStyle : {
                        fontSize : responsiveFontSize(1.5),
                        fontWeight : 'bold'
                    }
                }
            }
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
            />
            <Tab.Screen 
                name="MyOrder" 
                component={MyOrder}
            />
            <Tab.Screen 
                name="History" 
                component={History}
            />
            <Tab.Screen 
                name="Account" 
                component={Account}
            />
        </Tab.Navigator>
    )
}

export default MyTabs