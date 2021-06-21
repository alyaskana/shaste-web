import { useState } from 'react'
import { useStore } from 'effector-react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import { NavigationProfileMenu } from '@components/common/Header/NavigationProfileMenu'
import { NavigationMenu } from '@components/common/Header/NavigationMenu'
import { Logo } from '@components/common/Header/Logo'
import { SearchMenu } from '@components/common/Header/SearchMenu'
import { Button } from '@components/common/Button'
import { $currentUser, $token } from '../../../models/users'

export const Header = () => {
  const user = useStore($currentUser)
  const token = useStore($token)
  const [showUserMenu, setUserMenu] = useState(false)

  const toggleShowingUserMenu = () => {
    setUserMenu(!showUserMenu)
  }

  return (
    <div className={s.top_menu}>
      <NavigationMenu user={user} />
      <Logo />
      <div className={s.right_side}>
        <SearchMenu />
        {token ? (
          <div className={s.avatar_wrapper} onMouseEnter={toggleShowingUserMenu} onMouseLeave={toggleShowingUserMenu}>
            <img src={'//localhost:3000' + user.avatar.thumb.url} alt="" />
            {showUserMenu && <NavigationProfileMenu user={user} />}
          </div>
        ) : (
          <NavLink to="/login" className={s.login}>
            вход
          </NavLink>
        )}
        <Button
          text="войти"
          onClick={() => {
            return false
          }}
        />
      </div>
    </div>
  )
}
