import React from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

const Drawer = ({drawer_open}) => 
    <div id="layout-drawer" className={drawer_open ? "open" : "closed"}>
        <button className="material-icons">close</button>
        <Nav id="drawer-nav"/>
    </div>


export default connect(
    ({drawer_open}) => ({drawer_open})
)(Drawer)
