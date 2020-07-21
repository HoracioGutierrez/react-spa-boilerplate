import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleDrawer } from "../../api/actions"

const Drawer = ({drawer_open,toggleDrawer}) => 
    <div id="layout-drawer" className={drawer_open ? "open" : "closed"}>
        <button className="material-icons" onClick={toggleDrawer}>close</button>
        <Nav id="drawer-nav"/>
        <div id="overlay" className={drawer_open ? "open" : "closed"}></div>
    </div>


export default connect(
    ({drawer_open}) => ({drawer_open}),
    dispatch => ({
        toggleDrawer : bindActionCreators(toggleDrawer,dispatch)
    })
)(Drawer)
