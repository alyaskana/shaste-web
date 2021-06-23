import s from './SignUp.module.scss'
import { Formik, Field, Form } from 'formik'
import { TitleSecondary } from '@components/common/TitleSecondary'
import { usersFetcher } from '@api/users'
import { setToken } from '@models/users'

export const SignUp = () => {
  const initialValues = {
    email: '',
    password: '',
    login: '',
    user_name: '',
    // agreement: false,
  }

  const handleSubmit = (values, { setSubmitting }) => {
    usersFetcher.create({ user: values }).then((response) => {
      setToken(response.headers.authorization)
      setSubmitting(false)
    })
  }

  return (
    <div className={s.sign_up}>
      <TitleSecondary title="регистрация" className={s.title} />
      <div className={s.description}>
        Зарегистрируйтесь, чтобы сохранять рецепты, получать рекомендации, следить за интересными барменами и делиться с
        миром своими экспериментами.
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          {/* <label>
            <input name="agreement" type="checkbox" className={s.agree_checkbox} />
            Принимаю все ваши <a href="#">правила</a>
          </label> */}
          <Field name="login" type="text" placeholder="придумайте логин" className={s.field} />
          <Field name="user_name" type="text" placeholder="имя пользователя" className={s.field} />
          <Field name="email" type="email" placeholder="введите e-mail" className={s.field} />
          <Field name="password" type="password" placeholder="введите пароль" className={s.field} />
          <button type="submit" className={s.button}>
            Зарегистрироваться
          </button>
        </Form>
      </Formik>
      <div className={s.to_login}>
        <div>у вас уже есть аккаунт?</div>
        <a href="/login" className={s.link}>
          войти
        </a>
      </div>
    </div>
  )
}
