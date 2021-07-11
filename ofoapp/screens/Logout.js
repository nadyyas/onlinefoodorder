import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class Logout extends React.Component {
    render(){
        return(
            <SafeAreaView style={{backgroundColor: '#018EF7', flex: 1}}>
                <ScrollView style={{flex: 1, height: HEIGHT}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', left: 20, height: 70}}>
                        <MaterialCommunityIcons name="arrow-left" size={40} color='white' onPress = {() => this.props.navigation.navigate ('Account')}></MaterialCommunityIcons>
                        <Text style={{color: 'white', fontSize: 20, left: 20}}>See More</Text>
                    </View>

                    <View style={{flex : 1, top: 30, height: 270}}>
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
                    </View>

                    <View style={{flex : 1, top: 30, height: 350,}}>
                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Date of Birth</Text>
                            </View>
                            <View style={{flex: 1, left: 25, justifyContent: 'center', alignItems: 'center'}}>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Social Media</Text>
                            </View>
                            <View style={{flex: 1, left: 25, justifyContent: 'center', alignItems: 'center'}}>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Notification</Text>
                            </View>
                            <View style={{flex: 1, left: 25, justifyContent: 'center', alignItems: 'center'}}>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Rate Us</Text>
                            </View>
                            <View style={{flex: 1, left: 25, justifyContent: 'center', alignItems: 'center'}}>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>About</Text>
                            </View>
                            <View style={{flex: 1, left: 25, justifyContent: 'center', alignItems: 'center'}}>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>

                        <View style={{flexDirection: 'row', height: 50, alignItems:'center', justifyContent: 'center', }}>
                            <View style={{flex: 1}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, lineHeight: 23, left: 30}}>Register Canteen</Text>
                            </View>
                            <View style={{flex: 1, left: 25, justifyContent: 'center', alignItems: 'center'}}>
                                <MaterialCommunityIcons name="menu-right" size={50} color='rgba(0, 0, 0, 0.4)' style={{flex: 1, left: 50}}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'black', width: 354, height: 2 }}></View>
                        </View>
                    </View>

                    <View style={{height: 100, top:20, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', width: 354, height: 55, bottom: 10, borderRadius: 11, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize:20}} onPress = {() => this.props.navigation.navigate ('Login')}>Log Out</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}