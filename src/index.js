import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import App from './routes/App'
import initialState from './initialState'


const store = createStore(reducer, initialState())

ReactDOM.render(
    //All container components have access to the Redux Store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
