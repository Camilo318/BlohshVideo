import React from 'react'
import {Link} from 'react-router-dom'

export const Player = () => {
    return (
        <div className='Player'>
            <video controls autoPlay>
                <source src="" type="video/mp4"/>
            </video>
            <div className="player-back">
                <Link to='/'>
                <button>Regresar</button>
                </Link>
            </div>
        </div>
    )
}
