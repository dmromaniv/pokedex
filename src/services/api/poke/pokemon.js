import { axiosInstance } from '.';
import { STORAGE_KEY } from '../../../constants/storage';

export async function fetchPokemon(offset) {
  const response = await axiosInstance.get('/api/v2/pokemon', {
    params: {
      limit: STORAGE_KEY.limit,
      offset,
    },
  });

  return response;
}

export async function fetchPokemonByName(name) {
  const response = await axiosInstance.get(`/api/v2/pokemon/${name}`);

  return response.data;
}

export async function fetchPokemonWithDetails(offset) {
  try {
    const response = await fetchPokemon(offset);
    const pokemonList = response.data.results;
    const totalCount = response.data.count;

    const pokemonInfoList = await Promise.all(
      pokemonList.map((pokemon) => fetchPokemonByName(pokemon.name))
    );

    return { pokemon: pokemonInfoList, count: totalCount };
  } catch (error) {
    console.error('error', error?.message);
  }
}
