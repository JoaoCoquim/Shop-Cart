import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <div>Logo</div>

            <div className='nav-items'>
                <Link to={`/`}>Products</Link>
                <Link to={`/cart`}>Cart</Link>
                <Link to={`/checkout`}>Checkout</Link>
            </div>

        </nav>
    )
}

export default NavBar