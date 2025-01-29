import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import { Link } from 'react-router-dom';

function ProductsPage() {

  const url = `http://localhost:3000`

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${url}/products`).then(response => {
      setProducts(response.data)
    })
  }, [])

  return (
    <>
      <h1>Products List</h1>
      <div>
        {products.map(product =>
          <div key={product.id}>
            <Product product={product} />
          </div>)}
      </div>
      <Link to={`/cart`}>
        <button style={{ color: "blue", border: "1px solid blue", margin: 10 }}>Check Cart</button>
      </Link>
    </>
  )
}

export default ProductsPage