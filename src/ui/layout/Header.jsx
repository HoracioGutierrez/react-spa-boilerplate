import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <header id="layout-header">
            <button className="material-icons">menu</button>
            <h1>React SPA</h1>
            <Nav id="desktop-nav"/>
        </header>
    )
}

export default Header
