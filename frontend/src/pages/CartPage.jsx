import React, { useContext } from 'react'
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart.context';

function CartPage() {

  const { cart } = useContext(CartContext)

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
      <Link to={`/`}>
        <button style={{ color: "orange", border: "1px solid orange" }}>Return to Products List</button>
      </Link>
    </div>
  );
}

export default CartPage;