import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Layout from '../components/Layout'
import Register from '../components/Register'

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    </Layout>
    </BrowserRouter>
)


export default App