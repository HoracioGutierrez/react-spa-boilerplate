import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({id}) => 
    <nav id={id}>
        <NavLink to="/wall">wall</NavLink>
        <NavLink to="/messages">messages</NavLink>
        <NavLink to="/profile">profile</NavLink>
    </nav>

export default Nav
