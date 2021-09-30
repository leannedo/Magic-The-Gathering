import React from 'react';
import './Backdrop.scss';

interface BackdropProps {
  closeModalHandler: () => void;
  className?: string;
}

const Backdrop = ({ closeModalHandler, className = '' }: BackdropProps): JSX.Element => {
  return <div onClick={closeModalHandler} className={`backdrop ${className}`} />;
};

export default Backdrop;
