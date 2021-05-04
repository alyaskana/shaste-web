import { useState, useEffect } from 'react';
import s from './NewCocktailPage.module.scss'
import { get } from '@api/apiFetcher'
import { TitleSecondary, Font } from '@atoms/TitleSecondary'
import { Categories, TCategory } from '@organisms/Categories'
import { Steps } from '@molecules/RecipeForm/Steps'
import { Ingredients } from '@molecules/RecipeForm/Ingredients'
import { CocktailName } from '@molecules/RecipeForm/CocktailName'
import { YouTube } from '@molecules/RecipeForm/YouTube';
import { PhotoUploader } from '@molecules/RecipeForm/PhotoUploader';
import { Description } from '@molecules/RecipeForm/Description';

const tags = [
  {
    "id": 1,
    "name": "сладкий",
    "tag_type": "taste"
  },
  {
    "id": 2,
    "name": "кислый",
    "tag_type": "taste"
  },
  {
    "id": 3,
    "name": "кисло-сладкий",
    "tag_type": "taste"
  },
  {
    "id": 4,
    "name": "горький",
    "tag_type": "taste"
  },
  {
    "id": 5,
    "name": "соленый",
    "tag_type": "taste"
  },
  {
    "id": 6,
    "name": "хорошо посидеть",
    "tag_type": "goal"
  },
  {
    "id": 7,
    "name": "расслабиться",
    "tag_type": "goal"
  },
  {
    "id": 8,
    "name": "вечеринка с друзьями",
    "tag_type": "goal"
  },
  {
    "id": 9,
    "name": "набухаться в хлам",
    "tag_type": "goal"
  }
] as TCategory[]

export const NewCocktailPage = () => {
  const [categories, setCategories] = useState(tags)
  useEffect(() => {
    // get(`tags`).then(response => {
    //   setCategories(response.data.tags)
    // })
  }, []);

  return (
    <div className={s.page_wrapper}>
      <div className={s.title_wrapper}>
        <TitleSecondary title='СОЗДАЕМ РЕЦЕПТ' font={Font.SK_Zweig} />
      </div>
      <form className={s.form}>
        <fieldset>
          <label>
            <h2>как называется ваш коктейль?</h2>
            <CocktailName />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <h2>описание</h2>
            <Description />
          </label>
        </fieldset>
        <fieldset>
          <div className={s.ingredients}>
            <h2>какие нужны ингредиенты?</h2>
            <label>
              <h2>сколько?<span className={s.caption}>необязательно</span></h2>
            </label>
          </div>
          <Ingredients />
        </fieldset>
        <fieldset>
          <label>
            <h2>что нужно сделать?<span className={s.caption}>пошагово</span></h2>
          </label>
          <Steps />
        </fieldset>
        <fieldset>
          <label>
            <h2>выберите фото</h2>
          </label>
          <PhotoUploader />
        </fieldset>
        <fieldset>
          <label>
            <h2>у вас есть youtube видео?</h2>
          </label>
          <YouTube />
        </fieldset>
        <fieldset>
          <label>
            <h2>выберите теги-категории вашего коктейля </h2>
          </label>
          <Categories categories={categories} />
        </fieldset>
        <div className={s.btn_wrapper}>
          <button type="submit">создать рецепт</button>
        </div>
      </form>
    </div>
  );
};