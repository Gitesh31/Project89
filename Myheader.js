import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

import db from '../config.js';

const MyHeader = props => {

    getNumberofUnreadNotifications = () => {
        db.collection('all_notifications').where('notification_status', '==' , 'unread').where('targated_user_id', '==' , this.state.userId)
        .onSnapshot({snapshot = () => {


            var unreadNotifications = snapshot.docs.map({doc} => doc.data());
            this.setstate(){

                value: unreadNotifications:length
            }

        }   



            
        })
        }



    }

  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      rightComponent={<Icon name='bell' type = 'font-awesome' color='#696969' size = {25} onPress={() => props.navigation.navigate('Notifications')}/>}
      backgroundColor = "#eaf8fe"
    />
  );
};

export default MyHeader;