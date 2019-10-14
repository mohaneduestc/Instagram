import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import SearchTab from './SearchTab';
import HomeTab from './HomeTab';
import AddMediaTab from './AddMediaTab';
import LikesTab from './LikesTab';
import ProfileTab from './ProfileTab';


const TabNavigator = createMaterialTopTabNavigator({
    HomeTab: HomeTab,
    SearchTab: SearchTab,
    AddMediaTab:AddMediaTab,
    LikesTab:LikesTab,
    ProfileTab:ProfileTab,
    
  },
  {
    animationEnabled:true,
    swipeEnabled:true,
    tabBarPosition:"bottom",
    tabBarOptions:{
      activeTintColor:'#000',
      inactiveTintColor:'#d1cece',
      showIcon: true, 
      showLabel:false
    }
  });
  
  export default createAppContainer(TabNavigator);