import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import {Picker} from '@react-native-picker/picker';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class Method extends React.Component {
    state={
        methode:'BCA'
    }
    render(){
        return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#018EF7',}}>
                <ScrollView>
                    <View style={{flexDirection: 'row', alignItems: 'center', left: 20, height: 70}}>
                        <MaterialCommunityIcons name="arrow-left" size={40} color='white' onPress = {() => this.props.navigation.navigate ('Home')}></MaterialCommunityIcons>
                        <Text style={{color: 'white', fontSize: 20, left: 20}}>Home</Text>
                    </View>
                    <View style={{width: WIDTH, height: HEIGHT, backgroundColor: 'white', alignItems: 'center', marginTop:40, flex: 1, borderRadius: 35,}}>
                        <View style={{width: 354, height: 470, backgroundColor: '#018EF7', marginTop: 20, borderRadius: 20, alignItems: 'center', }}>
                            <View style={{width: 328, height: 38, marginBottom:10, marginTop:20 ,backgroundColor: 'white', borderRadius:10,  justifyContent:'center', flexDirection: 'row'}}>
                                <Text style={{fontWeight: 'bold', lineHeight:22, fontSize: 18.72, color:'black', right: 60, top: 7 }}>Balance :</Text>
                                <Text style={{fontWeight: 'bold', lineHeight:22, fontSize: 18.72, color:'black', left: 50, top: 7}}>Rp 240.675</Text>
                            </View>
                            <View style={{width: 354, height: 38, marginBottom:10, backgroundColor: 'white',  justifyContent:'center', alignItems: 'center'}}>
                                <Text style={{fontWeight: 'bold', lineHeight:22, fontSize: 18.72, color:'black'}}>Top Up</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop: 10}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                                    <View style={{width: 50, height: 50}}>
                                        <MaterialCommunityIcons name="card-account-details-outline" size={50} color="white"/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', fontSize: 13.28, color: 'white'}}>Account info</Text>
                                    <View style={{width: 20, height: 20}}>
                                        <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="white"/>
                                    </View>
                                </View>

                                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                                    <View style={{width: 50, height: 50}}>
                                        <MaterialCommunityIcons name="credit-card-outline" size={50} color="white"/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', fontSize: 13.28, color: 'white'}}>Payment Detail</Text>
                                    <View style={{width: 20, height: 20}}>
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={20} color="white"/>
                                    </View>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
                                    <View style={{width: 50, height: 50}}>
                                        <MaterialCommunityIcons name="email-newsletter" size={50} color="white"/>
                                    </View>
                                    <Text style={{fontWeight: 'bold', fontSize: 13.28, color: 'white'}}>Invoice</Text>
                                    <View style={{width: 20, height: 20}}>
                                        <MaterialCommunityIcons name="checkbox-blank-circle-outline" size={20} color="white"/>
                                    </View>
                                </View>
                            </View>

                            <View style={{marginTop:60, marginRight: 180}}>
                                <Text style={{fontWeight: 'bold', fontSize: 13.28, color: 'white'}}>Select Bank</Text>
                                <View style={[styles.searchbox1]}>
                                    <Picker 
                                        selectedValue={this.state.methode}
                                        onValueChange={(itemValue, itemIndex) => this.setState({methode:itemValue})}
                                    >
                                        <Picker.Item label="Transfer to BCA Virtual Account" value="BCA"></Picker.Item>
                                        <Picker.Item label="Transfer to Mandiri Virtual Account" value="Mandiri"></Picker.Item>
                                        <Picker.Item label="Transfer to BNI Virtual Account" value="BNI"></Picker.Item>
                                    </Picker>
                                </View>
                            </View>
                            <View>
                                <View style={{backgroundColor: 'white', width: 100, height: 39, borderRadius: 5, marginTop:70, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{color: '#018EF7', fontWeight: 'bold', fontSize:16}} onPress = {() => this.props.navigation.navigate ('Invoice')}>Next</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    searchbox: {
        position: 'absolute',
        width: 276,
        height: 36,
        marginTop: 30,
        backgroundColor:'white',
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 14,
        lineHeight: 14,
    },
    searchbox1: {
        position: 'absolute',
        width: 276,
        height: 36,
        marginTop: 30,
        backgroundColor:'white',
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        lineHeight: 22,
        justifyContent: 'center'
    }
})