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

const pokemonReducer = (state, action) => {
    switch(action.type) {
        case SET_POKEMON:
            return {
                ...state,
                name: action.payload.name,
                sprite: action.payload.sprite,
                loading: false,
                decoration: true,
                playing: false
            }
        case SET_DECORATION:
            return {
                ...state,
                decoration: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case START_PLAYING:
            return {
                ...state,
                playing: true
            }
        case STOP_PLAYING:
            return {
                ...state,
                playing: false
            }
        case PLAY_SONG:
            return {
                ...state,
                songPlaying: true
            }
        case STOP_SONG:
            return {
                ...state,
                songPlaying: false
            }
        case NEXT_SONG:
            return {
                ...state,
                trackNo: action.payload.number
            }
        default:
            return state;
    }
}

export default pokemonReducer
