import React from 'react'
import Nav from './Nav'

const Drawer = () => {
    return (
        <div id="layout-drawer">
            <button className="material-icons">close</button>
            <Nav id="drawer-nav"/>
        </div>
    )
}

export default Drawer
