import { FC } from 'react'
import s from './CocktailTags.module.scss'

type CocktailTagProps = {
  tagName: string
  count?: number
}

export const CocktailTag: FC<CocktailTagProps> = ({ tagName, count }) => {
  return (
    <span className={s.tag}>
      {tagName} {count}
    </span>
  )
}
