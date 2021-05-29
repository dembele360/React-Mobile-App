import React from 'react';
import {View, Text, Button, StyleSheet } from 'react-native'; 
// import MapView from 'react-native-maps';
// import {StatusBar} from 'expo-status-bar';




export default function HistoryScreen(){
   return(
           <View style={styles.container}>
              {/* <MapView>


              </MapView>

              <StatusBar style="auto"/> */}


           </View>


   );




}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
});





// import React from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//               initialRegion={{
//                 latitude: 37.78825,
//                 longitude: -122.4324,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421
//               }}
//              style={styles.mapStyle} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   mapStyle: {
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//   },
// });