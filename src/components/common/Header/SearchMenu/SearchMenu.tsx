import { useState } from 'react'
import s from './SearchMenu.module.scss'
import icon_find from '@/assets/images/icons/a-icon-find.svg'

export const SearchMenu = () => {
  const [showSearch, setShowSearch] = useState(false)

  const toggleShowingSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <div className={s.search}>
      {showSearch && <input type="text" className={s.search_input} autoFocus={true} />}
      <div className={s.icon_wrapper} onClick={toggleShowingSearch}>
        <img src={icon_find} alt="icon_find" className={s.icon} />
      </div>
    </div>
  )
}
