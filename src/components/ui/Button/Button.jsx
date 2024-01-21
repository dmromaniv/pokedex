import styles from './Button.module.scss';

const Button = ({
  text,
  size = 'normal',
  variant = 'filled',
  type = 'button',
  imgSrc = '',
  onButtonClick = () => {},
}) => {
  return (
    <button
      onClick={onButtonClick}
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
    >
      {text || ''}
      {imgSrc ? (
        <img className={styles.image} src={imgSrc} alt='filter-icon' />
      ) : (
        ''
      )}
    </button>
  );
};

export default Button;
