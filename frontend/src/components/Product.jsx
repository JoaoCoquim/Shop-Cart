import React from 'react'
import { Link } from 'react-router-dom';

function Product(props) {

    const { product } = props
    const { id, name } = product

    return (
        <h2 style={{margin: 10}}>
          <Link to={`/products/${id}`}>
            {name}
          </Link>
        </h2>
      )
}

export default Product