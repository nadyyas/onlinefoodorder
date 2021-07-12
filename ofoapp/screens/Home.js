import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class Home extends React.Component {
    render(){
        return(
            <SafeAreaView style={[styles.container]}>
                <ScrollView style={{flex: 1, height: HEIGHT}}>
                    <View style={[styles.square]}>
                        {/* search bar */}
                        <MaterialCommunityIcons name="magnify" size={30} color="#018EF7" style={{top: HEIGHT-630, right:140}}/>
                        <Text style={{top:23, right: 32, color:'#A1A1A1', fontSize: 18.72}}>Makan Apa Hari Ini?</Text>
                        <TextInput style={[styles.searchbox]}></TextInput>

                        {/* navigasi atas */}
                        <View style={{height: 52, top: 55, flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}} onPress = {() => this.props.navigation.navigate ('Nearme')}>
                                <View style={{width: 32, height: 32, backgroundColor: 'white'}}>
                                    <MaterialCommunityIcons name="map-marker-radius" size={30} color="#018EF7" onPress = {() => this.props.navigation.navigate ('Nearme')}/>
                                </View>
                                <Text style={{fontWeight: 'bold', color: '#018EF7'}} onPress = {() => this.props.navigation.navigate ('Nearme')}>Near Me</Text>
                                <View style={{width: 36, height:4, borderRadius:2, top: 5, backgroundColor:'#C4C4C4'}}></View>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}  onPress = {() => this.props.navigation.navigate ('HotSale')}>
                                <View style={{width: 32, height: 32, backgroundColor: 'white'}}>
                                    <MaterialCommunityIcons name="fire" size={30} color="#018EF7"  onPress = {() => this.props.navigation.navigate ('HotSale')}/>
                                </View>
                                <Text style={{fontWeight: 'bold', color: '#018EF7'}}  onPress = {() => this.props.navigation.navigate ('HotSale')}>Hot Sale</Text>
                                <View style={{width: 36, height:4, borderRadius:2, top: 5, backgroundColor:'#C4C4C4'}}></View>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}} onPress = {() => this.props.navigation.navigate ('Promotion')}>
                                <View style={{width: 32, height: 32, backgroundColor: 'white'}}>
                                    <MaterialCommunityIcons name="ticket-percent" size={30} color="#018EF7" onPress = {() => this.props.navigation.navigate ('Promotion')}/>
                                </View>
                                <Text style={{fontWeight: 'bold', color: '#018EF7'}} onPress = {() => this.props.navigation.navigate ('Promotion')}>Promotion</Text>
                                <View style={{width: 36, height:4, borderRadius:2, top: 5, backgroundColor:'#C4C4C4'}}></View>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                                <View style={{width: 32, height: 32, backgroundColor: 'white'}}>
                                    <FontAwesome5 name="utensils" size={30} color="#018EF7"/>
                                </View>
                                <Text style={{fontWeight: 'bold', color: '#018EF7'}}>Pick Up</Text>
                                <View style={{width: 36, height:4, borderRadius:2, top: 5, backgroundColor:'#C4C4C4'}}></View>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                                <View style={{width: 32, height: 32, backgroundColor: 'white'}}>
                                    <MaterialCommunityIcons name="reload" size={30} color="#018EF7"/>
                                </View>
                                <Text style={{fontWeight: 'bold', color: '#018EF7'}}>Re-Order</Text>
                                <View style={{width: 36, height:4, borderRadius:2, top: 5, backgroundColor:'#C4C4C4'}}></View>
                            </View>
                        </View>

                        {/* fintech */}
                        <View style={{width: 354, height: 148, backgroundColor: '#018EF7', top:75, borderRadius: 20, alignItems: 'center', justifyContent:'center'}}>
                            <View style={{width: 328, height: 38, bottom:10, backgroundColor: 'white', borderRadius:10,  justifyContent:'center', flexDirection: 'row'}}>
                                <Text style={{fontWeight: 'bold', lineHeight:22, fontSize: 18.72, color:'black', right: 60, top: 7 }}>Balance :</Text>
                                <Text style={{fontWeight: 'bold', lineHeight:22, fontSize: 18.72, color:'black', left: 50, top: 7}}>Rp 240.675</Text>
                            </View>
                            <View style={{flexDirection:'row', top: 10}}>
                                <View style={{flex: 1, alignItems: 'center', left: 40, justifyContent:'center'}}>
                                    <View style={{width: 40, height: 40}}>
                                        <MaterialCommunityIcons name="qrcode-scan" size={40} color="white"/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', fontSize: 13.28, color: 'white'}}>Scan</Text>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', right: 40, justifyContent:'center'}}>
                                    <View style={{width: 40, height: 40}}>
                                        <MaterialCommunityIcons name="arrow-up-box" size={40} color="white" onPress = {() => this.props.navigation.navigate ('Topup')}/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', fontSize: 13.28, color: 'white'}}  onPress = {() => this.props.navigation.navigate ('Topup')}>Top Up</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{width: 266, height: 6, backgroundColor: '#018EF7', borderRadius:2, top:100 }}></View>
                        <View style={{flex: 1, height: 90}}>
                            <View style={{top: 130}}>
                                <Image source={require('../images/banner1.png')}/>
                            </View>
                            <View style={{top: 150}}>
                                <Image source={require('../images/banner2.png')}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#018EF7',
    },
    square: {
        width: WIDTH,
        height: HEIGHT+150,
        backgroundColor: 'white',
        alignItems: 'center',
        top: 60,
        flex: 1,
        borderRadius: 35,
    },
    user: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        top: 30,
        left: 34,
        fontSize: 19,
        color: 'white'
    },
    searchbox: {
        position: 'absolute',
        width: 354,
        height: 55,
        top: 40,
        borderColor: '#018EF7',
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            widht: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 50,
        fontSize: 18,
        lineHeight: 22,
        
    }
})