/*import React, {useState, useEffect} from 'react';
import { commerce}  from '../src/lib/commerce'
import Products from '../src/components/Products/Products';
import Navbar from '../src/components/Navbar/Navbar';
import { ScrollView } from 'react-native-gesture-handler';


// //   import {Products, Navbar}  from '../components';

  
  
   const CardListScreenM =() =>{
     const [products, setProducts] = useState([]);

     const fetchProducts = async () => {
         const { data } = await commerce.products.list();
    
         setProducts(data);
       };

       useEffect(() => {
         fetchProducts();
         // fetchCart();
       }, []);
      
       console.log(products);

       return (
           <ScrollView>  
           <div>
               <Navbar/>
           <Products  products={products}/>

          
           </div>
           </ScrollView>       );
   }
   export default CardListScreenM ;

*/

import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { AddProducts } from '../src/components/AddProducts';
import {Home} from '../src/components/Home';
import { Login } from '../src/components/Login';
import { Signup } from '../src/components/Signup';
import { ProductsContextProvider } from '../src/global/ProductsContext';
import { auth, db  } from '../src/Config/Config';
import { CartContextProvider }  from '../src/global/CartContext';
import {Cart } from '../src/components/Cart';
import { Cashout } from '../src/components/Cashout';
import { NotFound } from '../src/components/NotFound';

export class CardListScreenM extends Component {

  //provide the name of the user when logged in
  state={
    user: null
  }
  componentDidMount(){//retrieve whoever logged in and update the state,the pass the user as props
    auth.onAuthStateChanged(user=>{
      if(user){
        //for username part in our navbar, we create a  sate of user with value null
        db.collection('SignUpUserData').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user: null
        })
      }
    })
  }
  
  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
      <BrowserRouter>
        <Switch>
          <Route  exact path ='/'  component={()  => <Home user={this.state.user} />  }/>
          <Route   path ='/addproducts'  component={AddProducts}/>
          <Route   path ='/signup'  component={Signup}/>
          <Route   path ='/login'  component={Login}/>
          <Route   path ='/cartproducts'  component={()=><Cart user={this.state.user}/>}/>
          <Route   path ='/cashout'  component={()=><Cashout user={this.state.user}/>}/>
          <Route component={NotFound} />

       
        </Switch>
      </BrowserRouter>
      </CartContextProvider>
      </ProductsContextProvider>
    )
  }
}

export default CardListScreenM



