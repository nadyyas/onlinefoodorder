import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class Reorder extends React.Component {
    constructor(){
        super();
        this.state={
            show:false,
            show1:false,
        }
    }
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={{backgroundColor: 'white', height: 67, alignItems: 'center', flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="arrow-left" size={40} color='#018EF7' style={{left:10}} onPress = {() => this.props.navigation.navigate ('History')}></MaterialCommunityIcons>
                        <Image style={{left: 20, bottom: 5}} source={require('../images/Logo2.png')} />
                        <Text style={{color: '#018EF7', fontSize: 20, left: 30, fontWeight: 'bold', fontSize: 30}}>OFO</Text>
                    </View>

                    <View style={{backgroundColor: 'white', top:5, height: 67,  flexDirection: 'row'}}>
                        <View style={{ flexDirection: 'row', alignItems:'center', flex:1, left: 20}}>
                            <View style={{width: 46, height: 46, borderRadius: 100/2, backgroundColor:'#C4C4C4'}}></View>
                            <Text style={{fontWeight: 'bold', fontSize: 13, left: 10}}>Pick Up</Text>
                        </View>
                        <View style={{left: 20, flexDirection: 'row', alignItems:'center', flex: 1}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13, left: 80, color:'#018EF7'}}>Cash</Text>
                        </View>
                    </View>

                    <View style={{height: 67, top:10, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:5}}>
                            <Text style={{fontWeight: 'bold', fontSize: 13, right: 25}}>Set Pick UP Time</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', left: 40, bottom:5}}>
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
                        <Text style={{fontWeight: 'bold', fontSize: 17, left: 25, bottom: 5}}>Order Again</Text>
                    </View>
                    <View style={{ top:15, flex: 1, backgroundColor: 'white'}}>
                        <View style={{flexDirection: 'row', height: 70}}>
                            <View style={{width: 70, left : 30, justifyContent: 'center',}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>1x</Text>
                            </View>
                            <View style={{ left : 20, justifyContent: 'center',}}>
                                <Text style={{ fontSize: 16}}>Ayam Krispy-Medium</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#A1A1A1'}}>Paha Atas</Text>
                            </View>
                            <View style={{ left : 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <View style={{backgroundColor: '#018EF7', justifyContent: 'center', alignItems:'center', borderRadius:7, width:49, height:17 }}>
                                    <Text style={{color:'white', fontWeight:'bold', fontSize:9}}>Add</Text>
                                </View>
                                <Text style={{ fontSize: 16, left: 10, fontWeight:'bold'}}>8.000</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', height: 70}}>
                            <View style={{width: 70, left : 30, justifyContent: 'center',}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>2x</Text>
                            </View>
                            <View style={{ left : 20, justifyContent: 'center',}}>
                                <Text style={{ fontSize: 16}}>Nasi Putih</Text>
                            </View>
                            <View style={{ left : 128, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <View style={{backgroundColor: '#018EF7', justifyContent: 'center', alignItems:'center', borderRadius:7, width:49, height:17 }}>
                                    <Text style={{color:'white', fontWeight:'bold', fontSize:9}}>Add</Text>
                                </View>
                                <Text style={{ fontSize: 16, left: 10, fontWeight:'bold'}}>10.000</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', height: 70}}>
                            <View style={{width: 70, left : 30, justifyContent: 'center',}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>1x</Text>
                            </View>
                            <View style={{ left : 20, justifyContent: 'center',}}>
                                <Text style={{ fontSize: 16}}>Kebab Sapi-Large</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#A1A1A1'}}>Extra Saus</Text>
                            </View>
                            <View style={{ left : 75, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <View style={{backgroundColor: '#018EF7', justifyContent: 'center', alignItems:'center', borderRadius:7, width:49, height:17 }}>
                                    <Text style={{color:'white', fontWeight:'bold', fontSize:9}}>Add</Text>
                                </View>
                                <Text style={{ fontSize: 16, left: 10, fontWeight:'bold'}}>20.000</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', height: 70}}>
                            <View style={{width: 70, left : 30, justifyContent: 'center',}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>1x</Text>
                            </View>
                            <View style={{ left : 20, justifyContent: 'center',}}>
                                <Text style={{ fontSize: 16}}>Coca Cola</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color:'#A1A1A1'}}>Dingin</Text>
                            </View>
                            <View style={{ left : 128, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <View style={{backgroundColor: '#018EF7', justifyContent: 'center', alignItems:'center', borderRadius:7, width:49, height:17 }}>
                                    <Text style={{color:'white', fontWeight:'bold', fontSize:9}}>Add</Text>
                                </View>
                                <Text style={{ fontSize: 16, left: 10, fontWeight:'bold'}}>4.000</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', height: 70}}>
                            <View style={{width: 70, left : 30, justifyContent: 'center',}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>3x</Text>
                            </View>
                            <View style={{ left : 20, justifyContent: 'center',}}>
                                <Text style={{ fontSize: 16}}>Es Teh</Text>
                            </View>
                            <View style={{ left : 155, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <View style={{backgroundColor: '#018EF7', justifyContent: 'center', alignItems:'center', borderRadius:7, width:49, height:17 }}>
                                    <Text style={{color:'white', fontWeight:'bold', fontSize:9}}>Add</Text>
                                </View>
                                <Text style={{ fontSize: 16, left: 10, fontWeight:'bold'}}>12.000</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row',flex: 1,}}>
                            <View style={{flex: 1, height: 50, justifyContent: 'center', left: 25}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Total</Text>
                            </View>
                            <View style={{ flex: 1, height: 50, justifyContent: 'center', alignItems: 'center', left: 50}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>45.000</Text>
                            </View>
                        </View>

                        <View style={{height: 80, top:20, marginBottom:20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{backgroundColor: '#018EF7', width: 208, height: 39, bottom: 10, borderRadius: 11, justifyContent: 'center', alignItems: 'center'}} onPress = {() => this.setState({show:true})}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize:16}} onPress = {() => this.setState({show:true, show1:false})}>Re Order</Text>
                            </View>
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
                                            <Text style={{color: 'white', fontWeight: 'bold', fontSize:16}} onPress = {() => this.setState({show:false, show1:false})}>Done</Text>
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