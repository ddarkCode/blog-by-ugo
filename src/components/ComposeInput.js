import React from 'react';
import { capitalize } from 'lodash';

import './css/ComposeInput.css';

function ComposeInput({ type, name, value, onChange }) {
  return (
    <div className="compose-input">
      <label htmlFor={name}>{capitalize(name)}</label>
      <input
        className=""
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default ComposeInput;
