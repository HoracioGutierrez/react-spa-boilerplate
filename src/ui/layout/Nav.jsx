import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleDrawer } from "../../api/actions"

const Nav = ({id,toggleDrawer}) => 
    <nav id={id}>
        <NavLink to="/wall" onClick={id==="drawer-nav"?toggleDrawer:undefined}>wall</NavLink>
        <NavLink to="/messages" onClick={id==="drawer-nav"?toggleDrawer:undefined}>messages</NavLink>
        <NavLink to="/profile" onClick={id==="drawer-nav"?toggleDrawer:undefined}>profile</NavLink>
    </nav>

export default connect(null,dispatch=>({
    toggleDrawer : bindActionCreators(toggleDrawer,dispatch)
}))(Nav)
