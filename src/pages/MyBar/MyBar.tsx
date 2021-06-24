import { useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import s from './MyBar.module.scss'
import { ingredientsFetcher } from '../../api/ingredients'
import { usersFetcher } from '../../api/users'
import { $currentUser, setCurrentUserIngredients } from '../../models/users'
import { Selector } from './Selector'
import { Ingredients } from './Ingredients'

export type IngredientsOptionType = {
  label: string
  value: string
}

export const MyBar = () => {
  const user = useStore($currentUser)

  const [ingredientsOptions, setIngredientsOptions] = useState<IngredientsOptionType[]>([])

  useEffect(() => {
    ingredientsFetcher.getAll().then((response) => {
      setIngredientsOptions(
        response.data.ingredients
          .filter((x) => !user.ingredients.map((i) => i.id).includes(x.id))
          .map((i) => ({
            value: i.id.toString(),
            label: i.name,
          }))
          .sort((a, b) => {
            if (a.label > b.label) {
              return 1
            }
            if (a.label < b.label) {
              return -1
            }
            return 0
          }),
      )
    })
  }, [user.ingredients])

  const handleAddIngredient = (selectedItem) => {
    usersFetcher.addIngredientToMyBar(selectedItem.value).then((response) => {
      setCurrentUserIngredients(response.data.ingredients)
    })
  }

  return (
    <div className={s.wrapper}>
      <div className={s.title}>МОЙ БАР</div>
      <div className={s.text}>
        здесь вы можете добавить ингредиенты, которые есть у вас дома, чтобы легко найти соотвествующие рецепты
      </div>
      <Selector handleAddIngredient={handleAddIngredient} ingredientsOptions={ingredientsOptions} />
      <Ingredients ingredients={user.ingredients} />
    </div>
  )
}
