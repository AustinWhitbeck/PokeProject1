
const axios = require('axios').default;

export async function getAllPokemon() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  export function getAPokemon(pokemon) {
    try {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    } catch (error) {
      console.error(error);
    }
  }