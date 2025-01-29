import { useState, useEffect, createContext } from "react";

const CartContext = createContext()

const CartProvider = (props) => {

    const [cart, setCart] = useState([])

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

    useEffect(() => {
        console.log(cart)
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, increaseQuantity, decreaseQuantity }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }