import React from 'react';
import {capitalize} from 'lodash';

function FormButton({text}) {
  return (
    <button type="submit" className="btn btn-dark">{capitalize(text)}</button>
  )
}

export default FormButton