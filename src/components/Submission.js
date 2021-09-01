import React, { useEffect, useContext, useState } from 'react'
import PokemonContext from '../context/pokemon/pokemonContext'
import ReactHowler from 'react-howler'
import Cries from '../audio/cries/Cries'
import questionMark from '../imgs/pokemonQM.png'

import axios from 'axios'

const Submission = () => {
    const pokemonContext = useContext(PokemonContext);

    const [text, setText] = useState('');

    const { setPokemon, name, setDecoration, decoration, setLoading, startPlaying, stopPlaying, playing } = pokemonContext;

    const cry = Cries[`${name}`];

    const newPokemon = e => {
        stopPlaying();
        setLoading();

        async function fetchData() {
            const searchId = Math.floor(Math.random() * 151 + 1);
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchId}`);

            console.log(response.data);
            setPokemon({
                name: response.data.name,
                sprite: response.data.sprites.front_default,
                id: response.data.id
            })
        }

        fetchData();
        setText('');
    }

    useEffect(() => {
        newPokemon();
        // eslint-disable-next-line
    }, [])

    const onTextChange = e => {
        e.preventDefault();
        setText(e.target.value);
    }

    const onSubmit= e => {
        e.preventDefault();
        if(text === name) {
            console.log(`It's ${name}!`);
            startPlaying();
            setDecoration();
        }
    }

    const reset = () => {
        stopPlaying();
        newPokemon();
    }

    return (
        <div>
            <div style={{ height: "50px", color: "white", marginTop: "10px" }}>
               { !decoration ? <h4>It's {name}!</h4> : "" }
            </div>
            <div className="gap-3">
                <form style={{ marginBottom: "10px" }} onSubmit={onSubmit}>
                    <input 
                    className="form-control form-control-lg" 
                    type="text" 
                    value={text} 
                    onChange={onTextChange}
                    style={{ textAlign: "center" }}
                    />

                    <input 
                    type="image"
                    name="submit"
                    src={questionMark}
                    className="question-mark"
                    border="0"
                    alt="Guess"
                    value="Guess"
                    />
                </form>

                <button 
                type="button"
                className="btn-block btn-primary btn-lg"
                onClick={reset}>
                    New Pokemon
                </button>

                {/* <ReactHowler src={cries['exeggcute']} playing={playing} /> */}
                { name !== '' ?
                <ReactHowler src={cry} playing={playing} /> : ""
                }
                

            </div>
            
        </div>
    )
}

export default Submission
