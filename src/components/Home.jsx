import React from 'react'
import {connect} from 'react-redux'
import Search from './Search'
import Categories from './Categories'
import Carousel from './Carousel'
import Item from './Item'
import '../assets/styles/App.scss'
import useInitialState from '../hooks/useInitialState.js'


const Home = ({myList, trends, originals}) => {
    return (
        <>
            <Search />
            {
                myList.length > 0 && (
                    <Categories title='Mi Lista'>
                        <Carousel>
                            {myList.map(item => {
                                return <Item key={item.id} {...item} isInMyList/>
                            })}
                        </Carousel>
                    </Categories>
                )
            }

            <Categories title='Trending'>
                <Carousel>
                    {trends.map(item => {
                        return <Item key={item.id} {...item}/>
                    })}
                </Carousel>
            </Categories>

            <Categories title='Originales'>
                <Carousel>
                    {originals.map(item => {
                        return <Item key={item.id}{...item} />
                    })}
                </Carousel>
            </Categories>
        </>
    )
}
const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}
export default connect(mapStateToProps, null)(Home)