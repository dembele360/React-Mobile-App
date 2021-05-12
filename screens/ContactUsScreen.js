import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ContactUsScreen =() =>{

    return (

       <View  style={styles.container}>
           <Text>Phone Numbers</Text>

           <Button
           title="Click Here"
           onPress={() => alert('Button Clicked!')}
           />
       </View>
    );
};

export default ContactUsScreen;


const styles = StyleSheet.create({

   container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   },


});