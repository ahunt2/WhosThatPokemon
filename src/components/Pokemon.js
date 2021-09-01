import React, { useContext, useState } from 'react'
import { BsSkipEndFill, BsPlayFill, BsPauseFill } from 'react-icons/bs'
import PokemonContext from '../context/pokemon/pokemonContext'
import ReactHowler from 'react-howler'
import themes from '../audio/themes/themes'

const Pokemon = () => {
    const pokemonContext = useContext(PokemonContext)

    const { name, sprite, decoration, loading, songPlaying, stopSong, playSong, trackNo, nextSong } = pokemonContext;

    const [number, setNumber] = useState(trackNo)

    const nextTrack = () => {
        if((number + 1) === themes.length ) { setNumber(0); }
        else { setNumber(number+1);}

        nextSong(number);
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    { songPlaying ? 
                        <button 
                        className="icon-button"
                        style={{ outline: "none" }}
                        onClick={stopSong}>
                            <BsPauseFill className="icon" style={{ color: "white" }} />
                        </button>
                     :
                    
                    <button 
                    className="icon-button"
                    style={{ outline: "none" }}
                    onClick={playSong}>
                        <BsPlayFill className="icon" style={{ color: "white" }} />
                    </button>
                    }

                </div>
                <div className="circle-container col-sm">
                    <div className="circle-border">
                        <div className="circle">
                            { loading ? "Loading..." : 
                            <img 
                            className={ decoration ? "profile silhouette" : "profile" }
                            src={sprite} 
                            alt={name} />
                            }

                        </div>
                    </div>
                </div>
                <div className="col-sm">
                    <div>
                        <button
                        style={{outline: "none" }}
                        className="icon-button"
                        onClick={nextTrack} >
                            <BsSkipEndFill className="icon" style={{ color: "white" }} />
                        </button>
                    </div>
                    <div style={{marginTop: "30px" }}>
                        <h6>{themes[number].name}</h6>
                    </div>

                </div>
            </div>
            <ReactHowler src={themes[number].src} playing={songPlaying} loop={true} />
        </div>
    )
}

export default Pokemon
