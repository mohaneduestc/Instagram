import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left,
Button, Icon } from 'native-base';


export default class CardComponent extends Component {


  render() {
      const images ={
          "1": require('./common/tall.jpg'),
          "2": require('./common/Mag.jpg'),
          "3": require('./common/Group.jpg')
      }
    return (
        <Card>
        <CardItem>
            <Left>
               <Thumbnail source={require('./common/Shek.jpg')}/>
                  <Body>
                      <Text>Mohaned</Text>
                      <Text note>August 29, 2018</Text>
                  </Body>
           </Left>
        </CardItem>
        <CardItem>
            <Image source ={images[this.props.imageSource]}
             style={{height:250, width:null, flex:1}} />
        </CardItem>
        <CardItem style={{height:45}}>
            <Left>
                <Button transparent>
                    <Icon name='heart'
                      style={{color:'black'}} />
                </Button>
                <Button transparent>
                    <Icon name='chatbubbles'
                      style={{color:'black'}} />
                </Button>
                <Button transparent>
                    <Icon name='share'
                      style={{color:'black'}} />
                </Button>
            </Left>
        </CardItem>
        <CardItem style={{height:20}}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>
        <CardItem>
            <Body>
                <Text>
                <Text style={{fontWeight:'bold'}}>Worked </Text>
             in various research projects in the 
            area of information and telecommunication 
            engineering. During this period, I worked in 
            projects of small teams, had few publications 
            and scientific papers, and learned to create 
            software simulation environments
            </Text>
            </Body>
            
        </CardItem>
     </Card>
    );
  }
}
