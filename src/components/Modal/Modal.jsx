import { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose, children, position = 'center' }) => {
  // Disable scrolling when a modal window is open
  useEffect(() => {
    const handleScroll = (event) => {
      if (isOpen) {
        event.preventDefault();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    isOpen && (
      <div className={`${styles.modal} ${styles[position]}`}>
        <div
          className={`animate__animated ${
            position === 'center'
              ? 'animate__slideInUp'
              : 'animate__fadeInRight'
          } ${styles.modalContent} ${styles[position]}`}
        >
          <span className={styles.close} onClick={onClose}>
            ✖
          </span>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
