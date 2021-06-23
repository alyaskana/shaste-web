import { setToken } from '@models/users'
import { Formik, Field, Form } from 'formik'
import { TitleSecondary } from '@components/common/TitleSecondary'
import { usersFetcher } from '@api/users'
import s from './Login.module.scss'

const LoginPage = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    usersFetcher.login({ user: values }).then((response) => {
      setToken(response.headers.authorization)
      setSubmitting(false)
    })
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
