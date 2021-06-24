import { FC } from 'react'
import s from './AddPostForm.module.scss'
import { User } from '@types'
import { Formik, Form, Field } from 'formik'
import { PhotoUploader } from './PhotoUploader/PhotoUploader'
import { Button, ButtonTypes } from '@components/common/Button'

type AddPostFormProps = {
  currentUser: User
}

export const AddPostForm: FC<AddPostFormProps> = ({ currentUser }) => {
  const initialPost = {
    photo: null,
    text: '',
  }

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Formik initialValues={initialPost} onSubmit={handleSubmit}>
      {(values, setFieldValue) => (
        <Form className={s.form}>
          <div className={s.left_side}>
            <img src={`//localhost:3000/${currentUser.avatar.thumb.url}`} alt="" className={s.avatar} />
            <PhotoUploader setFieldValue={setFieldValue} />
          </div>
          <div className={s.right_side}>
            <Field
              as="textarea"
              name="text"
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
