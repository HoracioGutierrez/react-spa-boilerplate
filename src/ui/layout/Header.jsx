import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>React SPA</h1>
            <nav>
                <NavLink to="/wall">wall</NavLink>
                <NavLink to="/messages">messages</NavLink>
                <NavLink to="/profile">profile</NavLink>
            </nav>
        </header>
    )
}

export default Header
