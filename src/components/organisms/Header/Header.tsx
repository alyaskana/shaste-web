import { useState } from 'react'
import { useStore } from 'effector-react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import { NavigationProfileMenu } from '@organisms/NavigationProfileMenu'
import { NavigationMenu } from '@molecules/NavigationMenu'
import { Logo } from '@atoms/Logo'
import { SearchMenu } from '@molecules/SearchMenu'
import { Button } from '@atoms/Button'
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
