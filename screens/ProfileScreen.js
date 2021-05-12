import React from 'react';
import {View, SafeAreaView, StyleSheet } from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack';
import {Avatar, Title, Caption, Text, TouchableRipple,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileScreen = () => {
    return(
        <SafeAreaView style={{flex: 1}} >

            <View  style={{paddingHorizontal: 30, marginBottom: 25}}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
          
              {/* //profile image */}
                   <Avatar.Image
                   source={{

                    uri: 'https://unsplash.com/photos/2LowviVHZ-E',
                   }}
                   size={80}
                   />
                   <View style={{marginLeft: 20}}>
                       <Title style={{fontSize: 19,fontWeight: 'normal', marginLeft: 20}}>Mussa Mustapha</Title>
                       <Caption style={{fontSize: 14,lineWeight: 14, fontWeight: '500',marginLeft: 20}}>@Mussa Mustapha</Caption>
                   </View>
         </View>


        {/* Customer details section*/}
         <View style={{paddingHorizontal: 30,marginBottom: 25}}>

             {/* location  style (row)*/}
            <View style={{flexDirection: 'row',marginBottom: 10}}>
              <Icon name="map" size={20}/>
               <Text style={{color:"#777777", marginLeft: 20}}>Morogoro,Tanzania</Text>
            </View>

                 {/* Phone number */}
            <View style={{flexDirection: 'row',marginBottom: 10,}}>
              <Icon name="phone" size={20}/>
               <Text style={{color:"#777777", marginLeft: 20}}>0742944121</Text>
            </View>

                  {/* Email */}
            <View style={{flexDirection: 'row',marginBottom: 10,}}>
              <Icon name="email" size={20}/>
               <Text style={{color:"#777777", marginLeft: 20}}>Mussamustapha0306@gmail.com</Text>
            </View>
            </View>
  
      

            <View styles={{borderBottomColor: 'ddddddd',
                           borderBottomWidth:  1,
                           borderTopColor: 'ddddddd',
                           borderWidth: 1,
                           flexDirection: 'row',
                           height: 100,
                           }}>
                  {/* how much amount we have style(info box)*/}
             
            
         </View>
               
               {/* style menuWrapper */}
          <View style={{marginTop: 10}}>

          <TouchableRipple onPress={()  =>  {}}>

               {/* style menuItem */}
            <View  style={{flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 30}}>
                    <Icon name="heart-outline"  color="#FF6347"  size={25}/>
                   {/* style menuItemText */}
                    <Text style={{color: '#777777', marginLeft: 20, fontWeight: '600', fontSize: 16, lineHeight: 26}}>Your Favorite Products</Text>
            </View>
          </TouchableRipple>


          <TouchableRipple onPress={()  =>  {}}>

            <View  style={{flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 30}}>
                    <Icon name="share"  color="#FF6347"  size={25}/>
                    <Text style={{color: '#777777', marginLeft: 20, fontWeight: '600', fontSize: 16, lineHeight: 26}}>Share</Text>
            </View>
          </TouchableRipple>
          </View>


          <TouchableRipple onPress={() => {}}>

            <View  style={{flexDirection: 'row', paddingVertical: 15, paddingHorizontal: 30}}>
                <Button style={{alignItems: "center"}}>Edit Profile</Button>
                <MaterialCommunityIcons.Button
          name="account-edit"
          size={25}
          backgroundColor="#fff"
          color="#000"
          onPress={()  => navigation.navigate('EditProfile')}
          />
                    
            </View>
          </TouchableRipple>
          </View>
        </SafeAreaView>
    );
};
 
const Stack = createStackNavigator();

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {

        flex: 1,
    },

    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    caption:{

        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },

    row:{
        flexDirection: 'row',
        marginBottom: 10,
    },

    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth:  1,
        borderTopColor: '#dddddd',
        borderWidth: 1,
        flexDirection: 'row',
        height: 100,


    },

    infoBox:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuWrapper: {
        marginTop: 10
    },

    menuItem:{
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 15,
        
    },

    menuItemText: {
         color: '#777777',
         marginLeft: 20,
         fontWeight: '600',
         fontSize: 16,
         lineHeight: 26
    },






}); 



