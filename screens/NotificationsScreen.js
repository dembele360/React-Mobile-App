import React,{useState} from 'react';
// import MapView from 'react-native-maps';
import {View, Text, Button, StyleSheet , Animated, HiddenItemWithActions, TouchableHighlight, TouchableOpacity ,StatusBar,} from 'react-native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '../model/Notifications.js';
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'





const NotificationsScreen = ({navigation}) => {
    const [listData, setListData]= useState(
       Notifications.map((NotificationItem, index)  => ({

          key:'${index}',
          title: NotificationItem.title,
          details: NotificationItem.details,
       }))

       );

       //function for deleting and close row and both they receive rowMap/key
       const closeRow = (rowMap, rowKey)=> {
           if(rowMap[rowKey]){
             rowMap[rowKey].closeRow();
           }
       };


       const deleteRow = (rowMap, rowKey)=> {
            closeRow(rowMap, rowKey);
            const newData = [...listData]
            const prevIndex =  listData.findIndex(item => item.key = rowKey);
            newData.splice(prevIndex, 1);
            setListData(newData);
       };


       const onRowDidOpen= rowKey => {
        console.log('This row opened', rowKey);
      };

      const onLeftActionStatusChange= rowKey => {
        console.log('onLeftActionStatusChange', rowKey);
      };

      const onRightActionStatusChange= rowKey => {
        console.log('onRightActionStatusChange', rowKey);
      };

      const onRightAction = rowKey => {
        console.log('onRightAction', rowKey);
      };

      const onLeftAction= rowKey => {
        console.log('onLeftAction', rowKey);
      };


    const VisibleItem =  props => {
      const {
        data,
        rowHeightAnimatedValue,
        removeRow, 
        leftActionState, 
        rightActionState,
        onRightActionStatusChange 
      }  = props;

      if(rightActionState){
         Animated.timing(rowHeightAnimatedValue,{
           toValue: 0,
           duration: 200,
         }). start(()  =>{
             removeRow();
         });
      }
      
       return (
            <Animated.View style={[styles.rowFront, {height:rowHeightAnimatedValue }]}>
                <TouchableHighlight style={styles.rowFrontVisible}>
                    <View>
                    <Text style={styles.title} numberOfLines={1} >{data.item.title}</Text>
                    <Text style={styles.details} numberOfLines={1} >{data.item.details}</Text>
                    </View>
                </TouchableHighlight>

            </Animated.View>

           
       );

    };


       //functions to return data and row view which they receive data and rowMap
    const renderItem =(data, rowMap)  =>  {

      const rowHeightAnimatedValue = new Animated.Value(60);
        return (
           <VisibleItem 
           data={data}  
           rowHeightAnimatedValue={rowHeightAnimatedValue} 
           removeRow={()   =>deleteRow(rowMap, data.item.key)}
          
           />
        );

    };

    const HiddenItemWithActions = props => {

         const {
           swipeAnimatedValue,
            leftActionActivated,
             rightActionActivated,
              rowActionAnimatedValue,
              rowHeightAnimatedValue,
               onClose,
                onDelete
              } = props;
     
              if(rightActionActivated){
                Animated.spring(rowActionAnimationValue, {
                  toValue: 500,
                }).start();
              }



         return (
            <Animated.View style={styles.rowBack, {height: rowHeightAnimatedValue}}>
               <Text>   Left</Text>
               <TouchableOpacity style={{
                 alignments: 'flex-end',
                 bottom: 0,
                 justifyContent: 'center',
                 position: 'absolute',
                 top: 0,
                 width: 75,
                 paddingRight: 17, 
                 backgroundColor: '#E7ECED',
                 right: 50,
                 borderBottomLeftRadius: 5}}
                 
                 onPress={onClose}
                 >
                  <MaterialCommunityIcons name="close-circle-outline" style={styles.trash}size={25} color="#fff" />
               </TouchableOpacity>


                 <Animated.View style={[styles.backRightBtn, styles.backRightBtnRight,{

                 flex: 1, width: rowActionAnimatedValue

                 } ]}>

                 
               <TouchableOpacity style={{
                 alignments: 'flex-end',
                 bottom: 0,
                 justifyContent: 'center',
                 position: 'absolute',
                 top: 0,
                 width: 75,
                 paddingRight: 17,
                 backgroundColor: 'red',
                 right: -1628,
                 borderTopRightRadius: 5,
                 borderTopLeftRadius: 5,
                 borderBottomRightRadius: 5,
               }}
               
               onPress={onDelete}
               >

                <Animated.View style={[styles.trash, {
                    transform: [
                    {
                      scale: swipeAnimatedValue.interpolate({
                        inputRange: [-90, -45],
                        outputRange: [1,0],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                }]}>

                  <MaterialCommunityIcons name="trash-can-outline" size={25} color="#fff" />
                  </Animated.View>
               </TouchableOpacity>
               </Animated.View>
            </Animated.View>
         );
    }

    const renderHiddenItem =(data, rowMap)  =>  {
      const rowActionAnimatedValue = new Animated.Value(75);
      const rowHeightAnimatedValue = new Animated.Value(60);


      return(
          <HiddenItemWithActions
               data={data}
               rowMap={rowMap}
               rowActionAnimatedValue={rowActionAnimatedValue}
              rowHeightAnimatedValue={rowHeightAnimatedValue}
               onClose={()  =>closeRow(rowMap, data.item.key)}
               onDelete={()  =>deleteRow(rowMap, data.item.key)}
               
          
           />
      );
    };
    


       
  return(
        <View style={styles.container}>
          <StatusBar backgroundColor="#FF6347" barStyle="light-content"/>
          <SwipeListView
             data={listData}
             renderItem={renderItem}
             renderHiddenItem={renderHiddenItem}
             leftOpenValue= {75}
             rightOpenValue= {-127}
             rightActionValue={-200}
             leftActionValue={100}
             onRowDidOpen={onRowDidOpen}
             onLeftActionStatusChange={onLeftActionStatusChange}
             onRightActionStatusChange={onRightActionStatusChange}
             onRightAction={onRightAction}
             onLeftAction={onLeftAction}
             disableRightSwipe
          />     
   </View>
    );
};

  
  
export default  NotificationsScreen;



const styles= StyleSheet.create({

    container: {
        backgroundColor: '#f4f4f4',
        flex: 1,
      },

      backTextWhite: {
        color: '#FFF',
      },

      rowFront: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        margin: 5,
        marginBottom: 15,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

      },

      rowFrontVisible: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
      },

      //  caption: {
      //    fontsize: 50,
      //    color: '#999'

      //  },

      title: {
        fontSize: 50,     //we need to change the size
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
      },

      trash: {
        height: 25,
        width: 25,
        marginRight: 7,
      },

      backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },

      backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 75,
        
      },
      backRightBtn: {
        alignContent: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        paddingRight: 17,

      },
 
      rowBack: {
         alignItems: 'center',
         backgroundColor: '#DDD',
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between',
         paddingLeft: 15,
         borderRadius: 5,
      },
});