import React from 'react';

import './css/GoogleButton.css';

function GoogleButton() {
  return (
    <button
      className="google-button"
      onClick={() => (window.location.href = '/api/auth/google')}
      role="button"
    >
      <img src="/googleButton.png" />
    </button>
  );
}

export default GoogleButton;
