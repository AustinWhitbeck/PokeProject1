
const axios = require('axios').default;

export async function getAllPokemon() {
    try {
      return await axios.get('https://pokeapi.co/api/v2/pokemon/');
    } catch (error) {
      return error;
    }
  }

  export function getAPokemon(pokemon) {
    try {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    } catch (error) {
      return error;
    }
  }