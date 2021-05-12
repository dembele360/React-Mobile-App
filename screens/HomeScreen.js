import React from 'react'
import { ScrollView, View, StatusBar, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import {useTheme}  from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CardListScreenM from './CardListScreenM';
// import StarRating from '../components/StarRating';



const HomeScreen =({navigation}) => {
   const {colors}  =  useTheme();


   const theme  =  useTheme();

  
      return(

      <ScrollView style={styles.container}>
        <StatusBar   barStyle={theme.dark ?  'light-content' : 'dark-content'}/>
        <View style={styles.sliderContainer}>
         <Swiper autoplay={true} 
                 horizontal={false}  
                 height={200}
                 activeDotColor="#009387"
                 >
      {/* //an image that will be sliding */}
            <View  style={{flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,}}>

              <Image
              source={require('../assets/banners/16.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
              />
            </View>
          
            <View  style={styles.slide}>

              <Image
              source={require('../assets/banners/18.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
              />
            </View>

            <View  style={styles.slide}>

              <Image
              source={require('../assets/banners/15.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
              />
            </View>

            <View  style={styles.slide}>

              <Image
              source={require('../assets/banners/0.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
              />
             </View>

             <View  style={styles.slide}>
             <Image
              source={require('../assets/banners/11.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
              />
            </View>
            


         </Swiper>
         </View>


        
         {/* <Text  style={{
          alignSelf:'center',
          fontSize: 18,
          fontWeight:'bold',
          color:'#333',
          marginTop: '77'

        }}
        >Select the Gas Category</Text> */}

         <View style={styles.categoryContainer}>
      
           <TouchableOpacity  style={styles.categoryBtn}  onPress={()  =>  navigation.navigate('CardListScreenM', {title: 'Oryx Shopping Cart'})}>

             {/* manjis icon */}
              <View style={styles.categoryIcon}>


                   <FontAwesome5 name="dumpster-fire"  size={30}   color="#ff6347"/>
                   <Text style={[StyleSheet.categoryBtnTxt, {color: "#ff6347"}]}>Manjis</Text>
               </View>
               
               </TouchableOpacity>
               


               <TouchableOpacity  style={styles.categoryBtn}  onPress={()  =>  navigation.navigate('CardListScreenOryx', {title: 'Oryx Products Ordering'})}>
            {/* lake gas icon */}
               <View style={styles.categoryIcon}>


                   <MaterialCommunityIcons name="cookie"  size={30}   color="#ff6347"/>
                   <Text style={[StyleSheet.categoryBtnTxt, {color: "#ff6347"}]}>ORYX</Text>
               </View>
               
               </TouchableOpacity>


               <TouchableOpacity  style={styles.categoryBtn}  onPress={()  =>  navigation.navigate('CardListScreenO' , {title: 'Orange Products Ordering'})}>
               {/* oryx icon */}
               <View style={styles.categoryIcon}>


                   <MaterialCommunityIcons name="cart"  size={30}   color="#ff6347"/>
                   <Text style={[StyleSheet.categoryBtnTxt, {color: "#ff6347"}]}>Orange</Text>
               </View>
               
               </TouchableOpacity>


         
                 
               
          </View>





          <View style={[styles.categoryContainer, {marginTop: 6}] }>
           <TouchableOpacity  style={styles.categoryBtn}  onPress={()  =>  navigation.navigate('CardListScreenL', {title: 'Lake Products Ordering'})}>

             {/* orange icon */}
              <View style={styles.categoryIcon}>


                   <FontAwesome name="fire-extinguisher"  size={30}   color="#ff6347"/>
                   <Text style={[StyleSheet.categoryBtnTxt, {color: "#ff6347"}]}>Lake</Text>
               </View>
               
               </TouchableOpacity>
               


               <TouchableOpacity  style={styles.categoryBtn}  onPress={()  =>  navigation.navigate('CardListScreenTaifa', {title: 'Taifa Products Ordering'})}>
            {/* lake gas icon */}
               <View style={styles.categoryIcon}>


               <FontAwesome5 name="fire-alt"  size={30}   color="#ff6347"/>
               <Text style={[StyleSheet.categoryBtnTxt, {color: "#ff6347"}]}>Taifa </Text>
               </View>
               
               </TouchableOpacity>


  


               <TouchableOpacity  style={styles.categoryBtn}  onPress={()  =>  {}}>
               <View style={styles.categoryIcon}>


                 <MaterialIcons name="expand-more"  size={30}   color="#ff6347"/>

               </View>
               </TouchableOpacity>

               
          </View>

        <View  style={styles.cardsWrapper}>

        <Text  style={{
          alignSelf:'center',
          fontSize: 18,
          fontWeight:'bold',
          color:'#333',

        }}
        >Recently Viewed</Text>
                {/* card 1 of recently  */}
        <View  style={styles.card}>

        <View  style={styles.cardImgWrapper}>

              <Image
              source={require('../assets/banners/8.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
              />
            </View>
               
               <View style={styles.cardInfo}>
                  <Text  style={styles.cardTitle}>Explore near stores to get our products</Text>
                   {/* <StarRating ratings={4}  reviews={99}/>
                    */}

                   <Text  style={styles.cardDetails}>One of the biggest store around Morogoro all cheapest ga cylinder are found here.Kindly click to access our services</Text>
               </View>


        </View>


       {/* card two of recently  */}
        <View  style={styles.card}>

          <View  style={styles.cardImgWrapper}>

                 <Image
                 source={require('../assets/banners/9.jpg')}
                 resizeMode="cover"
                style={styles.cardImg}
           />
           </View>
       
         <View style={styles.cardInfo}>
          <Text  style={styles.cardTitle}>Get 10% discount if you order our product within 30 days</Text>
           {/* <StarRating ratings={4}  reviews={99}/>
            */}

           <Text  style={styles.cardDetails}>One of the biggest store around Morogoro all cheapest ga cylinder are found here.Kindly click to access our services</Text>
        </View>


</View>








                          {/* card 3 of recently  */}
        <View  style={styles.card}>

              <View  style={styles.cardImgWrapper}>

                     <Image
                      source={require('../assets/banners/14.jpg')}
                      resizeMode="cover"
                      style={styles.cardImg}
                      />
               </View>
       
            <View style={styles.cardInfo}>
                     <Text  style={styles.cardTitle}>Connect and access our service 24/7</Text>
           {/* <StarRating ratings={4}  reviews={99}/>
            */}

                       <Text  style={styles.cardDetails}>One of the biggest store around Morogoro all cheapest ga cylinder are found here.Kindly click to access our services</Text>
               </View>


              </View>

                         {/* card 4 of recently  */}

                 <View  style={styles.card}>

              <View  style={styles.cardImgWrapper}>

                    <Image
                       source={require('../assets/banners/4.jpg')}
                       resizeMode="cover"
                      style={styles.cardImg}
                       />
                      </View>
       
       <View style={styles.cardInfo}>
          <Text  style={styles.cardTitle}>New product available in our store</Text>
           {/* <StarRating ratings={4}  reviews={99}/>
            */}

           <Text  style={styles.cardDetails}>One of the biggest store around Morogoro all cheapest ga cylinder are found here.Kindly click to access our services</Text>
       </View>


</View>






        </View>
      </ScrollView>
      );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },

  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },

   wrapper: {

   },
     sliderContainer : {
       height: 200,
       width: '90%',
       marginTop: 10,
       justifyContent: 'center',
       alignSelf: 'center',
       borderRadius: 8,

     },

     categoryBtnTxt:{
       alignSelf: 'center',
       marginTop: 5,
       color: '#de4f35'
     },

     categoryIcon:{
      alignItems: 'center',
      borderWidth: 0,
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: 'black',
      borderRadius: 50,

      
    },

    categoryBtn:{
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',

    },

    categoryContainer:{
      flexDirection: 'row',
      width: '90%',
      marginHorizontal: 0,
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,

    },

    cardDetails: {
      fontSize: 12,
      color:  '#444'
    },


    cardTitle: {
        fontWeight: 'bold',
    },


    cardInfo: {
       flex: 2,
       padding: 10,
       borderColor:'#ccc',
       borderWidth: 1,
       borderLeftWidth: 0,
       borderBottomRightRadius: 8,
       borderTopRightRadius: 8,
       backgroundColor: '#fff' 


    },


    cardImg: {
       height: '100%',
       width: '100%',
       alignSelf: 'center',
       borderBottomRightRadius: 0,
       borderRadius: 8,
       borderTopRightRadius: 0,

      
    },

    cardImgWrapper: {
       flex: 1,
    },


    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,


    },



    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },


});