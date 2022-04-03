import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Header from './header'
const Dashboard = () => {
    return (
        <View>
            <Header />
            <Text style={styles.name}>
                Hi, Nhi!
            </Text>
            <Text style={styles.lgp}>
                let's go places
            </Text>
            <View style={styles.your_dashcam}>
                <View style={styles.container1}>
                    <Image
                        source={require('../assests/db1.png')}
                    />
                    <Text style={styles.text1}>recordings</Text>
                </View>

                <View style={styles.container2}>
                    <Image
                        style={styles.warn_img}
                        source={require('../assests/warning.png')}
                    />
                    <Text style={styles.text2}>2 concerning activities recorded</Text>
                </View>

                <Image
                    style={styles.car}
                    source={require('../assests/car.png')}
                />
            </View>

            <View style={styles.middle_container}>
                <View style={styles.feed_cont}>
                    <Image
                        source={require('../assests/feed.png')}
                    />
                    <Text style={{fontSize:17, color: "black"}}>Current Feeds</Text>
                </View>
                <View style={styles.help_cont}>
                    <Image
                        source={require('../assests/settings_btn.png')}
                    />
                    <Text style={{fontSize:17, paddingTop: 10, color: "black"}}>Settings</Text>
                </View>
            </View>

            <View style={styles.battery_cont}>
                <View style={{marginLeft: 35, marginTop: 10, alignItems: "center"}}>
                    <Text style={{fontSize:17, color: "black"}}>battery</Text>
                    <Image
                            source={require('../assests/battery.png')}
                    />
                </View>
                <View style={{marginRight: 110, marginLeft: 40, marginTop: 10, alignItems: "center"}}>
                    <Text style={{fontSize:50, color: "black"}}>75</Text>
                    <Text style={{textAlign:"center", fontSize:17, color: "black"}}>hours of off-vehicle use remaining</Text>
                </View>
                
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    your_dashcam: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        marginTop: 25,
        margin: 40,
        borderRadius: 25,
        height: 190,
    },
    car: {
        marginTop: 15,
        marginLeft: 15,
    },
    name: {
        marginLeft: 45,
        marginTop: 15,
        fontSize: 32,
        color: "black",
    },
    lgp: {
        marginLeft: 45,
        marginTop: 5,
        fontSize: 17,
        color: "black",
    },
    container1: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        alignItems: "center"
    },
    text1: {
        fontSize: 27,
        color: "black",
        paddingLeft: 15
    },
    container2: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 35,
        marginRight: 25,
        alignItems: "center"
    },
    text2: {
        fontSize: 14,
        color: "black",
        paddingLeft: 10
    },
    warn_img: {
        height: 27,
        width: 30,
    },
    middle_container:{
        flexDirection: "row",
        marginTop: 50,
        margin: 30,
    },
    feed_cont:{
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        width: 140,
        height: 110,
        borderRadius: 19,
        margin: 12,
        marginBottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    help_cont: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        width: 140,
        height: 110,
        borderRadius: 19,
        margin: 12,
        marginBottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    battery_cont: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        marginTop: 0,
        margin: 40,
        borderRadius: 20,
        height: 135,
        flexDirection: "row"
    }

});

export default Dashboard;