import React from 'react'
import ReactDOM from 'react-dom'
import App from './ui/layout/App'
import "./style.less"
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './api/store'

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById("root")
)