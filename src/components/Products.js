import React , { useContext } from 'react'
import { ProductsContext } from '../global/ProductsContext';
import { CartContext } from '../global/CartContext';



   // const { dispatch } = useContext(CartContext);
export const Products = () => {

    const { products } = useContext(ProductsContext);
   // console.log(products);

//    const data = useContext(CartContext);
//    console.log(data);

     const {dispatch}= useContext(CartContext);

    return (
        <>
        {products.length !== 0 && <div style={{textAlign:"center"}}>Products</div>}
        <div className='products-container'>
            {products.length === 0 && <div><h1>Slow Internet...please wait</h1></div>}
            {products.map(product => (
                <div className='product-card' key={product.ProductID}>
                    <div className='product-img'>
                        <img src={product.ProductImg} alt="not found" />
                    </div>
                    <div className='product-name'>
                        {product.ProductName}
                    </div>
                    <div className='product-price'>
                        Tsh {product.ProductPrice}.00
                </div>
                    <button className='addcart-btn' onClick={() =>{dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}}>ADD TO CART</button>
                </div>
            ))}
        </div>
    </>
    )
}
