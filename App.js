import  React, {useEffect, Components} from 'react';
import {View,ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ReactDOM from 'react-dom';

import { createDrawerNavigator } from '@react-navigation/drawer';
import  MainTabScreen from "./screens/MainTabScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {DrawerContent}  from './screens/DrawerContent';
import EditProfileScreen  from './screens/EditProfileScreen';
import OrderScreen  from './screens/OrderScreen';
import SettingsScreen  from './screens/SettingsScreen';
import SupportScreen  from './screens/SupportScreen';
import ContactUsScreen  from './screens/ContactUsScreen';
import data from "../src/data.json";

import RootStackScreen from './screens/RootStackScreen';

// import { AuthContext } from '../components/context';


// // import CustomerInsert from 'CustomerInsert';

const Tab = createMaterialBottomTabNavigator();
 const Drawer = createDrawerNavigator();


 
  
   
  //   // creating two state
  //   // loading to check if user is authenticated or not
  //   const [isLoading, setIsLoading] = React.useState(true);

  //   //state to validate our user
  //   const [useToken, setUserToken] =  React.useState(null);


  //  //sign in and out functions
  //  const authContext = React.useMemo(()  =>({


  //   signIn: () =>{

  //     setUserToken('yes');
  //     setIsLoading(false);

  //   },
  //   signOut: () =>{

  //     setUserToken(null);
  //     setIsLoading(false);


  //   },
  //   signUp:  ()  =>  {

  //     setUserToken('vvv');
  //     setIsLoading(false);
  //   }
      

  //  }));



  //   //simulate our login when screen will be rendering
  //   useEffect(()  => {

  //     //javascript function
  //     setTimeout(()   =>{
  //       setIsLoading(false);
  //     }, 1000);

  //   }, []);

  //  //screen to display when loading is set to be true

  //     if(isLoading){
  //      return(

  //       <View style={{flex:1, justifyContent: 'center', alignItems:'center'}} >
  //             <ActivityIndicator size="large"  />

  //       </View>

  //      );



  //     }
  const App = ()=> {
  return (
    <NavigationContainer>
       <Drawer.Navigator drawerContent={props=> <DrawerContent { ... props} />}>
        <Drawer.Screen name=" GAS DELIVERY MOBILE APPLICATION" component={MainTabScreen} />
        <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Drawer.Screen name="OrderScreen" component={OrderScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="ContactUsScreen" component={ContactUsScreen} />

        {/* <Drawer.Screen name="RootStackScreen" component={RootStackScreen} />   */}
        
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
