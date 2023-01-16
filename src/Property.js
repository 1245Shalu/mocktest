import React, {Component} from "react";
import {View, Text, StyleSheet,Image,TextInput, TouchableOpacity,ScrollView,} from 'react-native';


export default class Property extends Component {
    render(){
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
                <Image source= {require('./../assets/1to4.jpg')}
                style= {styles.two}>       
            </Image>
                    <Text style={styles.Property}>Property</Text>
                    <Text style={styles.details}>progress Details  {'>'}</Text>
                </View>

                <View style={styles.Lands}>
                <View style={styles.land}>
                        <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        <Text style={styles.landtext}>Industrial</Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>

                    <View style={styles.landblue}>
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

                    <View style={styles.land}>
                        <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        <Text style={styles.landtext}>Industrial</Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>
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

                    <View style={styles.land}>
                        <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        <Text style={styles.landtext}>Industrial</Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>
                </View>

                <View style={styles.Lands}>
                <View style={styles.ind}>
                        <Image source= {require('./../assets/land.png')}
                        style={styles.landicon}>
                        </Image>
                        <Text style={styles.landtext}>Industrial</Text>
                        <Text style={styles.Ltext}> land</Text>
                    </View>

                </View>
                <View>
                    <View>
                <TextInput style= {styles.title}
                 placeholder='Propert Title'
                 placeholderTextColor= 'black'
                 maxLength={20}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
             </View>

            <Text style={{marginBottom:10,marginLeft:13}}>Transaction Type</Text>
            </View>
            <View style={styles.Lands}>
                <View>

            <TouchableOpacity
                            style={styles.sell}
                            onPress={() => {
                                this.setState({
                                    value: res.key,
                                });
                            }}>
                        </TouchableOpacity>
                        <Text style={styles.radiotext}>Sell</Text>
                        </View>

                        <View>

            <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                this.setState({
                                    value: res.key,
                                });
                            }}>
                        </TouchableOpacity>
                        <Text style={styles.radiotext}>Rent</Text>
                        </View>

                        <View>

            <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                this.setState({
                                    value: res.key,
                                });
                            }}>
                        </TouchableOpacity>
                        <Text style={styles.radiotext}>Lease</Text>
                        </View>
                </View>
                <View style={styles.Lands}>
                    <View>
                    <TextInput style= {styles.price}
                 placeholder='Price'
                 placeholderTextColor= 'black'
                 maxLength={10}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                    </View>
                    <View>
                    <TextInput style= {styles.price}
                 placeholder='/Hr'
                 placeholderTextColor= 'black'
                 maxLength={10}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                    </View>
                </View>
                
                <View style={styles.Lands}>
                    <View>
                    <TextInput style= {styles.price}
                 placeholder='Build Area'
                 placeholderTextColor= 'black'
                 maxLength={10}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                    </View>
                    <View>
                    <TextInput style= {styles.price}
                 placeholder='/Hr'
                 placeholderTextColor= 'black'
                 maxLength={10}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                    </View>
                </View>

                <View style={styles.Lands}>
                    <View>
                    <TextInput style= {styles.price}
                 placeholder='Plot Area'
                 placeholderTextColor= 'black'
                 maxLength={10}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                    </View>
                    <View>
                    <TextInput style= {styles.price}
                 placeholder='/Hr'
                 placeholderTextColor= 'black'
                 maxLength={10}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
                    </View>
                </View>
                <TextInput style= {styles.seating}
                 placeholder='Seating Capacity'
                 placeholderTextColor= 'black'
                 maxLength={10}
                 onChangeText={(username)=> this.updateValue(username)}>
            </TextInput>
            </ScrollView>
        )
            
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    
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
        marginLeft:5
    },
    profile:{
        height:55,
        width:75,
        marginBottom:10,
        marginLeft:319
    },
    viewbar:{
        width:400,
        height:80,
        backgroundColor:'lavender',
        marginBottom:10
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
        marginLeft:90
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
        flexDirection:'row',
        
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
     title : {
        width: 383,
        height: 40,
        borderWidth:2,
        borderColor: 'gray',
        marginBottom:10,
        padding: 10,
        marginLeft:5,
        borderRadius:7,
        marginTop:0
        
    },
    radioCircle: {
		height: 15,
		width: 15,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: 'black',
        marginRight:50,
        marginLeft:13,
        backgroundColor:'white'
	},
	radiotext:{
        fontSize:15,
        color:'black',
        marginTop:-19,
        marginBottom:10,
        marginLeft:30

    },
    price : {
        width: 185,
        height: 40,
        borderWidth: 2,
        borderColor: 'gray',
        marginBottom:10,
        padding: 10,
        marginLeft:5,
        borderRadius:7,
        marginRight:5
    },
    hr:{
        width:110,
        height:40,

    },
    seating:{
        width: 380,
        height: 40,
        borderWidth: 2,
        borderColor: 'gray',
        marginBottom:10,
        padding: 10,
        marginLeft:5,
        borderRadius:7,
    },
    Ltext:{
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        marginLeft:25,
        marginTop:-5
     },
     ind:{
        width:90,
        height:80,
        backgroundColor:'white',
        marginBottom:10,
        marginRight:4,
        borderRadius:6,
        elevation:9,
        marginLeft:148,
        borderWidth:2,
        borderColor:'gray',
        
     },
     two:{
        width:50,
        height:50,
        marginLeft:20,
        marginTop:18,
        borderRadius:40
     },
     landblue:{
        width:90,
        height:80,
        backgroundColor:'blue',
        marginBottom:10,
        marginRight:4,
        borderRadius:6,
        elevation:9,
        marginLeft:4,
        borderWidth:2,
        borderColor:'gray'
     },
     titlebar:{
        width:150,
        height:40,
        marginLeft:40,
        marginTop:0,
        marginBottom:10,
        
     },
     sell:{
        height: 15,
		width: 15,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: 'black',
        marginRight:50,
        marginLeft:13,
        backgroundColor:'darkblue'
     },
     labelInput: {
        color: '#673AB7',
      },
      formInput: {    
        borderBottomWidth: 1.5, 
        marginLeft: 20,
        borderColor: '#333',       
      },
      input: {
        borderWidth: 0
      },
    
   
     
})

