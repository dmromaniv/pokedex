import Modal from '../Modal/Modal';

const PokemonStatsModal = ({ isOpen, children, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {children}
    </Modal>
  );
};

export default PokemonStatsModal;
