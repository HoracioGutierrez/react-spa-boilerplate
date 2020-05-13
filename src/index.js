import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/layout/App'
import "./style.less"
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
)