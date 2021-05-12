import React from 'react';
import {View,Text, Button, Stylesheet} from 'react-native';

const CardListScreenTaifa = ()  =>  {
     return(
        <View  style={{flex: 1,
            alignItems: 'center',
            justifyContent: 'center'}}>
           <Button
             title="Submit order"
             onPress={()  =>  alert("Button clicked")}
           />
   


        </View>

     );
};

export default  CardListScreenTaifa;

    
//     const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'

//     }


// });