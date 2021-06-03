import { useState, useEffect } from 'react';
import s from './NewCocktailPage.module.scss'
import { get } from '@api/apiFetcher'
import { TitleSecondary, Font } from '@atoms/TitleSecondary'
import { TCategory } from '@organisms/Categories'
import { NewCocktailForm } from '@organisms/NewCocktailForm';

const tags = [] as TCategory[]

export const NewCocktailPage = () => {
  const [categories, setCategories] = useState(tags)
  useEffect(() => {
    get(`tags`).then(response => {
      setCategories(response.data.tags)
    })
  }, []);

  return (
    <div className={s.page_wrapper}>
      <div className={s.title_wrapper}>
        <TitleSecondary title='СОЗДАЕМ РЕЦЕПТ' font={Font.SK_Zweig} />
      </div>
      <NewCocktailForm categories={categories} />
    </div>
  );
};