import './modal.scss';
import { useEffect } from 'react';
import { UncontrolledForm } from '../forms/uncontrolledForm';
import { ReactHookForm } from '../forms/reactHookForm';

interface ModalProps {
  onClose: () => void;
  type: 'uncontrolled' | 'controlled';
}

export const Modal = ({ onClose, type }: ModalProps) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>
          {type === 'uncontrolled' ? 'Uncontrolled form' : 'Controlled form'}
        </h2>
        <div className="modal-form">
          {type === 'uncontrolled' ? <UncontrolledForm /> : <ReactHookForm />}
        </div>
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};
