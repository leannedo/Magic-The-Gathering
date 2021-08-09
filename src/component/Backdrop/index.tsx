import React from 'react';
import './Backdrop.scss';

const Backdrop = ({ closeModalHandler, className = '' }) => {
  return <div onClick={closeModalHandler} className={`backdrop ${className}`} />;
};

export default Backdrop;
