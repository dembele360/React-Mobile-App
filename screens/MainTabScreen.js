import  React from 'react';
import {View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from './NotificationsScreen';
import HistoryScreen from './HistoryScreen';
import EditProfileScreen from './EditProfileScreen';
import { Avatar } from 'react-native-paper';
import CardListScreenM from './CardListScreenM';
import CardListScreenL from './CardListScreenL';
import CardListScreenO from './CardListScreenO';
import CardListScreenOryx from './CardListScreenOryx';
import CardListScreenTaifa from './CardListScreenTaifa';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const HistoryStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(

    <Tab.Navigator
     initialRouteName="Home"
     activeColor="#fff"
     barStyle={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#ff6347',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home-sharp" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        // tabBarLabel: 'Profile',
        // tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
        headerRight : ()  =>(
          <MaterialCommunityIcons.Button
            name="account-edit"
            size={25}
            backgroundColor="#fff"
            color="#000"
            onPress={()  =>  navigation.openDrawer()}
          
          />
             
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsStackScreen}
      options={{
        tabBarLabel: 'updates',
        tabBarColor: '#d02869',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-navigate" color={color} size={26} />
        ),
      }}
    />

<Tab.Screen
      name="History"
      component={HistoryStackScreen}
      options={{
        tabBarLabel: 'History',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-archive" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>

  

);

export default MainTabScreen ;



const HomeStackScreen = ({navigation}) =>(
       
    <HomeStack.Navigator 
    screenOptions={{
        headerStyle: {
            backgroundColor: '#ff6347',
            shadowColor:'#fff',
            elevation: 0
        },
        headerTintColor: '#fff',
        headerTitleStyles: {
            fontWeight: 'bold'
        },
    }}
    >
     <HomeStack.Screen
     name="home"
     component={HomeScreen}
     options={{
         title: 'Overview',
         headerRight: ()=>(
           <View style={{flexDirection:'row', marginRight: 3}}>
          <Icon.Button
          name="ios-search"
          size={20}
          color="#333"
          backgroundColor="#fff"
          />


         <TouchableOpacity style={{paddingHorizontal: 10, marginTop: 5}}   onPress={()  =>  {{navigation.navigate('Profile')}}}>
         <Avatar.Image
           source={{

            uri: 'https://unsplash.com/photos/2LowviVHZ-E',
           }}
           size={35}
         />
        </TouchableOpacity >
          </View>
         ),

    }}
     
     
     
     
     
     />

             {/* Creating another screen for ordering manjis gas */}
  <HomeStack.Screen
    name="CardListScreenM"
    component={CardListScreenM}
    options={({route})   =>  ({
          title: route.params.title

    })}
  /> 

  
             {/* Creating another screen for ordering lake gas */}
             <HomeStack.Screen
    name="CardListScreenL"
    component={CardListScreenL}
    options={({route})   =>  ({
      title: route.params.title

})}
  />


             {/* Creating another screen for ordering oryx gas */}
             <HomeStack.Screen
    name="CardListScreenOryx"
    component={CardListScreenOryx}
    options={({route})   =>  ({
      title: route.params.title

})}
  />


             {/* Creating another screen for ordering Taifa gas */}
             <HomeStack.Screen
    name="CardListScreenTaifa"
    component={CardListScreenTaifa}
    options={({route})   =>  ({
      title: route.params.title

})}
  />

             {/* Creating another screen for ordering  orange gas */}
             <HomeStack.Screen
    name="CardListScreenO"
    component={CardListScreenO}
    options={({route})   =>  ({
      title: route.params.title

})}
  />




  <HomeStack.Screen  name="Product Finder" component={HomeScreen}  options={{}}
      />
</HomeStack.Navigator>
);


const ProfileStackScreen = ({navigation}) =>(
  
<ProfileStack.Navigator 
screenOptions={{
   headerStyle: {
       backgroundColor: '#009387'
   },
   headerTintColor: '#000',
   headerTitleStyles: {
       fontWeight: 'bold'
   }
}}
>
<ProfileStack.Screen
   name="Profile" 
   component={ProfileScreen}  
   options={{
     headerRight: () =>(
        
       <MaterialCommunityIcons.Button
          name="account-edit"
          size={25}
          backgroundColor="#fff"
          color="#000"
          onPress={()  => navigation.openDrawer()}
          />
     ),
}}
 />
 <ProfileStackScreen
   name="EditProfile"
   options={{
     title: 'Edit Profile'

   }}
   component={EditProfileScreen}
 />
</ProfileStack.Navigator>
);


const NotificationsStackScreen = ({navigation}) =>(
  
<NotificationsStack.Navigator screenOptions={{
   headerStyle: {
       backgroundColor: '#009387'
   },
   headerTintColor: '#fff',
   headerTitleStyles: {
       fontWeight: 'bold'
   }
}}
>
<NotificationsStack.Screen name="Notifications" component={NotificationsScreen}  options={{

}}
 />
</NotificationsStack.Navigator>
);




const HistoryStackScreen = ({navigation}) =>(
  
<HistoryStack.Navigator screenOptions={{
   headerStyle: {
       backgroundColor: '#009387'
   },
   headerTintColor: '#fff',
   headerTitleStyles: {
       fontWeight: 'bold'
   }
}}
>
<HistoryStack.Screen name="History" component={HistoryScreen}  options={{

}}
 />
</HistoryStack.Navigator>
);




