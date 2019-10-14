import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Button, Icon, Fab } from 'native-base';
import TabNavigator from './AppTabNavigator/TabNavigator';


export default class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
      }
    static navigationOptions = {
        header:null
        // headerLeft: <Icon name='camera'style={{paddingLeft: 10,}} />,
        
        // title:"Instegram", headerStyle: {
        //     backgroundColor: '#f4511e',
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',textAlign:"center", 
        //     flex:1 
        //   },
        
        //   headerRight:<Icon name="send"  style={{paddingRight: 10,}}/>
    }
  render() {
    return (
       
        
        <TabNavigator />

        
      
    );
  }
}


