import { FC, useContext } from 'react';
import s from './NewCocktailForm.module.scss'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { PhotoUploader } from '@components/molecules/PhotoUploader';
import { Categories, TCategory } from '@organisms/Categories'
import { post } from '@api/apiFetcher';
import UserContext from '@context/userContext'
import { Ingredients, TIngredientOption } from '@molecules/Ingredients'
import { useHistory } from 'react-router-dom';
import { serialize } from 'object-to-formdata';

type TNewCocktailFormProps = {
  categories: TCategory[],
  ingredientsOptions: TIngredientOption[],
  updateIngrediensOptions: (text: string) => void
}

export const NewCocktailForm: FC<TNewCocktailFormProps> = ({ ingredientsOptions, categories, updateIngrediensOptions }) => {
  const { token } = useContext(UserContext)
  const history = useHistory()
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        ingredients: [
          {
            ingredient: {
              label: '',
              value: ''
            },
            amount: ''
          },
        ],
        steps: ['',],
        photo: null,
        youtube: '',
        tags: { goals: [], tastes: [] },
      }}
      validationSchema={Yup.object({
        title: Yup.string().min(4, 'Не менее 4 знаков').required('Обязательное поле')
      })}
      onSubmit={(values, { setSubmitting }) => {
        const data = {
          cocktail: {
            ...values,
            tags: [
              ...values.tags.goals.map(goal => goal.value),
              ...values.tags.tastes.map(taste => taste.value)
            ],
            ingredients: values.ingredients.map(i => ({ id: i.ingredient.value, amount: i.amount }))
          }
        }
        post('cocktails', serialize(data), token, { "Content-Type": "multipart/form-data" }).then(response => {
          console.log(response.data.id);
          history.push(`/cocktails/${response.data.id}`);
        })
        setSubmitting(false);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={s.form}>
          <fieldset>
            <label htmlFor="title">как называется ваш коктейль?</label>
            <Field
              name="title"
              type="text"
              placeholder='маргарита, текила санрайз, молочный пунш'
            />
            <ErrorMessage name="title" />
          </fieldset>

          <fieldset>
            <label htmlFor="description">небольшое описание</label>
            <Field
              name="description"
              as='textarea'
              placeholder='пару слов туда-сюда сделай'
              className={s.textarea}
            />
            <ErrorMessage name="description" />
          </fieldset>

          <fieldset>
            <div className={s.ingredients}>
              <label htmlFor="ingredients">какие нужны ингредиенты?</label>
              <label htmlFor="ingredients">сколько?<span className={s.caption}>необязательно</span></label>
            </div>
            <Ingredients
              selectedIngredients={values.ingredients}
              ingredientsOptions={ingredientsOptions}
              setFieldValue={setFieldValue}
              updateIngrediensOptions={updateIngrediensOptions}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="steps">что нужно сделать?<span className={s.caption}>пошагово</span></label>
            <FieldArray
              name='steps'
              render={arrayHelpers => (
                <div>
                  {values.steps.map((step, index) => (
                    <div key={index}>
                      <div className={s.step}>
                        <Field
                          name={`steps[${index}]`}
                          as='textarea'
                          className={s.textarea}
                          placeholder='что нужно сделать' />
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
            <Field name='youtube' />
          </fieldset>

          <fieldset>
            <label htmlFor="tags">выберите теги-категории вашего коктейля </label>
            <Categories categories={categories} setFieldValue={setFieldValue} />
          </fieldset>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};