import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Modal, StyleSheet, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Order extends React.Component {
    constructor(){
        super();
        this.state={
            show:false,
            show1:false
        }
    }

    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={{height: 67, flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18.72}}>20 May 2021 11.00</Text>
                    </View>
                    <View style={{height: 50, flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', right: 40}}>
                            <Text style={{fontSize:19 }}>Order ID</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', left: 20}}>
                            <Text style={{fontSize:19 }}>10003-451-01</Text>
                        </View>

                    </View>
                    <View style={{height: 80, top:0, flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', right: 20, flexDirection: 'row'}}>
                            <View style={{backgroundColor: '#C4C4C4', width: 46, height: 46, borderRadius: 100/2}}></View>
                            <Text style={{fontWeight: 'bold', fontSize: 15, left: 20}}>Pick Up</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', left: 40}}>
                            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#018EF7'}}>Cash</Text>
                        </View>
                    </View>
                    <View style={{height: 60, top:5, flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 17, right: 10}}>Set Pick UP Time</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', left: 40}}>
                            <View style={{backgroundColor: 'rgba(196, 196, 196, 0.29)', width: 28, borderRadius: 7, height: 28, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{fontWeight: 'bold'}}>12</Text>
                            </View>
                            <Text style={{fontWeight: 'bold', left: 5}}>:</Text>
                            <View style={{backgroundColor: 'rgba(196, 196, 196, 0.29)', width: 28, borderRadius: 7, height: 28, justifyContent: 'center', alignItems: 'center', left: 10 }}>
                                <Text style={{fontWeight: 'bold'}}>30</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height: 60, top:10, flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 17, left: 25, bottom: 5}}>Order Summary</Text>
                    </View>
                    <View style={{height: 260, top:15, flex: 1, backgroundColor: 'white'}}>
                        <View style={{flexDirection: 'row', height: 70}}>
                            <View style={{width: 70, left : 30, justifyContent: 'center',}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>2x</Text>
                            </View>
                            <View style={{ left : 20, justifyContent: 'center',}}>
                                <Text style={{ fontSize: 16}}>Ayam Geprek</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#A1A1A1'}}>Paha Atas</Text>
                            </View>
                            <View style={{ left : 160, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{ fontSize: 16, fontWeight:'bold'}}>30.000</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', height: 70}}>
                            <View style={{width: 70, left : 30, justifyContent: 'center',}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>1x</Text>
                            </View>
                            <View style={{ left : 20, justifyContent: 'center',}}>
                                <Text style={{ fontSize: 16}}>Nasi + Ayam Goreng</Text>
                            </View>
                            <View style={{ left : 110, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{ fontSize: 16, fontWeight:'bold'}}>15.000</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', height: 70, flex: 1, top: 65}}>
                            <View style={{flex: 1, height: 50, justifyContent: 'center', left: 25}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Total</Text>
                            </View>
                            <View style={{ flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', left: 40}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>45.000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{height: 80, top:20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{backgroundColor: '#018EF7', width: 208, height: 39, bottom: 10, borderRadius: 11, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize:16}} onPress = {() => this.setState({show:true, show1:false})}>Order</Text>
                        </View>
                    </View>
                    <Modal transparent={true} visible={this.state.show}>
                        <View style={{backgroundColor:'#000000aa', flex:1, }}>
                            <View style={{backgroundColor:'white', marginBottom:270, marginTop:270, marginLeft:25, marginRight:25, borderRadius:10, flex:1, justifyContent:'center', alignItems:'center'}}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize:15, lineHeight:18}}>Are you sure want order?</Text>
                                </View>
                                <View style={{flexDirection:'row', flex: 1, }}>
                                    <View style={{justifyContent:'center', alignItems:'center', marginLeft: 30, marginRight: 30}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15, lineHeight:18}} onPress = {() => this.setState({show:false, show1:false})}>Cancel</Text>
                                    </View>
                                    <View style={{justifyContent:'center', alignItems:'center', marginLeft: 30, marginRight: 30}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 15, color: '#018EF7', lineHeight:18}} onPress = {() => this.setState({show:false, show1:true})}>Order</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Modal transparent={true} visible={this.state.show1}>
                        <View style={{backgroundColor:'#000000aa', flex:1, }}>
                            <View style={{backgroundColor:'white', marginBottom:150, marginTop:150, marginLeft:25, marginRight:25, borderRadius:10, flex:1, justifyContent:'center', alignItems:'center'}}>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center', top: 30}}>
                                    <Image style={{justifyContent: 'center', alignItems: 'center'}} source={require('../images/barcode.png')} />
                                </View>
                                <View style={{flexDirection:'row', flex: 1, }}>
                                    <View style={{justifyContent:'center', alignItems:'center'}}>
                                        <Text style={{ fontSize: 15, lineHeight:18}}>Here is Your Barcode</Text>
                                        <Text style={{fontSize: 15, lineHeight:18}}>Show to owner to confirm your order</Text>
                                        <View style={{backgroundColor: '#018EF7', width: 208, height: 39,marginTop:20, borderRadius: 11, justifyContent: 'center', alignItems: 'center'}} onPress = {() => this.setState({show:true})}>
                                            <Text style={{color: 'white', fontWeight: 'bold', fontSize:16}} onPress = {() => this.props.navigation.navigate ('MyOrder')}>Done</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    
                </ScrollView>
            </SafeAreaView>
        )
    }
}