import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Header from './header'
const getWarning = (image) => {
        switch (image) {
            case "A":
                //return require('../assets/images/wallpaper1.jpg')
                break;
            case "B":
                //return require('../assets/images/wallpaper2.jpg')
                break;
            case "C":
                //return require('../assets/images/wallpaper3.jpg')
                break;
        }
}
function History({navigation}){
    return (
        
        <ScrollView>
        <View>
            <Header/>

            <View style = {{flexDirection: "row",marginLeft: 45, marginTop: "10%",}}>
                <TouchableOpacity  onPress={() => {
                    navigation.navigate('Dashboard');
                }} >
                <Image
                source={require('../assests/back_btn.png')}></Image>
                </TouchableOpacity>
            <Text style = {styles.name}>
                recordings
            </Text>
            </View>

            <View style = {styles.middle_container}>
            <Text style = {styles.lgp}>
                filter by:
            </Text>
            <View style={styles.feed_cont}>
                    <Text style={{fontSize:17, color: "white"}}>most recent</Text>
                </View>
        </View>
       <View style = {{alignItems: "center", marginTop: "-5%" }}>

       <TouchableOpacity>
           <View style = {styles.list_item}>
               
            <View style= {{marginLeft:"5%"}}>
            <Image 
            source  ={require('../assests/running.png')}
            />
            </View>
            <Text style = {{fontSize: 17, color:"black", marginLeft: "5%"}}>
                motion detected
            </Text>
            <View style = {{flexDirection: "column"}}>
            <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                April 2, 2022
            </Text>
            <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                1:34 pm
            </Text>
            </View>
           </View>
           </TouchableOpacity>
            

           <TouchableOpacity onPress={() => {
                    navigation.navigate('Recording');
                }}>
           <View style = {styles.list_item}>
               
               <View style= {{marginLeft:"5%"}}>
               <Image 
               source  ={require('../assests/warning.png')}
               />
               </View>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "10%"}}>
                   concerning activity 
               </Text>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "10%"}}>
                   detected
               </Text>
               </View>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "0%"}}>
                   April 1, 2022
               </Text>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "0%"}}>
                   2:15 am
               </Text>
               </View>
              </View>
              </TouchableOpacity>


              <TouchableOpacity>
              <View style = {styles.list_item}>
               
            <View style= {{marginLeft:"5%"}}>
            <Image 
            source  ={require('../assests/record.png')}
            />
            </View>
            <Text style = {{fontSize: 17, color:"black", marginLeft: "5%"}}>
                manual recording
            </Text>
            <View style = {{flexDirection: "column"}}>
            <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                Mar 28, 2022
            </Text>
            <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                3:07 pm
            </Text>
            </View>
           </View>
           </TouchableOpacity>

           <TouchableOpacity>
           <View style = {styles.list_item}>
               
               <View style= {{marginLeft:"5%"}}>
               <Image 
               source  ={require('../assests/record.png')}
               />
               </View>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "5%"}}>
                   manual recording
               </Text>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   Mar 26, 2022
               </Text>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   12:18 pm
               </Text>
               </View>
              </View>
              </TouchableOpacity>


              <TouchableOpacity>
              <View style = {styles.list_item}>
               
               <View style= {{marginLeft:"5%"}}>
               <Image 
               source  ={require('../assests/running.png')}
               />
               </View>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "5%"}}>
                   motion detected
               </Text>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   Mar 23, 2022
               </Text>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   7:56 pm
               </Text>
               </View>
              </View>
              </TouchableOpacity>


              <TouchableOpacity>
              <View style = {styles.list_item}>
               
               <View style= {{marginLeft:"5%"}}>
               <Image 
               source  ={require('../assests/warning.png')}
               />
               </View>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "10%"}}>
                   concerning activity 
               </Text>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "10%"}}>
                   detected
               </Text>
               </View>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "0%"}}>
                   Mar 23, 2022
               </Text>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "0%"}}>
                   5:50 pm
               </Text>
               </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style = {styles.list_item}>
               
               <View style= {{marginLeft:"5%"}}>
               <Image 
               source  ={require('../assests/running.png')}
               />
               </View>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "5%"}}>
                   motion detected
               </Text>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   Mar 22, 2022
               </Text>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   6:41 am
               </Text>
               </View>
              </View>
              </TouchableOpacity>


              <TouchableOpacity>
              <View style = {styles.list_item}>
               
               <View style= {{marginLeft:"5%"}}>
               <Image 
               source  ={require('../assests/running.png')}
               />
               </View>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "5%"}}>
                   motion detected
               </Text>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   Mar 20, 2022
               </Text>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   2:30 pm
               </Text>
               </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <View style = {styles.list_item}>
               
               <View style= {{marginLeft:"5%"}}>
               <Image 
               source  ={require('../assests/record.png')}
               />
               </View>
               <Text style = {{fontSize: 17, color:"black", marginLeft: "5%"}}>
                   manual recording
               </Text>
               <View style = {{flexDirection: "column"}}>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   Mar 17, 2022
               </Text>
               <Text style = {{fontSize: 14, color:"black", marginLeft: "20%"}}>
                   9:42 am
               </Text>
               </View>
              </View>
              </TouchableOpacity>


       </View>
        </View>
        </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    name: {
        
        fontSize: 32,
        color: "black",
        marginLeft: "5%",
        marginTop: "-3%"
    },
    lgp: {
        marginLeft: "5%",
        marginTop: "5%",
        fontSize: 20,
        color: "black",
    },
    middle_container:{
        flexDirection: "row",
        marginTop: "1%",
        margin: 30,
    },
    feed_cont:{
        backgroundColor: '#D92027',
        width: 125,
        height: 40,
        borderRadius: 19,
        margin: 12,
        marginBottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    list_item:{
        backgroundColor: '#DFDFDF',
        width: 340,
        height: 70,
        borderRadius: 19,
        margin: 12,
        marginBottom: 0,
        //justifyContent: "center",
        alignItems: "center",
        //marginLeft: "10%"
        flexDirection: "row"
    },
    feed_cont:{
        backgroundColor: '#D92027',
        width: 125,
        height: 40,
        borderRadius: 19,
        margin: 12,
        marginBottom: 0,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default History;