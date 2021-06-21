import axios from 'axios'
import { useState } from 'react'
import { setToken, setCurrentUser } from '../../models/users'
import s from './Login.module.scss'

async function loginUser(credentials) {
  return axios
    .post('http://localhost:3000/api/login', credentials, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => ({ token: response.headers.authorization, user: response.data }))
}

const LoginPage = () => {
  const [useremail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await loginUser({
      user: {
        email: useremail,
        password,
      },
    })
    setCurrentUser(userData.user)
    setToken(userData.token)
  }

  return (
    <div className={s.login_wrapper}>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input name="email" type="email" onChange={(e) => setUserEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
