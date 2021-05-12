import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Platform,
    StatusBar


} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
// import { AuthContext } from '../components/context';

const SignInScreen = ({navigation}) => {

    // introducing state to the input of email and password
    const[data, setData]= React.useState({
         email:'',
         Password:'',
         check_textInputChange: false,
         secureTextEntry: true

    });

//passing signIn
const {signIn}  =  React.useContext(AuthContext);



   const check_textInputChange = (val)  => {
       if(val.length !=0){
           setData({
               ...data,
               email: val,
               check_textInputChange: true

           });
       }

       else {
        setData({
            ...data,
            email: val,
            check_textInputChange: false

        });


       }
   }
 
  const handlePasswordChange = (val) =>{
    setData({
        ...data,
        password: val,
        // check_textInputChange: false

    });
  } 

   const updateSecureTextEntry =() => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
        // check_textInputChange: false

    });
   }


     return(
          <View  style={styles.header}>
                <StatusBar backgroundColor= '#009387' barStyle="Light-content"/>
              <View  style={styles.header}>
                     <Text style={styles.text_header}> Welcome To Gas Delivery Mobile Application</Text>
              </View>

              <Animatable.View 
              animation="fadeInUpBig"
              style={styles.footer}>
                     <Text style={styles.text_footer}> Email</Text>
                     

               <View style={styles.action}>
               <FontAwesome
                             name="user-o"
                             color="05375a"
                             size={20}
                          />


                <TextInput
                              placeholder="Your Email"
                              style={styles.textInput}
                              autoCapitalize="none"
                              onChangeText={(val)=>check_textInputChange(val)}
                            
                            />
                {data.check_textInputChange ? 
                <Feather
                              name="check-circle"
                              color="green"
                              size={20}
                              />

                :null}

               </View>

               {/* password field */}
               <Text style={[styles.text_footer, {marginTop: 38}]}> Password</Text>
               <View style={styles.action}>
                <Animatable.View  animation="bounceIn">

                      

                



               <Feather
                             name="lock"
                             color="#05375a"
                             size={20}
                          />
                 </Animatable.View>

                <TextInput
                              placeholder="Your Password"
                              secureTextEntry={data.secureTextEntry ? true : false}
                              style={styles.textInput}
                              autoCapitalize="none"
                              onChangeText={(val)=>handlePasswordChange(val)}
                            
                            />

                {/* provide the power to hide password */}
                 <TouchableOpacity
                 onPress={updateSecureTextEntry}
                 >   
 
            {/* the eye icon conditions  */}
                 {data.secureTextEntry ?   
                <Feather
                              name="eye-off"
                              color="grey"
                              size={20}
                />
                :
                <Feather
                              name="eye"
                              color="grey"
                              size={20}
                />
                 }
                </TouchableOpacity>  

               </View>


                {/* Sign in and Sign out */}
               <View style={styles.button}>
                     <LinearGradient
                     colors={['#08d4c4', '#01ab9d']}
                     style={styles.signIn}
                     >
                         <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                     </LinearGradient>


                {/* Signup button */}
                 <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}
                                style={[styles.signIn, {
                                    buttonColor:'#009387',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                                onPress={()  => {signIn()}}
                 >
                     <Text  style={{fontSize: 18, fontWeight: 'bold', color: '#009387'}}>Sign Up </Text>
                 </TouchableOpacity>



              </View>

            </Animatable.View>
          </View>
);
};

export default SignInScreen;

const styles = StyleSheet.create({

    container: {
 
     flex: 1,
     backgroundColor: '#009387'
    },

    header: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
 
 
 });