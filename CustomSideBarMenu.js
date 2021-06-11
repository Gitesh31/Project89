import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';
import firebase from "firebase";

export default class CustomSideBarMenu extends React.Component{
    render() {
        return(

            <View style = {{flex:1}}>
                <DrawerItems {...this.props}/>
                <View style = {{flex:1,justifyContent:'center',paddingBottom:30}}>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </View>
        )


}
}