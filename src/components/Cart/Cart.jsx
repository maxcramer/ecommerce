import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';

import useStyles from './style';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    // const isEmpty = !cart.line_items.length;    
    const classes = useStyles();


    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Oh No! You've missed our T's, go back and don't miss out!
            <Link to="/" className={classes.link}>Add them now!</Link>
        </Typography>
    )

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant="h4">
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>I must be crazy! Empty the Cart!</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Complete Order</Button>

                    </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom >Check out the cool t's in your cart!</Typography>
            {/* <FilledCart /> */}
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
