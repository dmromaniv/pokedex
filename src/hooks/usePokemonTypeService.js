import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { fetchType } from '../services/api/poke/type';

import { getFromLocalStorage } from '../services/api/localStorage';
import { STORAGE_KEY } from '../constants/storage';
import { FETCH_ERROR } from '../constants/notification';

const usePokemonTypeService = () => {
  const [allTypes, setAllTypes] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchType();
        let types = {};
        response.data.results.forEach((type) => {
          types[type.name] = false;
        });
        setAllTypes(types);
      } catch (error) {
        toast.error(FETCH_ERROR.message);
      }
    }
    const filters = getFromLocalStorage(STORAGE_KEY.filter);

    if (filters) {
      setAllTypes(filters);
    } else {
      fetchData();
    }
  }, []);

  return { allTypes, setAllTypes };
};

export default usePokemonTypeService;
