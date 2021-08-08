import React from 'react';
import './Input.scss';

const Input = ({ iconClassName, label, placeholder, name, onChange, value, error }) => (
  <div className={`input-wrapper ${error ? 'invalid' : ''}`}>
    <div style={{ width: '100%' }}>
      <label>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <i className={`${iconClassName} placeholder-icon`} />
    </div>
    <div className="input-error">{error}</div>
  </div>
);

export default Input;
