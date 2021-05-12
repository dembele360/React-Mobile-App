import React from 'react';
import {View,Text, Button, Stylesheet} from 'react-native';
import data from "../src/data.json";


class CardListScreenM  extends React.Components {
   
      constructor(){
         super();
         this.state ={
            products: data.products,
            size:"",
            sort: "",
         }
      }

      render(){
     return(
        <div className="grid-container">

           <header >
              <a href="/" >MyGAS Shopping Cart</a>
           </header>
           
           <main>
            <div className="content">
               <div className="main">Products</div>
               <div className="sidebar">Cart Items</div>
            </div>  
           </main>
    
           <footer>
               All right reserved @Dembele360.
           </footer>
        </div>

     );
   }
};

export default  CardListScreenM;

// const styles = StyleSheet.create ({

//    container: {

//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center'
//      },

// });







    
