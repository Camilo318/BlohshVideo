import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getVideoSource } from '../actions/index'
import '../assets/styles/Player.scss'

const Player = ({ history, match, playing, getVideoSource }) => {
    const { id } = match.params //id is comming from the url

    useEffect(() => { //On mounting
        getVideoSource(id)
        console.log(playing)
    }, [])
    
    const hasVideo = playing.id
    console.log(playing)
    return (
        <>
            {hasVideo ?
                <div className='Player'>
                <video controls autoPlay>
                <source src={playing.source} type="video/mp4"/>
                </video>
                <div className="Player-back">
                <button onClick={() => history.goBack()}>
                Regresar
                </button>
                </div>
                </div>
                :
                <h1>El video no fue encontrado</h1>
            }
        </>    
    )
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
