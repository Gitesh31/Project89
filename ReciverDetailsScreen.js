import React from 'react';
import { StyleSheet, Text, View ,FlatList , TouchableOpacity, Touchable  } from 'react-native';
import * as firebase from 'firebase';

import db from '../config';

export default class ReciverDetailsScreen extends React.Component{

    addNotifations = () => {
        console.log("in the function " , this.state.rec);
        var message = this.state.userName + "has shown intrest in exchanging the item";
        db.collection("all_notifications").add({
            "targated_user_id" : this.state.reciverId,
            "doner_id" : this.state.userId,
            "exchange_id" : this.state.exchangeId,
            "item_name" : this.state.itemName,
            "date" : firebase.firestore.FieldValue.serverTimeStamp(),
            "notification_status" : "unread",
            "message" : message
        })
    }



    

    render(){

        return(

            <View style = {styles.container}>
                <View style = {{flex:0.1}}>
                    <MyHeader title = {"Notifications"} navigation = {this.props.navigation}></MyHeader>
                </View>
                <View style = {{flex:0.9}}>
                    {
                        this.state.allNotifications.length === 0
                        ?(
                            <View style = {{flex:1 , justifyContent:'center' , alignItems:'centers'}}>
                                <Text style = {{fontSize}}>You have no notifications</Text>
                            </View>
                        )
                        :(

                            <FlatList
                            keyExtractor = {this.keyExtractor}
                            data = {this.state.allNotifications}
                            renderItem = {this.renderItem}
                            />
                        )
                    }
                </View>
            </View>

        )


    }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});