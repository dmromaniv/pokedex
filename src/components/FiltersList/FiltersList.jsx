import PokemonType from '../PokemonType/PokemonType';
import styles from './FiltersList.module.scss';

const FiltersList = ({ filters }) => {
  return (
    <ul className={styles.list}>
      {filters.map((filter, index) => (
        <li key={`filter-${index}`}>
          <PokemonType type={filter} />
        </li>
      ))}
    </ul>
  );
};

export default FiltersList;
