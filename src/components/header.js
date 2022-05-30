import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className='bg-gray-200 border-blue-50 px-2.5 py-4 rounded shadow-xl'>
            <div className='container px-6 ml-3 font-extralight text-3xl cursor-pointer hover:font-light'>

                <Link to={"/"}><span>My Store</span></Link>
            </div>
        </nav>
    )
}

export default Header