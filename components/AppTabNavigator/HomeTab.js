import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Icon, Container, Content, Thumbnail, Header, Body, Left, Right} from 'native-base';
import CardComponent from '../CardComponent';

export default class extends Component {
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="home" style={{color: tintColor}} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#efefef' }}
         
          // androidStatusBarColor="red"
          >
          <Left style={{flex:1}}>
            <Icon name='camera'style={{paddingLeft: 10,}} />
          </Left>
          <Body style={{flex:1}}>
            <Text style={{ alignSelf: "center" }} >Instagram</Text>
          </Body>
          <Right style={{flex:1}}>
            <Icon name='send'style={{paddingRight: 10,}} />
          </Right>
        </Header>
      
        <Content>
          <View style={{height:100}}>
            <View style={{flex:1, flexDirection:'row',
            justifyContent:'space-between',alignItems:'center',
            paddingHorizontal:7 }}>
              <Text style={{fontWeight:'bold'}} >Stories</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Icon name='md-play' style={{fontSize: 14,}} />
                  <Text  style={{fontWeight:'bold'}} >Watch all</Text>
              </View>

            </View>
            <View>
              <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      alignItems:'center',
                      paddingStart:5,
                      paddingEnd:5
                    }}
                    >
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
                
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
                <Thumbnail 
                  style={{marginHorizontal:5, borderColor:'pink',
                          borderWidth:2}}
                  source={require('../common/nabel.jpg')}  />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" 
           likes="101" />
           <CardComponent imageSource="2" 
           likes="201" />
           <CardComponent imageSource="3" 
           likes="301" />
           
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'white',
    
  }
})