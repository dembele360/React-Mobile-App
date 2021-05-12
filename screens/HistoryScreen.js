import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native'; 
import {MapView} from 'expo';




const HistoryScreen = () => {
    return(
        <View style={styles.container}>
             <MapView
             initialRegion={{
               latitude: 8.4979744,
               longitude: 4.5828097,
               latitudeDelta: 0.045,
               longitudeDelta: 0.045,

             }}
            style={styles.mapView}
            />
           
        </View>
        
    );
};

export default  HistoryScreen;



const styles= StyleSheet.create({

      container:   {

        flex: 1,
       
      },
      mapView:   {

        flex: 1,
       
      }

});