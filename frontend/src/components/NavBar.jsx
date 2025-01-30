import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/cart.context'

function NavBar() {

    const { cart, numberCartItems } = useContext(CartContext)

    return (
        <nav>
            <div>Logo</div>

            <div className='nav-items'>
                <Link to={`/`}>Products</Link>
                <Link to={`/cart`}>Cart <span style={{ color: "red" }}>{cart.length > 0 ? `(${numberCartItems()})` : ""}</span></Link>
                <Link to={`/checkout`}>Checkout</Link>
            </div>

        </nav>
    )
}

export default NavBar