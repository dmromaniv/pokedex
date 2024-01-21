import styles from './PokemonType.module.scss';

const PokemonType = ({ type }) => {
  return <div className={`${styles.type} ${styles[type]}`}>{type}</div>;
};

export default PokemonType;
