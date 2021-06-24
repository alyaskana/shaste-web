import { FC } from 'react'
import s from './SimilarCocktails.module.scss'
import { Cocktail } from '@types'
import { TitleSecondary } from '@components/common/TitleSecondary'
import { RecipeCard } from '@components/cocktails/RecipeCard'

type SimilarCocktailsProps = {
  cocktail: Cocktail
}

export const SimilarCocktails: FC<SimilarCocktailsProps> = ({ cocktail }) => {
  return (
    <div className={s.similar_cocktails}>
      <TitleSecondary title="Коктейли с похожими ингредиентами" />
      <div className={s.similar_cocktails_items}>
        {cocktail.similar_cocktails.map((cocktail) => (
          <RecipeCard key={cocktail.id} cocktail={cocktail} className={s.similar_cocktails_item} />
        ))}
      </div>
    </div>
  )
}
