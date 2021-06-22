import { FC } from 'react'
import s from './Search.module.scss'
import { ReactComponent as SearchIconSvg } from '@icons/search_icon.svg'
import cn from 'classnames'

type SearchProps = {
  className?: string
}

export const Search: FC<SearchProps> = ({ className }) => {
  return (
    <div className={cn(s.search, className)}>
      <SearchIconSvg className={s.search_icon} />
      <input type="text" placeholder="маргарита, глинтвейн, все что угодно..." className={s.search_input} />
    </div>
  )
}
