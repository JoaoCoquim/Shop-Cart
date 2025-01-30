import React, { useContext } from 'react'
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart.context';

function CartPage() {

  const { cart, clearCart } = useContext(CartContext)

  // 3. Implementar Checkout (apenas mostra o total de itens)

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p style={{ color: "red" }}>Cart is empty.</p>
      ) :
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              < CartProduct product={product} />
            </li>
          ))}
        </ul>
      }

      <button
        onClick={clearCart}
        style={{ color: "red", border: "1px solid red" }}
      >
        Clear Cart
      </button>

      <Link to={`/checkout`}>
        <button style={{ color: "green", border: "1px solid green", margin: 10 }}>Proceed To Checkout</button>
      </Link>

      <Link to={`/`}>
        <button style={{ color: "orange", border: "1px solid orange" }}>Return To Products List</button>
      </Link>
    </div>
  );
}

export default CartPage;