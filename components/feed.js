import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Header from './header'
const Feed = () => {
    return (
        <View>
            <Header />
            <TouchableOpacity>
                <Image
                    style={styles.back_btn}
                    source={require('../assests/back_btn.png')}
                />
            </TouchableOpacity>

            <Text style={styles.heading}>current feeds</Text>

            <View style={styles.dashcam_cont}>
                <Text style={{ fontSize: 20, color: "black", marginTop: 20, marginLeft: 30 }}>front dashcam</Text>
                <Image
                    style={styles.footage1}
                    source={require('../assests/footage1.png')}
                />
                <Text style={{ fontSize: 17, color: "black", marginTop: 10, marginLeft: 25 }}>powered on by: forward left sensor</Text>
            </View>
            <View style={styles.dashcam_cont}>
                <Text style={{ fontSize: 20, color: "black", marginTop: 20, marginLeft: 30 }}>back camera</Text>
                <Image
                    style={styles.footage1}
                    source={require('../assests/cam_off.png')}
                />
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={{width: 25, height: 27, marginTop: 10}}
                        source={require('../assests/off_btn.png')}
                    />
                    <Text style={{ fontSize: 17, color: "black", marginTop: 10, marginLeft: 15 }}>power on and record</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 33,
        color: "black",
        marginLeft: 50
    },
    back_btn: {
        marginTop: 10,
        marginLeft: 25
    },
    dashcam_cont: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        marginTop: 25,
        margin: 40,
        marginBottom: 0,
        borderRadius: 25,
        height: 250,
    },
    footage1: {
        marginTop: 10,
        marginLeft: 32
    }

});

export default Feed;