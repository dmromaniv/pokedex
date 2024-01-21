import Modal from '../Modal/Modal';
import Button from '../ui/Button/Button';
import Checkbox from '../ui/Checkbox/Checkbox';

import styles from './FilterModal.module.scss';

const FilterModal = ({ isOpen, onClearButton, onClose, allTypes, onCheckboxChanged }) => {
  const types = Object.entries(allTypes ?? {});
  return (
    <Modal isOpen={isOpen} onClose={onClose} position='right'>
      <div className={styles.modalContent}>
        <div className={styles.headingWrapper}>
          <h2>Filter by type</h2>
          <Button
            onButtonClick={onClearButton}
            text='Clear all'
            variant='outlined'
          />
        </div>
        {types.length > 0 ? (
          <ul className={styles.filterList}>
            {types.map((type, index) => {
              return (
                <li key={index} className={styles.filterItem}>
                  <Checkbox
                    onChange={onCheckboxChanged}
                    checked={type[1]}
                    value={type[0]}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No available filters</p>
        )}
      </div>
    </Modal>
  );
};

export default FilterModal;
