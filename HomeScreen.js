import React from 'react';
import { StyleSheet, Text, View ,FlatList , TouchableOpacity, Touchable } from 'react-native';
import * as firebase from 'firebase';

import db from '../config';

export default class HomeScreen extends React.Component{

    renderItem = ({item ,  i}) => {
        console.log(item.item_name);
        return(

            <ListItem
                key = {i}
                title = {item.item_name}
                subtitle = {item.discription}
                titleStyle = {{color:'black' , fontWeight='bold'}}
                rightElement = {
                    <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}>
                        <Text style = {{color:'#ffff'}}>Exchage</Text>
                    </TouchableOpacity>

                }
                bottomDivider
            />

        )
    }

    render(){

        return(

            <FlatList
            keyExtractor = {this.keyExtractor}
            data = {this.state.allRequests}
            renderItem = {this.renderItem}
            />


        )


    }


}