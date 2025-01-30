import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/cart.context'

function CheckoutPage() {

  const { cart, numberCartItems } = useContext(CartContext)

  return (
    <div>
      <h1>Checkout</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - Qty: {product.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Price: {numberCartItems()}€</h3>

      <button style={{ color: "green", border: "1px solid green", margin: 10 }}>Confirm Purchase</button>
      <Link to={`/cart`}>
        <button style={{ color: "red", border: "1px solid red" }}>Return To Cart</button>
      </Link>
    </div>
  )
}

export default CheckoutPage