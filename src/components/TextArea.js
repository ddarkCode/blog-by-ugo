import React from 'react';
import { capitalize } from 'lodash';

import './css/TextArea.css';

function TextArea({ title, name, value, onChange }) {
  return (
    <div className="text-area">
      <label>{capitalize(title)}</label>
      <textarea
        className=""
        name={name}
        rows="5"
        cols="30"
        value={value}
        onChange={onChange}
        required
      ></textarea>
    </div>
  );
}

export default TextArea;
