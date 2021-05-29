import  React from 'react';
import { View, Text,  Test, StyleSheet } from 'react-native';
import {
        Avatar,
        Title,
        Caption,
        Paragraph,
        Drawer,
        TouchableRipple,
        Switch
} from 'react-native-paper';

import {

       DrawerContentScrollView,
       DrawerItem


} from '@react-navigation/drawer';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export function DrawerContent(props){

// creating the function for the toggle preference of dark and light button

const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  
const toggleTheme =() => {
    setIsDarkTheme(!isDarkTheme);
}
    return(
   
         <View  style={{flex:1}}>
             <DrawerContentScrollView  { ... props}  >
               
               <View style={{flex: 1}}>

                     {/* //user details sections............ */}
                     <View  style={{paddingLeft: 20}}>

                            <View style={{flexDirection: 'row', marginTop: 15}} >
                          <Avatar.Image
                             source={{

                                 
                                
                                uri:'https://www.shutterstock.com/image-vector/gas-tank-cartoon-vector-illustration-black-556367875'
                                
                                
                             }}
                          size={50}
                          />
                          <View style={{ marginLeft: 15,  flexDirection: 'column'}}>
                              <Title style={{fontSize: 16,marginTop: 3,fontWeight: 'bold', color: "#9c9c9c" }}>MUSA</Title>
                              <Caption style={{fontSize: 16, marginTop: 3, fontWeight: 'bold', color: "#9c9c9c"}}>@Dembele360</Caption>
                          </View>
                          </View>

                     </View>

                   {/* Items to Be Seen In Drawer Sections */}
                 <Drawer.Section Style={{marginTop: 15, color: "#000000"}}>

                   {/* HOME ICON */}
                 <DrawerItem
                  icon={({color, size})   => (

                     <Icon

                      name="home-outline"
                      color={color}
                      size={size}
                      />
                  )}
                     label="Home"
                     onPress={() =>   {props.navigation.navigate('Home')}  }
                  
                  />

                   {/* profile */}
                  <DrawerItem
                  icon={({color, size})   => (

                     <Icon

                      name="account-outline"
                      color={color}
                      size={size}
                      />
                  )}
                     label="Edit Profile"
                     onPress={() =>   {props.navigation.navigate('EditProfileScreen')}  }
                  
                  />
                    {/* login */}
                 <DrawerItem
                  icon={({color, size})   => (

                     <Icon

                      name="book"
                      color={color}
                      size={size}
                      />
                  )}
                     label="Order"
                     onPress={() =>   {props.navigation.navigate('OrderScreen')}  }
                  
                  /> 

                      {/* settings*/}
                   <DrawerItem
                  icon={({color, size})   => (

                     <Icon

                      name="cog"
                      color={color}
                      size={size}
                      />
                  )}
                     label="Settings"
                     onPress={() =>   {props.navigation.navigate('SettingsScreen')}  }
                  
                  />


                    {/* number 5 */}

                 <DrawerItem
                  icon={({color, size})   => (

                     <Icon

                      name="account-check-outline"
                      color={color}
                      size={size}
                      />
                  )}
                     label="Support"
                     onPress={() =>   {props.navigation.navigate('SupportScreen')}  }
                  
                  />



                    {/* number 6 */}

                <DrawerItem
                  icon={({color, size})   => (

                     <Icon

                      name="chat"
                      color={color}
                      size={size}
                      />
                  )}
                     label="Contact-Us"
                     onPress={() =>   {props.navigation.navigate('ContactUsScreen')}  }
                  
                  />
                 </Drawer.Section>

                 {/* switch menu */}
               <Drawer.Section title="Preferences">
                   <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View  style={{flexDirection: 'row',
                                       justifyContent: 'space-between',
                                       paddingVertical: 12,
                                       paddingHorizontal: 16,
                                      }}>

                            <Text>Dark Theme</Text>
                            
                            <View pointerEvents="none">
                            <Switch  value={isDarkTheme}/>
                            </View>
                        </View>
                            
                   </TouchableRipple>

             </Drawer.Section>
     




               </View>

             </DrawerContentScrollView>


             <Drawer.Section  style={styles.bottomDrawerSection}>

                  

                  <DrawerItem
                  icon={({color, size})   => (

                     <Icon

                      name="power"
                      color={color}
                      size={size}
                      />
                  )}
                     label="Log Out"
                     onPress={() =>   {}  }
                  
                  />
              

             </Drawer.Section >

             

         </View>




    );
}

const styles = StyleSheet.create({

    drawerContent:{
        flex: 1,
        backgroundColor: "#9c9c9c"
    },


    section: {
        paddingLeft: 20,
    },


    title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',

    },

    row:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    paragraph: {
        fontSize: 14,
        lineHeight: 14,
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',

    },

    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 3,
    },


    Paragraph: {
      fontWeight: 'bold',
      marginRight: 3,


    },
    drawerSection: {
        marginTop: 15,
    },

    bottomDrawerSection: {

      marginBottom: 15,
      borderBottomColor: '#9c9c9c',
      borderTopWidth: 1

    },

    // preference: {color: "#9c9c9c"
    //    flexDirection: 'row',
    //    justifyContent: 'space-between',
    //    paddingVertical: 12,
    //    paddingHorizontal: 16,


    // },
  });

























































