import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity , TextInput ,KeyboardAvoidingView, Alert} from 'react-native';
import * as firebase from 'firebase';

import db from '../config';

export default class ExchangeScreen extends React.Component{


    getData(){

        fetch("https://fixer.io/login?u=https%3A%2F%2Ffixer.io%2Fquickstart")// It is not api key it is login page
        .then(response => {
            return response.json();

        }).then(responseData => {
            var currencyCode = this.state.currencyCode
            var currency = responseData.rates.INR
            var value = 69/currency
            console.log(value);
        })
    }

    addItem = (itemName,discription) => {
        var userName = this.state.userName
        db.collection("exchange_requests").add({
            "userName":userName,
            "item_name":itemName,
            "discription":discription

        })
        this.setState({
            itemName:'',
            discription:''
        })

        return Alert.alert(
            'I am ready to exchage',
            '',
            [
                {text :'OK' , onPress : () =>{
                    this.props.navigation.navigate('HomeScreen')
                }}


            ]
        );
    }

    render(){

        return(

            <View style = {{alignItems:'center'}}>

                         <TextInput
                                style={styles.loginBox}
                                placeholder="Item Name"
                                onChangeText={(text)=>{
                                this.setState({
                                 itemName: text
                                })
                                }}
                        />
  
                        <TextInput
                                style={styles.loginBox}
                                placeholder="Discription"
                                onChangeText={(text)=>{
                                this.setState({
                                discription: text
                            })
                            }}
                       />

                       <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
                         onPress={()=>{this.addItem(this.state.itemName ,this.state.discription)}}>
                           <Text style={{textAlign:'center'}}>Login</Text>
                        </TouchableOpacity>
     
            </View>

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