import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { signup } from '../redux/auth/authReducer';

import Input from '../components/Input';
import Form from '../components/Form';
import FormButton from '../components/FormButton';
import GoogleButton from '../components/GoogleButton';

import '../components/css/Form.css';

function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const log = console.log;
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      dispatch(signup(user));
      history.push('/blogs');
    } catch (err) {
      log(err);
    }
  }

  return (
    <div className="auth" id="signup">
      <h1>Signup</h1>

      <div>
        <div className="auth-container">
          <Form onSubmit={handleSubmit}>
            <Input
              value={user.username}
              type={'username'}
              name={'username'}
              onChange={handleChange}
            />
            <Input
              value={user.email}
              type={'email'}
              name={'email'}
              onChange={handleChange}
            />
            <Input
              value={user.password}
              type={'password'}
              name={'password'}
              onChange={handleChange}
              min={8}
              placeholder={'Minimum of 8 alphanumeric characters'}
            />
            <FormButton text={'Signup'} />
          </Form>

          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            Don't Have An Account? <Link to="/signup">Signin</Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}

export default Signup;
