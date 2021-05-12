import React from 'react';
import {
    View,
    Text,
    Button,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity
    
} from 'react-native';
//import ReactDOM from 'react-dom';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';



const SplashScreen = ({navigation}) => {

     return(
          <View  style={styles.container}>
            
            

            <View style={styles.header}>
        
        
        
        <Animatable.Image
              animation="bounceIn"
              duration=""
             source={require('../assets/logo.jpg')}
             style={{width: height_logo,height: height_logo}}
             resizeMode="stretch"
                
        />
        

            </View>
              <Animatable.View style={styles.footer}
                             animation="fadeInUpBig"
              >
        
                    <Text style={styles.title}>Delivery 24/7</Text>
                    <Text style={styles.text}>Sign In With Account</Text>
                <View style={styles.Button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                    <LinearGradient
                          // Background Linear Gradient
                          colors={['#08d4c4', '#01ab9d']}
                          style={styles.signIn}>
                    <Text style={{color: 'white',fontWeight: 'bold'}}>Get Started</Text>
                    <MaterialIcons
                    name="navigate-next"
                        color="#fff"
                        size={20}/>
                        
                    
                     </LinearGradient>
                     </TouchableOpacity>
                     </View>
              </Animatable.View>


          </View>
);
};

export default SplashScreen;


const {height} = Dimensions.get("screen");
//placing logo using 20% of the screen
const height_logo = height * 0.28;



const styles = StyleSheet.create({

    container: {
 
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
    },

    testSign: {
 
        color: 'white',
        fontWeight: 'bold',
        
       },

    signIn: {
 
        flex: 2,
        width: 150,
        height: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection: 'row'
       },


       Button:{
        alignItems: 'flex-end',
        marginTop: 30 
       },

       text:{
        color: 'grey',
        marginTop: 5
       },

       title:{
        color: '#05375a',
        fontSize: 20,
        fontWeight: 'bold'
       },


       logo:{
        width: height_logo,
        height: height_logo
       },

       
       header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 180
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },

 });