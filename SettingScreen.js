import React from 'react';
import { StyleSheet, Text, View ,TextInput } from 'react-native';

import {createDrawerNavigator}  from 'react-navigation-drawer';

export default class SettingScreen extends React.Component{

    render(){

        return(

    <View style = {{alignItems:'center'}}>
    <View> 
         <TextInput
                style={styles.loginBox}
                placeholder="Name"
                onChangeText={(text)=>{
                this.setState({
                 Name: text
                })
                }}
        />

        <TextInput
                style={styles.loginBox}
                placeholder="lastname"
                onChangeText={(text)=>{
                this.setState({
                lastname: text
            })
            }}
    />
             <TextInput
                style={styles.loginBox}
                placeholder="Contact"
                maxLength={10}
                onChangeText={(text)=>{
                this.setState({
                 Contact: text
                })
                }}
        />

        <TextInput
                style={styles.loginBox}
                placeholder="address"
                onChangeText={(text)=>{
                this.setState({
                adrdess: text
            })
            }}
    />
    </View>
    <View>
        <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                onPress={()=>{this.getData(this.state.emailId ,this.state.password)}}>
                <Text style={{textAlign:'center'}}>Save</Text>
        </TouchableOpacity>


    </View>
</View>

     )
        }

}