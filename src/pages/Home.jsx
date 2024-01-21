import { useEffect, useState } from 'react';

import useScreenWidth from '../hooks/useSrceenWidth';
import useFetchPokemon from '../hooks/usePokemonService';

import { fetchType } from '../services/api/poke/type';
import {
  addToLocalStorage,
  getFromLocalStorage,
} from '../services/api/localStorage';
import { STORAGE_KEY } from '../constants/storage';

import FiltersList from '../components/FiltersList/FiltersList';
import PokemonList from '../components/PokemonList/PokemonList';
import PokemonStatsСard from '../components/PokemonStatsСard/PokemonStatsСard';
import FilterModal from '../components/FilterModal/FilterModal';
import Button from '../components/ui/Button/Button';
import Loader from '../components/ui/Loader/Loader';
import PokemonStatsModal from '../components/PokemonStatsModal/PokemonStatsModal';

import FilterIcon from '../assets/filter-icon.png';

import styles from './Home.module.scss';
import usePokemonTypeService from '../hooks/usePokemonTypeService';

const Home = () => {
  const [visiblePokemon, setVisiblePokemon] = useState([]);
  const [pokemonDetail, setPokemonDetails] = useState(null);
  const [offset, setOffset] = useState(0);
  //   const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  //   const [isLoading, setIsLoading] = useState(true);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);
  // const [allTypes, setAllTypes] = useState();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const { isMobile } = useScreenWidth();
  const { allPokemon, totalPokemonCount, isLoadingStatus } =
    useFetchPokemon(offset);
  const { allTypes, setAllTypes } = usePokemonTypeService();

  //   Handle modal visability
  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const closeStatModal = () => {
    setIsStatsModalOpen(false);
  };

  const openStatModal = () => {
    setIsStatsModalOpen(true);
  };

  const onCheckboxChanged = (event) => {
    const changedFilters = {
      ...allTypes,
      [event.target.value]: event.target.checked,
    };
    setAllTypes(changedFilters);
    addToLocalStorage(STORAGE_KEY.filter, changedFilters);
  };

  useEffect(() => {
    const selectedFilters = [];
    
    for (const filter in allTypes) {
      if (allTypes[filter]) {
        selectedFilters.push(filter);
      }
    }

    console.log('selectedFilters1', selectedFilters);

    if (selectedFilters.length) {
      const filteredPokemon = allPokemon.filter((pokemon) => {
        return !pokemon.types.some((type) => {
          return !selectedFilters.includes(type.type.name);
        });
      });
      console.log('filteredPokemon', filteredPokemon);
        // setVisiblePokemon(filteredPokemon);
    } else {
        // setVisiblePokemon(allPokemon);
    }
    setSelectedFilters(selectedFilters);
  }, [allTypes]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       // You can await here
  //       const { count, pokemon } = await fetchPokemonWithDetails(offset);
  //       setAllPokemon([...allPokemon, ...pokemon]);
  //       setTotalPokemonCount(count);
  //       // ...
  //     }
  //     fetchData();
  //   }, [offset]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       const response = await fetchType();
  //       let checkboxes = {};
  //       const allTypes = response.data.results.foreach((type) => {
  //         checkboxes[type.name] = false;
  //       });
  //       setAllTypes(allTypes);
  //     }
  //     const filters = getFromLocalStorage(STORAGE_KEY.filter);

  //     if (filters) {
  //       setAllTypes(filters);
  //     } else {
  //       fetchData();
  //     }
  //   }, []);

  const onButtonClick = () => {
    setOffset(offset + 12);
  };

  const selectPokemon = (pokemonId) => {
    const selectedPokemon = allPokemon.find(
      (pokemonInfo) => pokemonInfo.id === pokemonId
    );
    setPokemonDetails(selectedPokemon);
    openStatModal();
  };

  return (
    <>
      <div className={`container `}>
        <div className={styles.headingWrapper}>
          <h1 className={styles.headline}>Pokedex</h1>
          <div className={styles.filterButton}>
            <Button
              onButtonClick={openFilterModal}
              imgSrc={FilterIcon}
              variant='outlined'
            />
          </div>
          <FiltersList filters={selectedFilters} />
        </div>

        <section className={styles.section}>
          <div className={styles.listWrapper}>
            <PokemonList pokemon={allPokemon} selectPokemon={selectPokemon} />

            {isLoadingStatus ? (
              <Loader />
            ) : (
              offset < totalPokemonCount && (
                <div className={styles.buttonWrapper}>
                  <Button
                    onButtonClick={onButtonClick}
                    size='large'
                    text='Load more'
                  />
                </div>
              )
            )}
          </div>

          {!isMobile && pokemonDetail && (
            <div className={styles.statsWrapper}>
              <PokemonStatsСard
                imgSrc={pokemonDetail.sprites.other.home.front_default}
                name={pokemonDetail.name}
                stats={pokemonDetail?.stats}
              />
            </div>
          )}
        </section>
      </div>

      <FilterModal
        onCheckboxChanged={onCheckboxChanged}
        allTypes={allTypes}
        isOpen={isFilterModalOpen}
        onClose={closeFilterModal}
      />

      {isMobile && (
        <PokemonStatsModal isOpen={isStatsModalOpen} onClose={closeStatModal}>
          <PokemonStatsСard
            imgSrc={pokemonDetail?.sprites.other.home.front_default}
            name={pokemonDetail?.name}
            stats={pokemonDetail?.stats || []}
          />
        </PokemonStatsModal>
      )}
    </>
  );
};

export default Home;
