import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Header from './header'
const FrontDashcam = () => {
    return (
        <View>
            <Header />
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                <TouchableOpacity>
                    <Image
                        style={styles.back_btn}
                        source={require('../assests/back_btn.png')}
                    />
                </TouchableOpacity>

                <Text style={styles.heading}>front dashcam</Text>
            </View>
            <View style={styles.cam_cont}>


            </View>

            <TouchableOpacity>
                <View style={styles.btn_cont}>
                    <Image
                        style={styles.btn_img}
                        source={require('../assests/alarm.png')}
                    />
                    <Text style={styles.btn_text}>turn on car alarm</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.btn_cont}>
                    <Image
                        style={styles.btn_img}
                        source={require('../assests/shield.png')}
                    />
                    <Text style={styles.btn_text}>share to local authorities</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.btn_cont}>
                    <Image
                        style={styles.btn_img}
                        source={require('../assests/settings.png')}
                    />
                    <Text style={styles.btn_text}>camera settings</Text>
                </View>
            </TouchableOpacity>


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
        marginTop: 10,
        marginLeft: 25
    },
    cam_cont: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        marginTop: 15,
        margin: 40,
        marginBottom: 15,
        borderRadius: 25,
        height: 350,
    },
    btn_cont: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        borderRadius: 25,
        margin: 40,
        marginTop: 15,
        marginBottom: 0,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
    },
    btn_text: {
        fontSize: 20,
        color: "black",
        marginLeft: 20
    },
    btn_img: {
        marginLeft: 20,
    }
});

export default FrontDashcam;