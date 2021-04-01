import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';
import useStyle from './styles';

const products = [
    {
        id: 1,
        name: 'T-shirt 1',
        desc: 'White T',
        price: '£5.00',
        image: 'https://www.traveller.com.au/content/dam/images/g/x/c/k/t/v/image.gallery.galleryPortrait.496x620.gxcksn.png/1500254756985.jpg'
    },
    {
        id: 2,
        name: 'T-shirt 2',
        desc: 'Black T',
        price: '£10.00',
        image: 'https://images.rapgenius.com/467b39851e84080821f849bdc5b033ed.686x960x1.jpg'
    },
    {
        id: 3,
        name: 'T-shirt 3',
        desc: 'Pink T',
        price: '£5.00',
        image: 'https://www.traveller.com.au/content/dam/images/g/x/c/k/t/v/image.gallery.galleryPortrait.496x620.gxcksn.png/1500254756985.jpg'
    },
    {
        id: 4,
        name: 'T-shirt 4',
        desc: 'Blue T',
        price: '£10.00',
        image: 'https://images.rapgenius.com/467b39851e84080821f849bdc5b033ed.686x960x1.jpg'
    },
]
 
const Products = () => {
    const classes = useStyle();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
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