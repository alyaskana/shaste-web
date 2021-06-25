import { FC } from 'react'
import s from './AddPostForm.module.scss'
import { Cocktail, User } from '@types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { PhotoUploader } from './PhotoUploader/PhotoUploader'
import { Button, ButtonTypes } from '@components/common/Button'
import { postsFetcher } from '@api/posts'

type AddPostFormProps = {
  currentUser: User
  cocktail: Cocktail
  setCocktail: (cocktail: Cocktail) => void
}

export const AddPostForm: FC<AddPostFormProps> = ({ currentUser, cocktail, setCocktail }) => {
  const initialPost = {
    photo: null,
    content: '',
  }

  const handleSubmit = (values, { setSubmitting }) => {
    const data = { post: { ...values, cocktail_id: cocktail.id } }
    postsFetcher.create(data).then((response) => {
      setCocktail({ ...cocktail, posts: [response.data, ...cocktail.posts] })
    })
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialPost}
      validationSchema={Yup.object({
        content: Yup.string().min(1).required('Обязательное поле'),
      })}
      onSubmit={handleSubmit}
    >
      {(_values, setFieldValue) => (
        <Form className={s.form}>
          <div className={s.left_side}>
            <img src={currentUser.avatar.thumb.url} alt="" className={s.avatar} />
            <PhotoUploader setFieldValue={setFieldValue} />
          </div>
          <div className={s.right_side}>
            <Field
              as="textarea"
              name="content"
              className={s.input}
              rows={4}
              placeholder="Что вы думаете об этом коктейле?"
            />
            <Button type={ButtonTypes.Submit} text="Запостить" />
          </div>
        </Form>
      )}
    </Formik>
  )
}
