import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class Account extends React.Component {
    render(){
        return(
            <SafeAreaView  style={{backgroundColor: '#018EF7', flex: 1}}>
                <ScrollView  style={{flex: 1, height: HEIGHT}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', top: 40, height: 220}}>
                        <View style={{backgroundColor: 'white', width: 100, height: 100, borderRadius: 100/2, justifyContent : 'center', alignItems: 'center'}}>
                            <MaterialCommunityIcons name="account" size={80} color='rgba(211,211,211,0.7)'></MaterialCommunityIcons>
                        </View>
                        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20, top : 10}}>Edit Profile Photo</Text>
                    </View>

                    <View style={{flex : 1, top: 30, height: 385}}>
                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Name</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontSize: 20, lineHeight: 23, left: 120, flex: 1}}>Pipit</Text>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center',}}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>User Name</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontSize: 20, lineHeight: 23, left: 105, flex: 1}}>Uhuy1</Text>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Handphone</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontSize: 20, lineHeight: 23, left: 50}}>**********89</Text>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 43}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>
                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Email</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color: 'white', fontSize: 20, lineHeight: 23, right:7}}>off***********.com</Text>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, right: 12}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{top: 90, flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', lineHeight: 23, flex: 1, textAlign: 'right', left: 150, fontSize: 20}}  onPress = {() => this.props.navigation.navigate ('Logout')}>See More</Text>
                            <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, textAlign: 'right'}}  onPress = {() => this.props.navigation.navigate ('Logout')}></MaterialCommunityIcons>
                        </View>
                    </View>
                   
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}