import { useState, useEffect } from 'react';
import s from './NewCocktailPage.module.scss'
import { tagsFetcher } from '../../api/tags'
import { ingredientsFetcher } from '../../api/ingredients'
import { Tag } from '../../types'
import { TitleSecondary, Font } from '@atoms/TitleSecondary'
import { NewCocktailForm } from '@organisms/NewCocktailForm';

type ingrediensOption = {
  label: string,
  value: string
}

export const NewCocktailPage = () => {
  const [categories, setCategories] = useState<Tag[]>([])
  useEffect(() => {
    tagsFetcher.getAll().then(response => {
      setCategories(response.data.tags)
    })
  }, []);

  const [ingrediensOptions, setIngrediensOptions] = useState<ingrediensOption[]>([])

  const updateIngrediensOptions = (text: string) => {
    if (text.length < 3) {
      return setIngrediensOptions([])
    }

    ingredientsFetcher.search(text).then(response => {
      const options = response.data.ingredients.map(i => ({ label: i.name, value: i.id.toString() }))
      setIngrediensOptions(options)
    })
  }

  return (
    <div className={s.page_wrapper}>
      <div className={s.title_wrapper}>
        <TitleSecondary title='СОЗДАЕМ РЕЦЕПТ' font={Font.SK_Zweig} />
      </div>
      <NewCocktailForm
        ingredientsOptions={ingrediensOptions}
        categories={categories}
        updateIngrediensOptions={updateIngrediensOptions}
      />
    </div>
  );
};