import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart.context';

function ProductPage() {

  const { cart, addToCart } = useContext(CartContext)
  const { id } = useParams()
  const [product, setProduct] = useState({})

  const url = `http://localhost:3000/products/${id}`

  useEffect(() => {
    axios.get(`${url}`)
      .then(response => {
        setProduct(response.data)
      })
  }, [id])

  return (
    <div>
      <h1>Product: {product.name}</h1>
      {product.img ? <img style={{ height: 100 }} src={`http://localhost:3000${product.img}`} alt={product.name} /> : "Loading image..."}
      {cart.length !== 0 ? (
        <h3>Cart:
          <ul>
            {cart.map((item, index) => (
              <div key={index}>
                {item.name} x <span style={{ color: "red" }}>{item.quantity}</span>
              </div>
            ))}
          </ul>
        </h3>
      ) : (
        <h3>Cart: <span style={{ color: "red" }}>empty</span></h3>
      )}
      <button
        style={{ color: "green", border: "1px solid green", margin: 10 }}
        onClick={() => addToCart(product)}
        disabled={!product.name}> {/* It remains disabled until it is loaded */}
        {product.name ? "Add to Cart" : "Loading..."}
      </button>
      <Link to={`/cart`}>
        <button style={{ color: "blue", border: "1px solid blue", margin: 10 }}>Check Cart</button>
      </Link>
      <Link to={`/`}>
        <button style={{ color: "orange", border: "1px solid orange" }}>Add Another Product</button>
      </Link>
    </div>
  )
}

export default ProductPage