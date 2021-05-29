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
// import store from "../src/reducers/store";
// import {Provider}  from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';


import RootStackScreen from './screens/RootStackScreen';

// import { AuthContext } from '../components/context';


// // import CustomerInsert from 'CustomerInsert';

const Tab = createMaterialBottomTabNavigator();
 const Drawer = createDrawerNavigator();


  const App = ()=> {
  return (
    // <Provider  store={store}>
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
    //</Provider>
  );
}

export default App;
