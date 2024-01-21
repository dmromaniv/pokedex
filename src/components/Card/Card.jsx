import DefaultPokemon from '../../assets/pokemon-default.png';

import styles from './Card.module.scss';

const Card = ({ children, imgSrc, highlighted = false }) => {
  const imageSource = imgSrc || DefaultPokemon;

  return (
    <div className={`${styles.cardWrapper} ${highlighted ? styles.selectedCard : ''}`}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageSource} alt='pokemon' />
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};

export default Card;
