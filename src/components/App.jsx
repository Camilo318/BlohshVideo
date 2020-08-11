import React, {useState, useEffect} from 'react'
import Header from './Header'
import Search from './Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Item from '../components/Item'
import Footer from '../components/Footer'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState.js'

const API = 'http://localhost:3000/initialState'
const App = () => {
    const initialState = useInitialState(API)
    return (
        <div className="App">
            <Header />
            <Search />
            {
                initialState.mylist.length > 0 && (
                    <Categories title='Mi Lista'>
                        <Carousel>
                            {initialState.mylist.map(item => {
                                return <Item key={item.id} {...item}/>
                            })}
                        </Carousel>
                    </Categories>
                )
            }

            <Categories title='Trending'>
                <Carousel>
                    {initialState.trends.map(item => {
                        return <Item key={item.id} {...item}/>
                    })}
                </Carousel>
            </Categories>

            <Categories title='Originales'>
                <Carousel>
                    {initialState.originals.map(item => {
                        return <Item key={item.id}{...item} />
                    })}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
}

export default App