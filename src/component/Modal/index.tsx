import React from 'react';
import Backdrop from '../Backdrop';
import './Modal.scss';

const Modal = ({ children, className, visible, closeModalHandler }) => {
  return (
    <div className={`modal-wrapper ${visible ? 'show' : 'hide'}`}>
      <div className={`modal ${className}`}>{children}</div>
      <Backdrop closeModalHandler={closeModalHandler} />
    </div>
  );
};

export default Modal;
