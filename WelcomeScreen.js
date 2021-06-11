import React from 'react';
import { StyleSheet, Text, View ,FlatList , TouchableOpacity, Touchable , TextInput} from 'react-native';

export default class WelcomeScreen extends React.Component{

    render(){

        return(
            <View>
                <Text style={{fontSize:5}}>Welcome!</Text>
                <TextInput
                    placeholder = {"Coutry Currency Code"}
                    maxLength = {8}
                    onChangeText = {(text) => {

                        this.setState({

                        currencuCode : text

                        })



                    }
                }
            />
            </View>
        )


    }

}
