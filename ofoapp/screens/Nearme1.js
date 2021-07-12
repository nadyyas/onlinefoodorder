import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import {Picker} from '@react-native-picker/picker';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class Nearme1 extends React.Component {
    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#018EF7',}}>
                <ScrollView>
                    <View style={{flexDirection: 'row', alignItems: 'center', left: 20, height: 70}}>
                        <MaterialCommunityIcons name="arrow-left" size={40} color='white' onPress = {() => this.props.navigation.navigate ('Nearme')}></MaterialCommunityIcons>
                        <Text style={{color: 'white', fontSize: 20, left: 20}}>Near Me</Text>
                    </View>
                    <View style={{width: WIDTH, height: HEIGHT, backgroundColor: 'white', alignItems: 'center', marginTop:20, top:20, flex: 1, borderRadius: 35,}}>
                        <Text style={{fontWeight: 'bold', fontSize:19, marginTop: 10}}>Ayam Geprek Mas Iyan</Text>
                        <View style={{backgroundColor:"#018EF7", width: 168, height:20, borderRadius: 10, alignItems:'center', justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>in Prasmul</Text>
                        </View>
                        <View style={{width: 414, height: 73, marginTop:30, backgroundColor: '#EFF8FF',  justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                            <View style={{flex:1, justifyContent:'center', alignItems: 'center',}}>
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems: 'center',}}>
                                    <MaterialCommunityIcons name="star" color="#018EF7" size={20}/>
                                    <Text style={{color:"#018EF7", fontWeight: 'bold'}}>4.8</Text>
                                </View>
                                <Text style={{color:"#A1A1A1"}}>700 ratings</Text>
                            </View>
                            <View  style={{flex:1, justifyContent:'center', alignItems: 'center',}}>
                                <Text style={{color:"#018EF7", fontWeight: 'bold'}}>100 m</Text>
                                <Text style={{color:"#A1A1A1"}}>Distance</Text>
                            </View>
                            <View style={{flex:1, justifyContent:'center', alignItems: 'center',}}>
                                <Text style={{color:"#018EF7", fontWeight: 'bold'}}>$$$</Text>
                                <Text style={{color:"#A1A1A1"}}>Below 15k</Text>
                            </View>
                        </View>

                        <View style={{height:100, width: 400}}>
                            <View style={{flexDirection:'row',borderColor: 'black', justifyContent: 'center', width: 374, height: 132}}>
                                <View style={{flex:1, marginLeft:20, marginTop:20 }}>
                                    <Text style={{fontWeight:'bold', fontSize:16, marginBottom: 20}}>Best Seller</Text>
                                    <Text style={{fontWeight:'bold', fontSize:14}}>Ayam Geprek</Text>
                                    <Text>15.000</Text>
                                </View>
                                <View style={{flex:1, justifyContent: 'center', alignItems:'center', marginLeft:150}}>
                                    <Image source={require('../images/menu3.png')}/>
                                    <View style={{backgroundColor:"#018EF7", width: 49, height:21, borderRadius: 10, alignItems:'center', justifyContent: 'center' }}>
                                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}} onPress = {() => this.props.navigation.navigate ('Nearme2')}>Add</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',borderColor: 'black', justifyContent: 'center', width: 374, height: 132}}>
                                <View style={{flex:1, marginLeft:20, marginTop:20 }}>
                                    <Text style={{fontWeight:'bold', fontSize:14}}>Nasi + Ayam Goreng</Text>
                                    <Text>15.000</Text>
                                </View>
                                <View style={{flex:1, justifyContent: 'center', alignItems:'center', marginLeft:150}}>
                                    <Image source={require('../images/menu2.png')}/>
                                    <View style={{backgroundColor:"#018EF7", width: 49, height:21, borderRadius: 10, alignItems:'center', justifyContent: 'center' }}>
                                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>Add</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection:'row',borderColor: 'black', justifyContent: 'center', width: 374, height: 132}}>
                                <View style={{flex:1, marginLeft:20, marginTop:20 }}>
                                    <Text style={{fontWeight:'bold', fontSize:14}}>Nasi Putih</Text>
                                    <Text>5.000</Text>
                                </View>
                                <View style={{flex:1, justifyContent: 'center', alignItems:'center', marginLeft:150}}>
                                    <Image source={require('../images/nasi.png')}/>
                                    <View style={{backgroundColor:"#018EF7", width: 49, height:21, borderRadius: 10, alignItems:'center', justifyContent: 'center' }}>
                                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>Add</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}