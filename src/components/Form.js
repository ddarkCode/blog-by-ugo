import React from 'react';

function Form({ onSubmit, children }) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
