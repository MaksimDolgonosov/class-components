import './app.scss';
import { Portal } from '../portal/portal';
import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import UsersList from '../usersList/usersList';
import Footer from '../footer/footer';
import { Modal } from '../modal/modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'uncontrolled' | 'controlled'>(
    'controlled'
  );
  const users = useAppSelector((state) => state.users.users);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleModalTypeChange = () => {
    setModalType(modalType === 'uncontrolled' ? 'controlled' : 'uncontrolled');
  };
  return (
    <div className="app">
      <div className="app-header">Task: React Forms</div>
      <div className="app-modal">
        <input
          type="checkbox"
          name="modal-type"
          id="modal-type"
          checked={modalType === 'uncontrolled'}
          onChange={toggleModalTypeChange}
        />
        <label htmlFor="modal-type">Uncontrolled form</label>
        <button onClick={handleOpenModal}>Open modal</button>
      </div>
      <UsersList users={users} />
      <Portal container={document.body}>
        {isModalOpen ? (
          <Modal onClose={handleCloseModal} type={modalType} />
        ) : null}
      </Portal>
      <Footer />
    </div>
  );
};

export default App;
