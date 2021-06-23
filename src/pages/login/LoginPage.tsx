import axios from 'axios'
import { useState } from 'react'
import { setToken, setCurrentUser } from '@models/users'
import { Formik, Field, Form } from 'formik'
import { TitleSecondary } from '@components/common/TitleSecondary'
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
    <div className={s.login_page}>
      <TitleSecondary title="вход" className={s.title} />
      <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field name="email" type="email" placeholder="введите e-mail" className={s.field} />
          <Field name="password" type="password" placeholder="введите пароль" className={s.field} />
          <button type="submit" className={s.button}>
            Войти
          </button>
        </Form>
      </Formik>
      <div className={s.separate}>
        <div className={s.line}></div>
        <div className={s.text}>или</div>
        <div className={s.line}></div>
      </div>
      <div className={s.button}>Войти через Google</div>
      <div className={s.to_sign_up}>
        <div>нет аккаунта?</div>
        <a href="/sign_up" className={s.link}>
          зарегистрироваться
        </a>
      </div>
    </div>
  )
}

export default LoginPage
