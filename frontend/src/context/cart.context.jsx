import { useState, useEffect, createContext } from "react";

const CartContext = createContext()

const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    useEffect(() => {

        if (cart.length !== 0) {
            // update localStorage
            localStorage.setItem("cart", JSON.stringify(cart))
        }

    }, [cart])

    useEffect(() => {

        const storedCart = localStorage.getItem("cart")

        if (storedCart) {
            // set cart
            setCart(JSON.parse(storedCart))
        }
    }, [])

    // Add a new product or increase the quantity by 1 if it already exists
    const addToCart = (product) => {

        setCart((prevCart) => {
            const productIndex = prevCart.findIndex((item) => item.id === product.id);

            if (productIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[productIndex].quantity += 1
                return updatedCart
            }

            return [...prevCart, { ...product, quantity: 1 }];
        })
    }

    const increaseQuantity = (name) => {
        setCart((prevCart) => {
            return prevCart.map((item) =>
                item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            );
        });
    };

    const decreaseQuantity = (name) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map((item) =>
                item.name === name ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0);
            return updatedCart;
        });
    };

    const clearCart = () => {
        setCart(() => [])
        localStorage.removeItem("cart");
    }

    // return total number of items in cart
    const numberCartItems = () => {
        let totalQty = 0

        cart.forEach(product => {
            const productQty = product.quantity
            totalQty += productQty
        });

        return totalQty
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, increaseQuantity, decreaseQuantity, clearCart, numberCartItems }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }