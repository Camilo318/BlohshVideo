import React from 'react'

import { connect } from 'react-redux'
import {setFavorite, deleteFavorite} from '../actions/index'

import '../assets/styles/Item.scss'
import play from '../assets/images/play-icon.png'
import plus from '../assets/images/plus-icon.png'
import remove from '../assets/images/remove-icon.webp'
import { Link } from 'react-router-dom'

const Item = (props) => {
    const { setFavorite, deleteFavorite, isInMyList} = props
    const handleSet = () => {
        setFavorite({
            ...props
        })
    }

    const handleRemove = (title) => {
        deleteFavorite(title)
    }
    return (
        <div className="carousel__item">
            <img src={props.cover} alt={props.title} className="carousel__item__img"/>

            <div className="carousel__item__details">
                <div>

                    <Link to={`/player/${props.id}`}>
                    <img src={play} alt=""/>
                    </Link>

                    {isInMyList ?
                    <img src={remove} alt="" onClick={() => handleRemove(props.title)}/>
                    :
                    <img src={plus} alt="" onClick={handleSet}/>}
                </div>
                <p className="carousel__item__title">
                    {props.title}
                </p>
                <p className="carousel__item__subtitle">
                    {`${props.year} ${props.contentRating} ${props.duration}`}
                </p>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispatchToProps)(Item)
