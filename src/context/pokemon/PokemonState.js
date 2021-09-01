import React, { useReducer } from 'react'
import PokemonContext from './pokemonContext'
import PokemonReducer from './pokemonReducer'
import {
    SET_POKEMON,
    SET_DECORATION,
    SET_LOADING,
    START_PLAYING,
    STOP_PLAYING,
    PLAY_SONG,
    STOP_SONG,
    NEXT_SONG
} from '../types'

const PokemonState = props => {
    const initialState = {
        name: '',
        sprite: '',
        id: '',
        loading: true,
        decoration: true,
        playing: false,
        songPlaying: true,
        trackNo: 0
    }

    const [state, dispatch] = useReducer(PokemonReducer, initialState);

    // functions
    const setPokemon = data => {
        dispatch({
            type: SET_POKEMON,
            payload: data
        })
    }

    // Set Decoration
    const setDecoration = () => {
        dispatch({
            type: SET_DECORATION
        })
    }

    // Set Loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }

    // Set Playing
    const startPlaying = () => {
        dispatch({
            type: START_PLAYING
        })
    }

    const stopPlaying = () => {
        dispatch({
            type: STOP_PLAYING
        })
    }

    const playSong = () => {
        dispatch({
            type: PLAY_SONG
        })
    }

    const stopSong = () => {
        dispatch({
            type: STOP_SONG
        })
    }

    const nextSong = number => {
        dispatch({
            type: NEXT_SONG,
            payload: number
        })
    }

    return (
        <PokemonContext.Provider value= {{
            name: state.name,
            sprite: state.sprite,
            id: state.id,
            loading: state.loading,
            decoration: state.decoration,
            playing: state.playing,
            songPlaying: state.songPlaying,
            trackNo: state.trackNo,
            setPokemon,
            setDecoration,
            setLoading,
            startPlaying,
            stopPlaying,
            playSong,
            stopSong,
            nextSong
        }}>
            { props.children }
        </PokemonContext.Provider>
    )
}

export default PokemonState
