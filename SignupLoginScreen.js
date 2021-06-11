import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity , TextInput ,KeyboardAvoidingView, Alert} from 'react-native';
import * as firebase from 'firebase';

import db from '../config';

export default class SignupLoginScreen extends React.Component{


    login = (username,password)=>{

        firebase.auth().signInWithEmailAndPassword(username,password)
        .then(() => {
            return Alert.alert("Successfully Login")
        })
        .catch((error) => {
            var errorCode = erroe.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        }

        )


    }
    signup = (username,password)=>{

        firebase.auth().signInWithEmailAndPassword(username,password)
        .then((response) => {
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error) {
            var errorCode = erroe.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
        }

        )


    }


    render(){

        return(
            <KeyboardAvoidingView>
                <View style = {{alignItems:'center'}}>
                    <View> 
                         <TextInput
                                style={styles.loginBox}
                                placeholder="abc@example.com"
                                keyboardType ='email-address'
                                onChangeText={(text)=>{
                                this.setState({
                                 emailId: text
                                })
                                }}
                        />
  
                        <TextInput
                                style={styles.loginBox}
                                secureTextEntry = {true}
                                placeholder="enter Password"
                                onChangeText={(text)=>{
                                this.setState({
                                password: text
                            })
                            }}
                    />
                    </View>
                    <View>
                        <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                                onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
                                <Text style={{textAlign:'center'}}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                                onPress={()=>{this.signup(this.state.emailId ,this.state.password)}}>
                                <Text style={{textAlign:'center'}}>Signup</Text>
                        </TouchableOpacity>
      
                    </View>
                </View>
            </KeyboardAvoidingView>


        )


    }

}

const styles = StyleSheet.create({
    loginBox:
    {
      width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10
    }
  })