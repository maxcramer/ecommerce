import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {
        id: 1,
        name: 'T-shirt 1',
        desc: 'White T',
        price: '£5.00',
    },
    {
        id: 2,
        name: 'T-shirt 2',
        desc: 'Black T',
        price: '£10.00',
    },
]
 
const Products = () => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products