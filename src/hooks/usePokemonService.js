import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { fetchPokemonWithDetails } from '../services/api/poke/pokemon';
import { FETCH_ERROR } from '../constants/notification';

const useFetchPokemon = (offset) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [isLoadingStatus, setIsLoadingStatus] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoadingStatus(true);
        const { count, pokemon } = await fetchPokemonWithDetails(offset);
        setAllPokemon([...allPokemon, ...pokemon]);
        setTotalPokemonCount(count);
      } catch (error) {
        toast.error(FETCH_ERROR.message)
      } finally {
        setIsLoadingStatus(false);
      }
    }
    fetchData();
  }, [offset]);

  return { allPokemon: allPokemon, totalPokemonCount, isLoadingStatus };
};

export default useFetchPokemon;
