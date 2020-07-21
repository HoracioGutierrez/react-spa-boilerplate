import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleDrawer } from "../../api/actions"

const Header = ({toggleDrawer}) => 
    <header id="layout-header">
        <button className="material-icons" onClick={toggleDrawer}>menu</button>
        <h1>React SPA</h1>
        <Nav id="desktop-nav"/>
    </header>


export default connect(null,dispatch=>({
    toggleDrawer : bindActionCreators(toggleDrawer,dispatch)
}))(Header)
