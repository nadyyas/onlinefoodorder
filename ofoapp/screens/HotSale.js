import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';


const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class HotSale extends React.Component {
    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#018EF7',}}>
                <ScrollView style={{flex: 1, height: HEIGHT}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', left: 20, height: 70}}>
                        <MaterialCommunityIcons name="arrow-left" size={40} color='white' onPress = {() => this.props.navigation.navigate ('Home')}></MaterialCommunityIcons>
                        <Text style={{color: 'white', fontSize: 20, left: 20}}>Home</Text>
                    </View>
                    <View style={{width: WIDTH, height: HEIGHT+150, backgroundColor: 'white', alignItems: 'center', top: 40, flex: 1, borderRadius: 35,}}>
                        <View style={{ height: 100, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: '#018EF7', fontWeight: 'bold', fontSize: 30, lineHeight: 35}}>Hot Sale</Text>
                        </View>
                        <View style={{height:800,}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{justifyContent: 'center', }}>
                                    <Image source={require('../images/makanan1.png')}/>
                                </View>
                                <View style={{justifyContent: 'center', }}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, lineHeight:19}}>Ayam Geprek Mas Iyan</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="star" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>4.8</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="checkbox-marked" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>Pick Up</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="sale" color="#018EF7" size={20}/>
                                        <Text style={{color:'#A1A1A1', fontWeight:'bold', fontSize:12, top:2}}>Buy and get up 3k discount</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="fire" color="#018EF7" size={20}/>
                                        <Text style={{color:'black', fontWeight:'bold', fontSize:12, top:2}}>1,2k Product Sold This Week</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <View style={{justifyContent: 'center', }}>
                                    <Image source={require('../images/makanan2.png')}/>
                                </View>
                                <View style={{justifyContent: 'center', }}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, lineHeight:19}}>Ayam Bakar Bu Indah</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="star" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>4.8</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="checkbox-marked" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>Pick Up</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="sale" color="#018EF7" size={20}/>
                                        <Text style={{color:'#A1A1A1', fontWeight:'bold', fontSize:12, top:2}}>Buy and get up 3k discount</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="fire" color="#018EF7" size={20}/>
                                        <Text style={{color:'black', fontWeight:'bold', fontSize:12, top:2}}>400k Product Sold This Week</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{justifyContent: 'center', }}>
                                    <Image source={require('../images/makanan3.png')}/>
                                </View>
                                <View style={{justifyContent: 'center', }}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, lineHeight:19}}>Ayam Gulai Mari Makan</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="star" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>4.8</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="checkbox-marked" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>Pick Up</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="sale" color="#018EF7" size={20}/>
                                        <Text style={{color:'#A1A1A1', fontWeight:'bold', fontSize:12, top:2}}>Buy and get up 3k discount</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="fire" color="#018EF7" size={20}/>
                                        <Text style={{color:'black', fontWeight:'bold', fontSize:12, top:2}}>650k Product Sold This Week</Text>
                                    </View>
                                </View>
                            </View><View style={{flexDirection: 'row'}}>
                                <View style={{justifyContent: 'center', }}>
                                    <Image source={require('../images/makanan4.png')}/>
                                </View>
                                <View style={{justifyContent: 'center', }}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, lineHeight:19}}>Ayam Penyet Bu Indah</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="star" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>4.5</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="checkbox-marked" color="#018EF7" size={20}/>
                                        <Text style={{color:'#018EF7', fontWeight:'bold', fontSize:14}}>Pick Up</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="sale" color="#018EF7" size={20}/>
                                        <Text style={{color:'#A1A1A1', fontWeight:'bold', fontSize:12, top:2}}>Buy and get up 3k discount</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <MaterialCommunityIcons name="fire" color="#018EF7" size={20}/>
                                        <Text style={{color:'black', fontWeight:'bold', fontSize:12, top:2}}>400k Product Sold This Week</Text>
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