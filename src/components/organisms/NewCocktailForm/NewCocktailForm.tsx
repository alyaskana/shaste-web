import { FC } from 'react';
import s from './NewCocktailForm.module.scss'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import { PhotoUploader } from '@components/molecules/PhotoUploader';
import { Categories } from '@organisms/Categories'

type TNewCocktailFormProps = {
  categories: []
}

export const NewCocktailForm: FC<TNewCocktailFormProps> = ({ categories }) => {
  return (
    <Formik
      initialValues={{
        cocktailName: '',
        ingredients: [
          {
            name: '',
            count: ''
          },
        ],
        steps: ['',],
        photo: null,
        tags: { goals: [], tastes: [] },
      }}
      validationSchema={Yup.object({
        cocktailName: Yup.string().min(4, 'Не менее 4 знаков').required('Обязательное поле'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(values);

          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={s.form}>
          <fieldset>
            <label htmlFor="cocktailName">как называется ваш коктейль?</label>
            <Field
              name="cocktailName"
              type="text"
              placeholder='маргарита, текила санрайз, молочный пунш'
            />
            <ErrorMessage name="cocktailName" />
          </fieldset>

          <fieldset>
            <div className={s.ingredients}>
              <label htmlFor="ingredients">какие нужны ингредиенты?</label>
              <label htmlFor="ingredients">сколько?<span className={s.caption}>необязательно</span></label>
            </div>
            <FieldArray
              name="ingredients"
              render={arrayHelpers => (
                <div>
                  {values.ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <div className={s.ingredient_row}>
                        <Field className={s.ingredient_name} name={`ingredients[${index}].name`} placeholder='клубника' />
                        <Field className={s.ingredient_count} name={`ingredients.${index}.count`} placeholder='25 мл' />
                      </div>
                      {/* <div className={s.plus_btn} onClick={() => arrayHelpers.remove(index)}>
                        -
                      </div> */}
                    </div>
                  ))}
                  <div className={s.plus_btn} onClick={() => arrayHelpers.push({ name: '', count: '' })}>
                    +
                  </div>
                </div>
              )}
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
                        <Field name={`steps[${index}]`} as='textarea' className={s.textarea} placeholder='что нужно сделать' />
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
            <label htmlFor="link">у вас есть youtube видео?</label>
            <Field name='link' />
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