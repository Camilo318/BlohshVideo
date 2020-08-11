import React, {useState, useEffect} from 'react'
import Header from './Header'
import Search from './Search'
import Categories from './Categories'
import Carousel from './Carousel'
import Item from './Item'
import Footer from './Footer'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState.js'

const API = 'http://localhost:3000/initialState'
const Home = () => {
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

export default Home