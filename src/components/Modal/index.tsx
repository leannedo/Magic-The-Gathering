import React from 'react';
import Backdrop from '../Backdrop';
import './Modal.scss';

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  visible: boolean;
  closeModalHandler: () => void;
}

const Modal = ({ children, className, visible, closeModalHandler }: ModalProps): JSX.Element => {
  return (
    <div className={`modal-wrapper ${visible ? 'show' : 'hide'}`}>
      <div className={`modal ${className}`}>{children}</div>
      <Backdrop closeModalHandler={closeModalHandler} />
    </div>
  );
};

export default Modal;
