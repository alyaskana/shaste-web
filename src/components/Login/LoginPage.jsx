import axios from 'axios';
import React, { useState } from 'react';
import s from './Login.module.scss'

async function loginUser(credentials) {
  return axios.post('http://localhost:3000/api/login', credentials, {
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(data => ({ headers: data.headers, data: data }))
}

const LoginPage = ({ setToken }) => {
  const [useremail, setUserEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      user: {
        email: useremail,
        password
      }
    });
    setToken(response.headers.authorization);
  }

  return (
    <div className={s.login_wrapper}>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="email" onChange={e => setUserEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;