import Card from '../Card/Card';
import StatsTable from '../StatsTable/StatsTable';

import styles from './PokemonStatsСard.module.scss';

const PokemonStatsСard = ({ imgSrc, name, stats }) => {
  return (
    <div className={styles.cardWrapper}>
      <Card imgSrc={imgSrc} highlighted>
        <h2 className={styles.cardTitle}>{name || 'No name'}</h2>
        <StatsTable stats={stats} />
      </Card>
    </div>
  );
};

export default PokemonStatsСard;
