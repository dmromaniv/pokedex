import PokemonCard from '../PokemonCard/PokemonCard';

import styles from './PokemonList.module.scss';

const PokemonList = ({ pokemon = [], selectPokemon }) => {
  if (!pokemon?.length) {
    return <p>There aren`t amy pokemon yet</p>;
  }

  return (
    <ul className={styles.list}>
      {pokemon.map((pokemonInfo) => {
        const {
          home: { front_default: imgSource },
        } = pokemonInfo.sprites.other;

        return (
          <li
            key={pokemonInfo.id}
            className={styles.item}
            onClick={() => {
              selectPokemon(pokemonInfo.id);
            }}
          >
            <PokemonCard
              name={pokemonInfo.name}
              imgSrc={imgSource}
              types={pokemonInfo.types}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PokemonList;
