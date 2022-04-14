import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ cart }) => {
    return (
        <nav>
            <Link className='home' to="/"><h2>Megaplex</h2></Link>
            <Link className='cart-link' to="/cart">
            <div>
                <i class="fa-solid fa-cart-shopping"></i><span>{cart.length}</span>
            </div>
            </Link>
        </nav>
    )
}

export default Navbar