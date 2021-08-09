import React from 'react';
import './Input.scss';

const Input = ({ className = '', icon, label, placeholder, name, onChange, value }) => (
  <div className="input-wrapper">
    {label && <label>{label}</label>}
    <div className="input">
      {icon && <span className="input-icon">{icon}</span>}
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
    </div>
  </div>
);

export default Input;