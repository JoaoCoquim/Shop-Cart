import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'

function CartProduct(props) {

  const { product } = props
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext)

  return (
    <h3>
      <strong>{product.name}</strong> - Quantity: <span style={{ color: "red" }}>{product.quantity}</span>
      <button
        style={{ color: "green", border: "1px solid green", margin: 5 }}
        onClick={() => increaseQuantity(product.name)}>+</button>
      <button
        style={{ color: "red", border: "1px solid red", margin: 5 }}
        onClick={() => decreaseQuantity(product.name)}>-</button>
    </h3>
  )
}

export default CartProduct