import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import {Icon,Button, Container, Content, Thumbnail, Header, Body, Left, Right} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardComponent from '../CardComponent';


var images=[
      require('../common/images/1.jpg'),
      require('../common/images/2.jpg'),
      require('../common/images/3.jpg'),
      require('../common/images/4.jpg'),
      require('../common/images/5.jpg'),
      require('../common/images/6.jpg'),
      require('../common/images/7.jpg'),
      require('../common/images/8.jpg'),
      require('../common/images/9.jpg'),
      require('../common/images/10.jpg'),
      require('../common/images/11.jpg'),
      require('../common/images/12.jpg'),
      require('../common/images/13.jpg'),
      require('../common/images/14.jpg'),
      require('../common/images/15.jpg'),
    ]
 
    var {width, height}= Dimensions.get('window');
export default class ProfileTab extends Component {
    state={
      activeIndex:0
    }
   
    static navigationOptions = {
        tabBarIcon:({tintColor})=>(
          <Icon name="person" style={{color: tintColor}} />
        )
      }
      segmentClicked=(index)=>{
        this.setState({activeIndex:index })
      }
      firstSectionImage=()=>{
        return images.map((image, index)=>{
          return(
            <View key={index} style ={[ {width:(width/3)}, {height:width/3},
                  index%3 !==0 ? {paddingleft:2, paddingTop:2}:{paddingTop:2} ]} >
              
              <Image style={{width:undefined, height:undefined, flex:1}}
                  source={image} />
            </View>
          )
          
        })
        
      }
      renderSection=()=>{
        if (this.state.activeIndex == 0) {
          return(
            <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
              {this.firstSectionImage()}
              
            </View>

          )
          }else if(this.state.activeIndex==1){
            return(
              <View >
                <CardComponent imageSource="1" 
                      likes="101" />
                <CardComponent imageSource="2" 
                      likes="201" />
                <CardComponent imageSource="3" 
                      likes="301" />
                
              </View>
  
            )
        }
      }
  render() {
    return (
      <Container style={{flex:1}}>
        <Header style={{ backgroundColor: '#efefef' }}
         
          // androidStatusBarColor="red"
          >
          <Left style={{flex:1}}>
            <Icon name='md-person-add'style={{paddingLeft: 10,}} />
          </Left>
          <Body style={{flex:1}}>
            <Text style={{ alignSelf: "center" }} >Mohaned Giess</Text>
          </Body>
          <Right style={{flex:1}}>
            <EntypoIcon name='back-in-time'style={{paddingRight: 10,
            fontSize:32}} />
          </Right>
        </Header>
        <Content>
          <View>
            <View style={{flexDirection:'row'}} >
              <View>
                <Image source={require('../common/Group.jpg')}
                   style={{width:75, height:75, borderRadius: 37.5}} />

              </View>
              <View style={{flex:3,}}>
                <View style={{flexDirection:'row', marginTop:5, 
                    justifyContent:'space-around'}}>
                    
                    <View style={{alignItems:'center'}} > 
                       <Text>20</Text>
                       <Text style={{fontSize:10,color:'grey'}} >posts</Text>
                    </View>
                    
                    <View style={{alignItems:'center'}} > 
                       <Text>206</Text>
                       <Text style={{fontSize:10,color:'grey'}} >flowers</Text>
                    </View>
                    
                    <View style={{alignItems:'center'}} > 
                       <Text>167</Text>
                       <Text style={{fontSize:10,color:'grey'}} >following</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', paddingTop:10}}>
                  <Button bordered dark 
                    style={{flex:3, justifyContent:'center',
                            height:30, marginLeft:10}} >
                    <Text>Edit Profile</Text>
                  </Button>

                  <Button bordered dark 
                    style={{flex:1, justifyContent:'center',
                            height:30, marginLeft:5, marginRight:10}} >
                    <Icon name="settings" />
                  </Button>

                </View>
              </View>
            </View>
            <View style={{paddingBottom:10, paddingVertical:10}} >
              <Text style={{fontWeight:'bold'}}> Mohaned</Text>
              <Text > www.youtube.com</Text>
              <Text> www.google.com</Text>
            </View>
            <View style={{flex:4, flexDirection:'row', justifyContent:'space-around',
                 borderTopWidth:1, borderTopColor:'grey'  }} >
              <Button 
                  transparent 
                  onPress={()=>this.segmentClicked(0) }
                  active={this.state.activeIndex==0}  >
                <Icon name="apps" 
                    style={[this.state.activeIndex==0?{fontSize:25}:{
                    color:'grey',fontSize:25}]}
                // style={{fontSize:25}} 
                />
              </Button>

              <Button transparent
                onPress={()=>this.segmentClicked(1) }
                active={this.state.activeIndex==1}>
                <FeatherIcon name="list" 
                    style={[this.state.activeIndex==1?{fontSize:25}:{
                    color:'grey',fontSize:25}]}
                // style={{fontSize:25}} 
                />
              </Button>

              <Button transparent
                onPress={()=>this.segmentClicked(2) }
                active={this.state.activeIndex==2}>
                <Ionicons name="ios-people"  
                    style={[this.state.activeIndex==2?{fontSize:25}:{
                    color:'grey',fontSize:25}]}
                // style={{fontSize:25}} 
                />
              </Button>

              <Button transparent
                onPress={()=>this.segmentClicked(3) }
                active={this.state.activeIndex==3}>
                <FeatherIcon name="bookmark"  
                    style={this.state.activeIndex==3?{fontSize:25}:{
                      color:'grey',fontSize:25} }/>
                  
                
              </Button>
            </View>
            {this.renderSection()}
          </View>
        </Content>
        </Container>
    );
  }
}
