import React from 'react';
import {View,Text, Button, Stylesheet} from 'react-native';
import Products from '../components/Products';
import Data from "../screens/data.json";


class  CardListScreenM extends React.Component {
    constructor(){
       super();
       this.state = {
          products: Data.products,
          size: "",
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
               <div className="main">
                  <Products products={this.state.products}></Products>
                  
                  
               </div>
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

export default  CardListScreenM






    
