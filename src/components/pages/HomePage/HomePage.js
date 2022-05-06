import React, { useState, useEffect } from 'react'
import { getAllPokemon, getAPokemon } from '../../../services/PokeApi';
import SmallPokeProfileCard from '../../molecules/SmallPokeProfileCard/SmallPokeProfileCard';
import { Typography, Box } from '@mui/material';
import Loader from '../../atoms/Loader/Loader';


const HomePage = () => {
    const [pokeInput, setPokeInput ] = useState('');
    const [myFavoritePokemon, setMyFavoritePokemon] = useState([]);
    const [chosenPokemon, setChosenPokemon] = useState(false);

    const [chosenPokeLoading, setChosenPokeLoading ] = useState(false);


    const handleInputChange = (e) => {
        e.preventDefault();
        setPokeInput(e.target.value);
    }

    const handleGetOnePokemon  =  async (pokemon) => {
        setChosenPokeLoading(true);
         await getAPokemon(pokemon.toLowerCase()).then((result) => {
                setChosenPokemon(result.data);
                setChosenPokeLoading(false);
            })
        
    }

    const addFavoritePokemon = (pokemon) => {
        const newFavs = [...myFavoritePokemon];
        console.log('result of filtering', myFavoritePokemon.filter((favPoke) => favPoke.name === pokemon.name));
        if (!myFavoritePokemon.includes(pokemon)){
        newFavs.push(pokemon);
        }
        setMyFavoritePokemon(newFavs);
    }

  return (
    <>
        <Typography>HomePage</Typography>
        <h2>Pick a Pokemon!</h2>
        <div>
            <input value={pokeInput} onChange={(e) => handleInputChange(e)} placeholder="pick a pokemon!"/>
            <button onClick={() => handleGetOnePokemon(pokeInput)}>Get this pokemon!</button>
        </div>
        <div>
            <button onClick={getAllPokemon}>Get all pokemon</button>
        </div>
        <Loader loading={chosenPokeLoading}>
        {chosenPokemon !== false ? (
            <SmallPokeProfileCard pokemon={chosenPokemon} addFavoritePokemon={addFavoritePokemon}/>
        ) : (
            ''
        )}
        </Loader>
        <Typography variant="h4" component="h2" sx={{marginTop: '10px'}}>My Favorite Pokemon</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            {myFavoritePokemon.length ? (
                myFavoritePokemon.map((pokemon) => <SmallPokeProfileCard pokemon={pokemon} addFavoritePokemon={addFavoritePokemon}/>)
            ) : (
                'no favorites'
            )}
        </Box>
    </>
  )
}

export default HomePage