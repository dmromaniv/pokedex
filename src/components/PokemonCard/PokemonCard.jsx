import Card from '../Card/Card';
import PokemonType from '../PokemonType/PokemonType';

import styles from './PokemonCard.module.scss';

const PokemonCard = ({ imgSrc, name, types = [] }) => {
  return (
    <div className={styles.cardWrapper}>
      <Card imgSrc={imgSrc}>
        <h2 className={styles.cardTitle}>{name || 'No name'}</h2>

        <ul className={styles.contentWrapper}>
          {types?.length
            ? types.map((type, index) => (
                <li key={`type-${index}`}>
                  <PokemonType type={type.type.name} />
                </li>
              ))
            : 'No types'}
        </ul>
      </Card>
    </div>
  );
};

export default PokemonCard;
