import React from 'react';
import { capitalize } from 'lodash';

import './css/Input.css';

function Input({ type, onChange, name, value }) {
  return (
    <div className="input-container">
      <label htmlFor={type}>{capitalize(name)}</label>
      <input
        type={type}
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export default Input;
