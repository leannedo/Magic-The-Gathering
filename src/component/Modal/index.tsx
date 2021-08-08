import React from 'react';
import Backdrop from '../Backdrop';
import './Modal.scss';

const Modal = ({ children, className, visible }) => {
  return (
    <div className={`modal-wrapper ${visible ? 'show' : 'hide'}`}>
      <div className={`modal ${className}`}>{children}</div>
      <Backdrop />
    </div>
  );
};

export default Modal;
