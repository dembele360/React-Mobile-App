// import React from 'react';
// import {Stylesheet, View, Text} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const StarRating = (props)  =>  {

//     //This array will contain our star tags we will include this
//     //array between the view tags

//     let stars = [];

//     //loops 5 times  
//     for(var i=1;i<=5; i++){
//         //set the path to filled stars
//         let name = 'ios-star'

//         //if ratings is lower, set the path to unfilled stars

//         if(i>props.ratings){
//             name='ios-star-outline';
//         }


//         stars.push((<Ionicons  name={name}  size={15}  style={Stylesheet.star}  key={1}/>))
//     }
 
//       return(
//           <View  style={Stylesheet.container}>
//               {stars}
//               <Text  style={styles.text}>({props.reviews})</Text>
          
//           </View>
//       );

    
// }

// export default StarRating;