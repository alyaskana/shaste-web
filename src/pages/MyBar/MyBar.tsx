import { useEffect, useState, useContext } from 'react';
import s from './MyBar.module.scss'
import Select from 'react-select';
import { get, post } from '@api/apiFetcher'
import UserContext from '@context/userContext'
import { userStore } from '@/store'

export const MyBar = () => {
  const userData = useContext(UserContext)

  const user = userStore.getState();

  const [ingredientsOptions, setIngredientsOptions] = useState([])

  useEffect(() => {
    get(`ingredients`).then(response => {
      setIngredientsOptions(response.data.ingredients
        .filter(x => !user.ingredients.map(i => i.id).includes(x.id))
        .map(i => ({
          value: i.id.toString(),
          label: i.name,
        }))
        .sort((a, b) => {
          if (a.label > b.label) {
            return 1;
          }
          if (a.label < b.label) {
            return -1;
          }
          return 0;
        }))
    })
  }, [user.ingredients, userData]);

  const handleAddIngredient = (selectedItem) => {
    post('profile/ingredients', { id: selectedItem.value }, { "Content-Type": "application/json" }).then((response) => {
      user.ingredients = response.data.ingredients
    })
  }

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        МОЙ БАР
      </div>
      <div className={s.text}>
        здесь вы можете добавить ингредиенты, которые есть у вас дома, чтобы легко найти соотвествующие рецепты
      </div>
      <Select
        options={ingredientsOptions}
        placeholder='клубника, корица, лимонный сок...'
        onChange={handleAddIngredient}
      />
      <div className={s.user_ingredients}>
        {user.ingredients.map(i => (
          <div className={s.user_ingredient}>{i.name}</div>
        ))}
      </div>
    </div>
  );
};