import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer , createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import  SignupLoginScreen from './screens/SignupLoginScreen.js'

export default class App extends React.Component(){
  
    render(){


      return(
          <AppContainer />
      )

    }
  
  
}

const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Exchange: {screen: ExchangeScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Home"){
        return(
          <Image
          source={require("./assets/Home.jpeg")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Exchange"){
        return(
          <Image
          source={require("./assets/Exchane.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);

const SwitchNavigator = createSwitchNavigator({

  SignupLoginScreen:{screen:SignupLoginScreen},
  TabNavigator:{screen:TabNavigator}




})
const AppContainer =  createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
