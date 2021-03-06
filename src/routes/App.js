import React from 'react'
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Layout from '../components/Layout'
import Register from '../components/Register'
import Player from '../components/Player'

const App = () => (
    <BrowserRouter basename='/'>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/player/:id" component={Player} />
        </Switch>
    </Layout>
    </BrowserRouter>
)


export default App