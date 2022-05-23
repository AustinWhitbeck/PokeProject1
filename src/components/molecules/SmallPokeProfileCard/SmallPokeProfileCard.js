import { Typography, Button, Box, Card } from '@mui/material';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';
import { SpriteContainer } from './SmallPokeProfileCard.styles';

const SmallPokeProfileCard = (props) => {
  const { pokemon, addFavoritePokemon } = props;

  return (
    <Card
      sx={{
        border: '2px black',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
      }}
    >
      <Typography variant="h4" sx={{ fontSize: '20px', textAlign: 'center' }}>
        {pokemon.name.toUpperCase()}
      </Typography>
      <SpriteContainer>
        <img src={pokemon.sprites.front_default} alt="Poke front sprite" />
        <img src={pokemon.sprites.back_default} alt="Poke back sprite" />
      </SpriteContainer>
      <Box sx={{ display: 'flex' }}>
        <Button
          onClick={() => addFavoritePokemon(pokemon)}
          startIcon={<FavoriteBorderIcon />}
          sx={{ height: '50px', fontSize: '10px' }}
        >
          Favorite
        </Button>
        <Button
          startIcon={<AddIcon />}
          sx={{ height: '50px', fontSize: '10px' }}
        >
          Add to Team
        </Button>
      </Box>
    </Card>
  );
};

SmallPokeProfileCard.propTypes = {
  pokemon: PropTypes.instanceOf(Object).isRequired,
  addFavoritePokemon: PropTypes.func.isRequired,
};

export default SmallPokeProfileCard;
