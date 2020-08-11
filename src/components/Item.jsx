import React from 'react'
import '../assets/styles/Item.scss'
import play from '../assets/images/play-icon.png'
import plus from '../assets/images/plus-icon.png'

const Item = ({cover, title, year, contentRating, duration}) => {
    
    return (
        <div className="carousel__item">
            <img src={cover} alt={title} className="carousel__item__img"/>

            <div className="carousel__item__details">
                <div>
                    <img src={play} alt=""/>
                    <img src={plus} alt=""/>
                </div>
                <p className="carousel__item__title">
                    {title}
                </p>
                <p className="carousel__item__subtitle">
                    {`${year} ${contentRating} ${duration}`}
                </p>
            </div>
        </div>
    )
}

export default Item