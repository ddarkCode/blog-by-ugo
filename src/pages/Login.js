import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import { signin } from '../redux/auth/authReducer';

import Input from '../components/Input';
import FormButton from '../components/FormButton';
import Form from '../components/Form';
import GoogleButton from '../components/GoogleButton';

import '../components/css/Form.css';

function Login() {
  const [user, setUser] = useState({
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
      dispatch(signin(user));
      history.push('/blogs');
    } catch (err) {
      log(err);
    }
  }

  return (
    <div className="auth">
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Login To Start Creating Blogs" />
      </Helmet>
      <h1>Login</h1>

      <div>
        <div className="auth-container">
          <Form onSubmit={handleSubmit}>
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
            <FormButton text={'Login'} />
          </Form>

          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            Don't Have An Account? <Link to="/signup">Signup</Link>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}

export default Login;
