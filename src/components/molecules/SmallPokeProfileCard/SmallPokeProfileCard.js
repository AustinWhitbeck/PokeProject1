import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react'
import { SpriteContainer } from './SmallPokeProfileCard.styles';

const SmallPokeProfileCard = (pokemon) => {
    console.log('pokemon value in card', pokemon);
    console.log('pokemon name in card', pokemon.pokemon.name);
    const thisPoke = pokemon.pokemon;
  return (
    <Card sx={{border: '2px black', padding: '20px', display: 'flex', flexDirection: 'column', width:'200px', }}>
        <Typography variant="h4" sx={{fontSize: '20px'}}>{thisPoke.name.toUpperCase()}</Typography>
        <SpriteContainer>
            <img src={thisPoke.sprites.front_default}/>
            <img src={thisPoke.sprites.back_default}/>
        </SpriteContainer>
        <div>
            <p></p>
        </div>
    </Card>
  )
}

export default SmallPokeProfileCard