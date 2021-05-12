import React from 'react';
import {View,Text, Button, Stylesheet} from 'react-native';

const CardListScreenO = ()  =>  {
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

export default  CardListScreenO;

    
//     const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'

//     }


// });