import React from 'react';
import {View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class History extends React.Component {
    render(){
        return(
            <SafeAreaView>
                <ScrollView>
                    <View style={{height: 67, flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18.72}}>History</Text>
                    </View>
                    <View style={{flex: 1, top:10}}>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                        <View style={{height: 70, backgroundColor: 'white', top: 5,  flexDirection: 'row'}}>
                            <View style={{flex: 1, top: 8, left: 20 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>Toko Mari Makan</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 13, lineHeight: 16, color: '#018EF7' }}>20 Mei 2021 11.00</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 10, lineHeight: 13, color: '#A1A1A1' }}>Order ID 1234-56-78</Text>
                            </View>
                            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', bottom:7, left: 50 }}>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19 }}>75.500</Text>
                                <Text style={{fontWeight: 'bold', fontSize: 16, lineHeight: 19, color: '#018EF7' }}>Reorder</Text>
                            </View>
                        </View>
                    </View>
                    
                </ScrollView>
            </SafeAreaView>
           
        )
    }
}