import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Wall from '../pages/Wall'
import Messages from '../pages/Messages'
import Profile from '../pages/Profile'

const Main = () => {
    return (
        <main id="layout-main">
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/wall" component={Wall} exact/>
                <Route path="/messages" component={Messages} exact/>
                <Route path="/profile" component={Profile} exact/>
            </Switch>
        </main>
    )
}

export default Main
