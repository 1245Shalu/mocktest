import React from 'react';
import {View, Text, StyleSheet,Image,TextInput,TouchableHighlight,ScrollView,
} from 'react-native'

function Location(){
        return(
            <ScrollView style= {styles.container}>
                 <View>
                <Image source= {require('./../assets/lines.png')}
                style= {styles.logoImage}>       
            </Image>
            <Text style={styles.Text}>xentice</Text>
            <Image source= {require('./../assets/man2.jpg')}
                style= {styles.profile}>       
            </Image>
                </View>
                <View style={styles.viewbar}>
                <Image source= {require('./../assets/3to4.jpg')}
                style= {styles.two}>       
            </Image>
                    <Text style={styles.Property}>Location</Text>
                    <Text style={styles.details}>progress Details  {'>'}</Text>
                </View>
                <View>
                <TextInput style= {styles.seating}
                 placeholder='India'
                 placeholderTextColor= 'black'
                 backgroundColor='silver'
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                </View>
                <View>
                <TextInput style= {styles.city}
                 placeholder='city'
                 placeholderTextColor= 'gray'
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                
            
            </View>
                

            <TextInput style= {styles.city}
                 placeholder='Locality'
                 placeholderTextColor= 'gray'
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>

            <TextInput style= {styles.city}
                 placeholder='Street'
                 placeholderTextColor= 'gray'
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
            <View style={styles.map}>
            <Image source= {require('./../assets/map.jpg')}
                style= {styles.map}>       
            </Image>
                
            </View>
            <View style={styles.Lands}>
                <View>
                <TouchableHighlight style= {styles.buttonview}>
                <Text style= {styles.buttontext}>Back</Text>
            </TouchableHighlight>
                </View>
                <View>
                <TouchableHighlight style= {styles.contbutton}>
                <Text style= {styles.context}>Continue</Text>
            </TouchableHighlight>
                </View>
            
            </View>

            </ScrollView>
        )
            
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
    },
    logoImage:{
        width:35,
        height:30,
        marginTop:20,
        marginRight:300,
        marginLeft:15,
        marginBottom:-10
    },
    profile:{
        height:55,
        width:75,
        marginTop:-50,
        marginLeft:320
    },
    viewbar:{
        width:400,
        height:80,
        backgroundColor:'lavender',
        marginBottom:20
    },
    Property:{
        fontSize:23,
        fontWeight:'bold',
        color:'black',
        marginLeft:90,
        marginTop:-50
    },
    details:{
        fontSize:14,
        color:'black',
        marginLeft:90,
        marginTop:0,
    },
    Text: {
        fontSize: 45,
        color: 'blue',
        marginTop:-40,
        marginLeft:75
    },
    seating:{
        width: 360,
        height: 50,
        borderWidth: 2,
        borderColor: 'silver',
        marginTop:-10,
        padding: 10,
        borderRadius:7,
        marginLeft:15
    },
    city:{
        width: 360,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        marginTop:10,
        padding: 10,
        borderRadius:7,
        marginLeft:15,
        marginBottom:15
    },
    map:{
        width:360,
        height:220,
        marginBottom:10,
        marginTop:0,
        marginLeft:8
    },

    buttontext:{
        fontSize:20,
        fontWeight:'bold',
        color:'blue'

    },
    buttonview: {
        width: 170,
        height: 55,
        marginTop:0,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        borderColor:'gray',
        marginLeft:14,
        marginRight:10
        
     },
     Lands:{
        flexDirection:'row',
        
     },maps:{
        left:0,
        right:0,
        top:0,
        bottom:0,
        position: 'absolute',
      },
      
      locality:{
        width:360,
        height:45,
        marginTop:80

      },
      two:{
        width:50,
        height:50,
        marginLeft:20,
        marginTop:18,
        borderRadius:40
     },
     contbutton:{
      width: 170,
      height: 55,
      marginTop:0,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:2,
      borderColor:'blue',
      marginLeft:14,
      marginRight:10,
      backgroundColor:'blue'
     },
     context:{
      fontSize:20,
        fontWeight:'bold',
        color:'white'

     },
      serachbar:{
        direction:{
          fontweight: 'bold',
        },
        predefinedplaceDescription: {
          color: '#5d5d5d'
        },
        textInputContainer:{
          backgroundColor: 'rgba(0,0,0,0)',
          top: 50,
          width: screenWidth - 20,
          borderWidth: 0,
    
        },
        textInput:{
          marginLeft: 15,
          marginRight: 0,
          height: 48,
          color: 'gray',
          fontSize: 16,
          borderWidth: 2,
          marginBottom:60,
          marginTop:-30
        },
        listView:{
          backgroundColor:'rgba(192,192,192,0.9)',
          top: 23,
        },
    }
   
});

export default Location 

