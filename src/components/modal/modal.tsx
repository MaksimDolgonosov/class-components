import './modal.scss';
import { useEffect } from 'react';

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
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
