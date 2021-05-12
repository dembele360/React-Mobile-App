import React, {createRef} from 'react';
import {View, Text,Platform, Button, StyleSheet, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import  Feather from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {useTheme} from 'react-native-paper';

const EditProfileScreen =() =>{
      const {colors} = useTheme();

     //creating renderInner/header functions 
        const renderInner = () => (
             <View style={styles.panel}>
                 <View style={{alignItems: 'center'}}>
                     <Text style={styles.panelTitle}>Upload Photo</Text>
                     <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
                 </View>

                 <TouchableOpacity style={styles.panelButton}>
                     <Text style={styles.panelButtonTitle}>Take a Photo</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.panelButton}>
                     <Text style={styles.panelButtonTitle}>Choose from Library</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.panelButton} onPress={() => this.bs.current.snapTo(1)}>
                     <Text style={styles.panelButtonTitle}>Cancel</Text>
                 </TouchableOpacity>
             </View>

        );

        const renderHeader = () => (
             <View  style={styles.header}>
                   <View  style={styles.panelHeader}>
                       
                   <View  style={styles.panelHeader}></View>


                   </View>

             </View>
            
        );



    // creating reference using create reference hook

     bs = React.createRef();
    fall= new Animated.Value(1);
  
    return (

       <View  style={{
           flex: 1
   
       }}>


            <BottomSheet
               ref={this.bs}
               snapPoints={[330, 0]}
               
            //    it define what we want to define from bottom
               renderContent={this.renderInner}
               renderHeader={this.renderHeader}
               initialSnap={1}
               callbackNode={this.fall}
               enabledGestureInteraction={true}
              
               
            />
        
           <Animated.View style={{margin: 20}}>

               <View  style={{alignItems: 'center'}}>
                   <TouchableOpacity  onPress={()=> this.bs.current.snapTo(0)}>

                      <View style={{
                          height: 100,
                         width: 100,
                         borderRadius: 15,
                          justifyContent: 'center',
                           alignItems:'center'}}>

                         
                         <ImageBackground
                           source={{
                               uri: 'https://unsplash.com/photos/2LowviVHZ-E',
                           }}
                           style={{height:100, width: 100}}
                           imageStyle={{borderRadius: 15}}
                         >
                             <View style={{
                                  flex: 1,
                                  justifyContent: 'center',
                                  alignItems: 'center'
                             }}>
                                 <Icon  name="camera" size={35} color="#fff" style={{
                                     opacity: 0.7,
                                     alignItems: 'center',
                                     borderWidth: 1,
                                     borderColor: '#fff',
                                     borderRadius: 10,
                                 }}/>
                             </View> 
                         </ImageBackground>
                      </View>
                   </TouchableOpacity>

                    <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>Mussa Dembele</Text>

               </View>
  {/* text input fields */}
              <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: 'white',
                  paddingBottom: 5, 
              }} >
              
              <FontAwesome name="user-o"  size={25}/>
              <TextInput
                   placeholder="First name"
                   placeholderTextColor="#666666"
                   autoCorrect={false}
                   style={{
                       flex: 1,
                       marginTop: Platform.o ='ios'? 0:-12,
                       paddingLeft: 10,
                       color: '#000000',

                   }}
              />
              </View>
              <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5, 
              }} >
              
              <FontAwesome name="user-o"  size={25}/>
              <TextInput
                   placeholder="Last name"
                   placeholderTextColor="#666666"
                   autoCorrect={false}
                   style={{
                       flex: 1,
                       marginTop: Platform.o ='ios'? 0:-12,
                       paddingLeft: 10,
                       color: '#05375a',

                   }}
              />
              </View>
              <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5, 
              }} >
              
              <Feather name="phone"  size={25}/>
              <TextInput
                   placeholder="Phone Number"
                   placeholderTextColor="#666666"
                   keyboardType="number-pad"
                   autoCorrect={false}
                   style={{
                       flex: 1,
                       marginTop: Platform.o ='ios'? 0:-12,
                       paddingLeft: 10,
                       color: '#05375a',

                   }}
              />
              </View>

              <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5, 
              }} >
              
              <FontAwesome name="envelope-o"  size={25}/>
              <TextInput
                   placeholder="Email"
                   placeholderTextColor="#666666"
                   autoCorrect={false}
                   style={{
                       flex: 1,
                       marginTop: Platform.o ='ios'? 0:-12,
                       paddingLeft: 10,
                       color: '#05375a',

                   }}
              />
              </View>

              <View style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f2f2f2',
                  paddingBottom: 5, 
              }} >
              
              <Icon name="map-marker-outline"  size={25}/>
              <TextInput
                   placeholder="Location"
                   placeholderTextColor="#666666"
                   autoCorrect={false}
                   style={{
                       flex: 1,
                       marginTop: Platform.o ='ios'? 0:-12,
                       paddingLeft: 10,
                       color: '#05375a',

                   }}
              />
              </View>
            
            <TouchableOpacity style={styles.commandButton} onPress={()  => {}}>
               
                   <Text>Submit</Text>

            </TouchableOpacity>
           </Animated.View>
       </View>
    );
};

export default EditProfileScreen;


const styles = StyleSheet.create({

   container: {

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   },

   commandButton: {
       padding: 15,
       borderRadius: 10,
       backgroundColor: '#FF6347',
       alignItems: 'center',
       marginTop: 10,
       borderRadius: 25
   },


    header :{
        backgroundColor: '#FFFFFF'  ,
        shadowColor: '#333333',
        shadowOffset: {width: -2, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        

      },

      panelHandle: {
          width: 40,
          height: 8,
          borderRadius: 4,
          backgroundColor: '#000',
          marginBottom: 10,
      }

});