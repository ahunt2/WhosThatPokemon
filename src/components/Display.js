import React from 'react'
import Submission from './Submission'
import Pokemon from './Pokemon'
import title from '../imgs/whosThatPokemon.png'

const Display = () => {
    return (
        <div>
            <img className='title' alt='title' src={title} />
            <Pokemon />
            <Submission />
            <div style={{ padding: "20px"}}>
                <h5>Version <b>1.3</b></h5>
            </div>

        </div>
    )
}

export default Display
