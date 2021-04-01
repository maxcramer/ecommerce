import React, {useState, useEffect} from 'react'
import { commerce } from './lib/commerce';

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

import { Products, Navbar, Cart } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [addToCart, setAddToCart] = useState([]);

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        await commerce.cart.retrieve()
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    }

    console.log(cart)

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    console.log(products)
    return (
        <div>
            <Navbar totalItems={cart.total_items}/>
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App
