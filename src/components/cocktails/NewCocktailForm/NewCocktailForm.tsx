import { FC } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import { PhotoUploader } from './PhotoUploader'
import { Categories } from './Categories'
import { Ingredients, TIngredientOption } from './Ingredients'

import { cocktailsFetcher } from '../../../api/cocktails'
import { Tag } from '../../../types'

import s from './NewCocktailForm.module.scss'
import { Button, ButtonTypes } from '@components/common/Button'

type TNewCocktailFormProps = {
  categories: Tag[]
  ingredientsOptions: TIngredientOption[]
  updateIngrediensOptions: (text: string) => void
}

export const NewCocktailForm: FC<TNewCocktailFormProps> = ({
  ingredientsOptions,
  categories,
  updateIngrediensOptions,
}) => {
  const history = useHistory()

  const initialCocktail = {
    title: '',
    description: '',
    ingredients: [
      {
        ingredient: {
          label: '',
          value: '',
        },
        amount: '',
      },
    ],
    steps: [''],
    photo: null,
    youtube: '',
    tags: { goals: [], tastes: [] },
  }

  const handleSubmit = (values, { setSubmitting }) => {
    const data = {
      cocktail: {
        ...values,
        tags: [...values.tags.goals.map((goal) => goal.value), ...values.tags.tastes.map((taste) => taste.value)],
        ingredients: values.ingredients.map((i) => ({ id: i.ingredient.value, amount: i.amount })),
      },
    }

    cocktailsFetcher.create(data).then((response) => {
      history.push(`/cocktails/${response.data.id}`)
    })
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialCocktail}
      validationSchema={Yup.object({
        title: Yup.string().min(4, 'Не менее 4 знаков').required('Обязательное поле'),
      })}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className={s.form}>
          <fieldset>
            <label htmlFor="title">как называется ваш коктейль?</label>
            <Field
              name="title"
              type="text"
              placeholder="маргарита, текила санрайз, молочный пунш"
              className={s.input_title}
            />
            <ErrorMessage name="title" />
          </fieldset>

          <fieldset>
            <label htmlFor="description">небольшое описание</label>
            <Field
              name="description"
              as="textarea"
              placeholder="расскажите немного о вашем коктейле"
              className={s.textarea}
            />
            <ErrorMessage name="description" />
          </fieldset>

          <fieldset>
            <div className={s.ingredients}>
              <label htmlFor="ingredients" className={s.label_what}>
                какие нужны ингредиенты?
              </label>
              <label htmlFor="ingredients" className={s.label_how_much}>
                сколько?<span className={s.caption}>необязательно</span>
              </label>
            </div>
            <Ingredients
              selectedIngredients={values.ingredients}
              ingredientsOptions={ingredientsOptions}
              setFieldValue={setFieldValue}
              updateIngrediensOptions={updateIngrediensOptions}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="steps">
              что нужно сделать?<span className={s.caption}>пошагово</span>
            </label>
            <FieldArray
              name="steps"
              render={(arrayHelpers) => (
                <div>
                  {values.steps.map((step, index) => (
                    <div key={index}>
                      <div className={s.step}>
                        <Field
                          name={`steps[${index}]`}
                          as="textarea"
                          className={s.textarea}
                          placeholder="что нужно сделать"
                        />
                      </div>
                    </div>
                  ))}
                  <div className={s.plus_btn} onClick={() => arrayHelpers.push('')}>
                    +
                  </div>
                </div>
              )}
            />
          </fieldset>

          <fieldset>
            <label>выберите фото</label>
            <PhotoUploader setFieldValue={setFieldValue} />
          </fieldset>

          <fieldset>
            <label htmlFor="youtube">у вас есть youtube видео?</label>
            <Field name="youtube" className={s.youtube_input} />
          </fieldset>

          <fieldset>
            <label htmlFor="tags">выберите теги-категории вашего коктейля </label>
            <Categories categories={categories} setFieldValue={setFieldValue} />
          </fieldset>

          <Button type={ButtonTypes.Submit} text="Создать коктейль" />
        </Form>
      )}
    </Formik>
  )
}
