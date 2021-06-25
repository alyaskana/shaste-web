import { FC } from 'react'
import s from './Search.module.scss'
import { Formik, Form, Field } from 'formik'

import { ReactComponent as SearchIconSvg } from '@icons/search_icon.svg'
import cn from 'classnames'

type SearchProps = {
  handleSubmit: (values: any, { setSubmitting }: { setSubmitting: any }) => void
  className?: string
}

export const Search: FC<SearchProps> = ({ className, handleSubmit }) => {
  return (
    <Formik initialValues={{ text: '' }} onSubmit={handleSubmit}>
      <Form>
        <div className={cn(s.search, className)}>
          <SearchIconSvg className={s.search_icon} />
          <Field
            name="text"
            type="text"
            placeholder="маргарита, глинтвейн, все что угодно..."
            className={s.search_input}
          />
        </div>
      </Form>
    </Formik>
  )
}
