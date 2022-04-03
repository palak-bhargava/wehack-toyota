import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import Header from './header'
function Recording({navigation}) {
    return (
        <View>
            <Header />

            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <View style={{ flexDirection: "row", alignItems: "flex-start", marginTop: 15 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('History');
                }}
                >
                    <Image
                        style={styles.back_btn}
                        source={require('../assests/back_btn.png')}    
                    />
                </TouchableOpacity>
                <Text style={styles.heading}>April 2, 2022</Text>
                <Image
                    style={{ marginLeft: 70, marginTop: 5}}
                    source={require('../assests/bookmark_btn.png')}
                />
            </View>

            <Text style={{fontSize: 18, marginLeft: 70}}>2:15 pm</Text>

            <View style={styles.dashcam_cont}>
                <Text style={{ fontSize: 30, color: "black", marginTop: 15, marginLeft: 30 }}>concerning activity</Text>
                <Image
                    style={styles.footage1}
                    source={require('../assests/footage2.png')}
                />
                <View style={styles.row}>
                    <Image
                        style={styles.footage1}
                        source={require('../assests/delete_btn.png')}
                    />
                    <Image
                        style={styles.icon1}
                        source={require('../assests/share_btn.png')}
                    />
                    <Image
                        style={styles.icon2}
                        source={require('../assests/save_btn.png')}
                    />
                </View>
                <View style={styles.row}> 
                    <Image
                        style={{ marginTop: 20, marginLeft: 32, marginBottom: 20 }}
                        source={require('../assests/person.png')}
                    />
                    <View style={{ marginLeft:10, alignItems: "center" }}> 
                        <Text style={{ fontSize: 15, color: "black", marginTop: 40, marginLeft: 10 }}>1 person detected</Text>
                        <Text style={{ fontSize: 10, marginTop: 5, marginLeft: 10 }}>after expensive time spent</Text>
                        <Text style={{ fontSize: 10, marginLeft: 10 }}> near your vehicle</Text>
                    </View>
                </View>

                <Text style={{ fontSize: 30, color: "black", marginTop: 10, alignSelf: "center" }}>activity log</Text>
                <Text style={styles.log}>2:51:22 - person approached vehicle</Text>
                <Text style={styles.log}>2:57:56 - person within close proximity to the vehicle </Text>
                <Text style={styles.log}>2:59:45 - car alarm activated</Text>
                <Text style={styles.log}>2:59:49 - person moved away from the vehicle</Text>
            </View>
            </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 33,
        color: "black",
        marginLeft: 20
    },
    back_btn: {
        marginTop: 15,
        marginLeft: 25
    },
    dashcam_cont: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        marginTop: 15,
        margin: 40,
        marginBottom: 0,
        borderRadius: 25,
        height: 800
    },
    footage1: {
        marginTop: 20,
        marginLeft: 32,
    },

    icon1: {
        marginTop: 20,
        marginLeft: 130
    },

    icon2: {
        marginTop: 20,
        marginLeft: 20
    },

    row: {
        flexDirection: "row", 
        alignItems: "flex-start"
    },

    scrollView: {
    },

    container: {
    },

    log: {
        fontSize: 20,
        color: "black", 
        marginTop: 5, 
        marginLeft: 32
    }

});

export default Recording;