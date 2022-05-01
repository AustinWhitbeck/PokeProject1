import React, { useState, useEffect } from 'react'
import { getAllPokemon, getAPokemon } from '../../../services/PokeApi';
import SmallPokeProfileCard from '../../molecules/SmallPokeProfileCard/SmallPokeProfileCard';

const HomePage = () => {
    const [pokeInput, setPokeInput ] = useState('');
    const [chosenPokemon, setChosenPokemon] = useState(false);

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setPokeInput(e.target.value);
    }

    const handleGetOnePokemon  =  async (pokemon) => {
            return await getAPokemon(pokemon.toLowerCase()).then((result) => {
                setChosenPokemon(result.data);
            })
        
    }

    useEffect(() => {
        console.log('useEffect running');
    }, []);



  return (
    <>
        <h1>HomePage</h1>
        <h2>Pick a Pokemon!</h2>
        <div>
            <input value={pokeInput} onChange={(e) => handleInputChange(e)} placeholder="pick a pokemon!"/>
            <button onClick={() => handleGetOnePokemon(pokeInput)}>Get this pokemon!</button>
        </div>
        <div>
            <button onClick={getAllPokemon}>Get all pokemon</button>
        </div>
        {chosenPokemon !== false ? (
            <SmallPokeProfileCard pokemon={chosenPokemon} />
        ) : (
            ''
        )}
    </>
  )
}

export default HomePage