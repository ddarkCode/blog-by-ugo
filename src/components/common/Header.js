import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signout } from '../../redux/auth/authReducer';

import '../css/Header.css';

function Header() {
  const user = useSelector((state) => {
    return state.auth.user;
  });

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">
              <Link to="/">
                <img src="/ublog.png" alt="blog brand" />
              </Link>
            </p>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li id="about">
              <Link to="/blogs">BLOGS</Link>
            </li>
            {user && (
              <li id="about">
                <Link to="/compose">COMPOSE</Link>
              </li>
            )}

            {user ? (
              <li id="about">
                <a style={{ cursor: 'pointer' }} role="button" onClick={logout}>
                  LOGOUT
                </a>
              </li>
            ) : (
              <li id="about">
                <Link to="/login">LOGIN</Link>
              </li>
            )}

            <li id="about">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li id="contact">
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
