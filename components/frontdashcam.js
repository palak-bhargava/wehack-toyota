import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Header from './header'
import Video from 'react-native-video';

function Frontdashcam({navigation}){
    return (
        <View>
            <Header/>
            
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>

<TouchableOpacity  onPress={() => {
                        navigation.navigate('Feed');
                    }}>

    <Image

        style={styles.back_btn}

        source={require('../assests/back_btn.png')}

    />

</TouchableOpacity>




<Text style={styles.heading}>front dashcam</Text>

</View>
            <View style={styles.dashcam_cont}>
                <Image
                    style={styles.footage1}
                    source={require('../assests/footage1.png')}
                />
               
                <View style = {{flexDirection: "column"}}>
                <Text style={{ fontSize: 17, color: "black", marginTop: 10, marginLeft: 25 }}>powered on by: </Text>
                <Text style={{ fontSize: 17, color: "black", marginTop: "2%", marginLeft: 25 }}>forward left sensor </Text>
                <View style = {{flexDirection: "row"}}>
                <Image
                    style={styles.footage1}
                    source={require('../assests/zoom.png')}
                />
                <Text style = {{fontSize: 17, color: "black",marginTop: "15%", marginLeft: "5%"}}>
                    1 person detected
                </Text>
                </View>
                <View style = {{flexDirection: "row"}}>
                    <TouchableOpacity style = {{marginLeft:"65%"}}>
                <Image 
            source  ={require('../assests/share_btn.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: "7%"}}>
             <Image 
            source  ={require('../assests/save_btn.png')}
            />
            </TouchableOpacity>
            </View>
            </View>
            </View>
            <TouchableOpacity>
            <View style={{alignItems: "center"}}>
            <View style = {styles.list_item}>

                <Image style={{marginLeft:"10%"}}
            source  ={require('../assests/alarm.png')}
            />
             <Text style = {{fontSize: 17, color:"black", marginLeft: "11%"}}>
                turn on car alarm
            </Text>
                </View>
            
            </View>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    name: {
        
        fontSize: 32,
        color: "black",
        marginLeft: "5%",
        marginTop: "-3%"
    },
    dashcam_cont: {
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        marginTop: 25,
        margin: 40,
        marginBottom: 0,
        borderRadius: 25,
        height: 380,
    },
    footage1: {
        marginTop: "5%",
        marginLeft: 32
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      list_item:{
        backgroundColor: 'rgba(88, 88, 91, 0.13)',
        width: "80%",
        height: 70,
        borderRadius: 19,
        margin: 12,
        marginBottom: 0,
        //justifyContent: "center",
        alignItems: "center",
        //marginLeft: "10%"
        flexDirection: "row",
        marginTop: "5%"
    },
    name: {
        
        fontSize: 32,
        color: "black",
        marginLeft: "5%",
        marginTop: "-3%"
    },
    heading: {

        fontSize: 33,

        color: "black",

        marginLeft: 20

    },

    back_btn: {

        marginTop: 10,

        marginLeft: 25

    },
});

export default Frontdashcam;