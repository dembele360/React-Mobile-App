 /*import React from 'react';
 import Grid from '@material-ui/core/Grid';
 import Product from './Product/Product';
 import useStyles from './styles';


const products = [
        {
            id: 1,
            name: 'Oryx gas',
            description: 'new product arrived this week',
            price: 'Tsh 33',
            image: "../1.JPG"
        },
        {
            id: 2,
            name: 'Taifa Gas',
            description: 'new product',
            price: 'Tsh 40000',
            image: "../1.JPG"
        } ,
        {
            id: 3,
            name: 'Manjis Gas',
            description: 'new product',
            price: 'Tsh 21000',
            image: "../1.JPG"
        },
        {
            id: 4,
            name: 'Lake Gas',
            description: 'new product',
            price: 'Tsh 3009',
            image: "../1.JPG"
        },

        
];

 const Products = ({ product }) => {
 const classes = useStyles();

//   if (!products.length) return <p>Loading...</p>;

 return (
<main className={classes.content}>
<div className={classes.toolbar} />
       <Grid container justify="center" spacing={4}>
          {products.map((product) => (
           <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product  product={product}/>
          </Grid>
        ))}
       </Grid>
    </main>
   );
};

 export default Products;

*/