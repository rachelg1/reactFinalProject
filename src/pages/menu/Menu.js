import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            Menu
            <br />
            <Link to='products'>Products</Link>
            <br />
            <Link to='customers'>Customers</Link>
            <br />
            <Link to='purchases'>Purchases</Link>
        </div>
    )
}

export default Menu