import React, {Component} from "react";
import {View, Text, StyleSheet,Image,TextInput, TouchableHighlight,ScrollView} from 'react-native'


export default class Home extends Component {
   
    render(){
        return(
            <View style= {styles.container}>
                <View>
                <Image source= {require('./../assets/lines.png')}
                style= {styles.logoImage}>       
            </Image>
            <Text style={styles.Text}>xentice</Text>
            <Image source= {require('./../assets/man2.jpg')}
                style= {styles.profile}>       
            </Image>
            <View>
          
            <TextInput style= {styles.mobile}
            placeholder='Search'
            placeholderTextColor= 'black'
            maxLength={10}
            onChangeText={(username)=> this.updateValue(username)}>
                <Image source= {require('./../assets/search.webp')}
                style= {styles.search}>       
            </Image>
            <Text style={{marginLeft:-14,fontSize:15}}>   Search</Text>
            </TextInput>
            </View>
            <TouchableHighlight style={styles.buttonview}>
                <Text style={styles.buttonText}>Property</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.Buttonview}>
                <Text style={styles.ButtonText}>Services</Text>
            </TouchableHighlight>
                </View>
                
                <View style={styles.Lands}>
                    <View style={styles.land}>
                        <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        <Text style={styles.landtext}>Industrial</Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>

                    <View style={styles.land}>
                    <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        
                        <Text style={styles.landtext}>Industrial </Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>

                    <View style={styles.land}>
                    <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        <Text style={styles.landtext}>Industrial</Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>
                    <View style={styles.land}>
                        <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        <Text style={styles.landtext}>Industrial</Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>
                </View>
                <Text style={styles.office}>Commercial office</Text>
                <Text style={{marginLeft:300,marginTop:-20,}}>See all</Text>
                <View style={styles.Lands}>
                    <View style={styles.officeplace}>
                    <Image source= {require('./../assets/office3.jpg')}
                        style={styles.officeimage}>
                        </Image>
                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>Woxro office</Text>
                        <Text style={{fontSize:12,color:'red',fontWeight:'bold',marginLeft:115,marginTop:-20}}>Rs.2500/Hr</Text>
                        <Image source= {require('./../assets/location2.png')}
                        style={styles.location}>
                        </Image>
                        <Image source= {require('./../assets/whiteheart.png')}
                        style={styles.red}>
                        </Image>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:103,marginLeft:30}}>Thrissur</Text>
                    </View>
                    <View style={styles.officeplace}>
                    <Image source= {require('./../assets/office2.jpg')}
                        style={styles.officeimage}>
                        </Image>
                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>Woxro office</Text>
                        <Text style={{fontSize:12,color:'red',fontWeight:'bold',marginLeft:115,marginTop:-20}}>Rs.2500/Hr</Text>
                        <Image source= {require('./../assets/location2.png')}
                        style={styles.location}>
                        </Image>
                        <Image source= {require('./../assets/redw.jpg')}
                        style={styles.red}>
                        </Image>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:102,marginLeft:30}}>Thrissur</Text>
                    </View>
                </View>
                <Text style={styles.office}>Commercial office</Text>
                <Text style={{marginLeft:300,marginTop:-20,}}>See all</Text>
                <View style={styles.Lands}>
                    <View style={styles.officeplace}>
                    <Image source= {require('./../assets/office3.jpg')}
                        style={styles.officeimage}>
                        </Image>
                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>Woxro office</Text>
                        <Text style={{fontSize:12,color:'red',fontWeight:'bold',marginLeft:115,marginTop:-20}}>Rs.2500/Hr</Text>
                        <Image source= {require('./../assets/location2.png')}
                        style={styles.location}>
                        </Image>
                        <Image source= {require('./../assets/whiteheart.png')}
                        style={styles.red}>
                        </Image>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:102,marginLeft:30}}>Thrissur</Text>
                    </View>
                    <View style={styles.officeplace}>
                    <Image source= {require('./../assets/office.jpg')}
                        style={styles.officeimage}>
                        </Image>
                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>Woxro office</Text>
                        <Text style={{fontSize:12,color:'red',fontWeight:'bold',marginLeft:115,marginTop:-20}}>Rs.2500/Hr</Text>
                        <Image source= {require('./../assets/location2.png')}
                        style={styles.location}>
                        </Image>
                        <Image source= {require('./../assets/redw.jpg')}
                        style={styles.red}>
                        </Image>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:102,marginLeft:30}}>Thrissur</Text>
                    </View>
                </View>
                <Text style={styles.office}>Commercial office</Text>
                <Text style={{marginLeft:300,marginTop:-20,}}>See all</Text>
                <View style={styles.Lands}>
                    <View style={styles.officeplace}>
                    <Image source= {require('./../assets/office3.jpg')}
                        style={styles.officeimage}>
                        </Image>
                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>Woxro office</Text>
                        <Text style={{fontSize:12,color:'red',fontWeight:'bold',marginLeft:115,marginTop:-20}}>Rs.2500/Hr</Text>
                        <Image source= {require('./../assets/location2.png')}
                        style={styles.location}>
                        </Image>
                        <Image source= {require('./../assets/whiteheart.png')}
                        style={styles.red}>
                        </Image>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:102,marginLeft:30}}>Thrissur</Text>
                    </View>
                    <View style={styles.officeplace}>
                    <Image source= {require('./../assets/office.jpg')}
                        style={styles.officeimage}>
                        </Image>
                        <Text style={{fontSize:15,color:'black',fontWeight:'bold'}}>Woxro office</Text>
                        <Text style={{fontSize:12,color:'red',fontWeight:'bold',marginLeft:115,marginTop:-20}}>Rs.2500/Hr</Text>
                        <Image source= {require('./../assets/location2.png')}
                        style={styles.location}>
                        </Image>
                        <Image source= {require('./../assets/redw.jpg')}
                        style={styles.red}>
                        </Image>
                        
                        <Text style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:102,marginLeft:30}}>Thrissur</Text>
                    </View>
                </View>
            </View>
        )
            
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Text: {
        fontSize: 45,
        color: 'blue',
        marginBottom:-50,
        marginLeft:70
    },
    logoImage:{
        width:35,
        height:30,
        marginBottom:-50,
        marginRight:300,
        marginLeft:12
    },
    profile:{
        height:55,
        width:75,
        marginBottom:5,
        marginLeft:320
    },
    mobile : {
        width: 380,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom:40,
        padding: 10,
        marginLeft:7,
        borderRadius:7,
        
    },
    search:{
        width:23,
        height:25,
        marginLeft:0,
        
    },
    buttonview: {
        width: 120,
        height: 45,
        marginTop: -25,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        marginLeft:5,
        marginBottom:-40,
        borderColor:'gray'
        
     },

     buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    
     },
     Buttonview:{
        width:120,
        height:45,
        marginBottom:10,
        marginLeft:140,
     },
     ButtonText:{
        fontSize:25,
        fontWeight:'bold',
     },
     land:{
        width:90,
        height:80,
        backgroundColor:'white',
        marginBottom:10,
        marginRight:4,
        borderRadius:6,
        elevation:9,
        marginLeft:4,
        borderWidth:2,
        borderColor:'gray'
     },
     Lands:{
        flexDirection:'row'
     },
     landicon:{
        width:40,
        height:40,
        marginLeft:23,
        marginTop:2

     },
     landtext:{
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        marginLeft:12
        
     },
     office:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginBottom:10,
        marginRight:150,
        marginLeft:10

     },
     officeplace:{
        width:180,
        height:150,
        backgroundColor:'white',
        marginBottom:20,
        marginRight:10,
        borderRadius:8,
        elevation:8,
        marginLeft:8

     },
     officeimage:{
        width:180,
        height:100,
        borderRadius:8,
     },
     location:{
        width:15,
        height:20,
        marginLeft:9,
        marginTop:9
     },
     Ltext:{
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        marginLeft:25,
        marginTop:-5
     },
     red:{
        width:23,
        height:18,
        marginTop:-140,
        marginLeft:150,
        borderRadius:9
     }
})

