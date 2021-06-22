import { useState } from 'react'
import { useStore } from 'effector-react'
import { useHistory } from 'react-router-dom'
import s from './Header.module.scss'
import { NavigationProfileMenu } from '@components/common/Header/NavigationProfileMenu'
import { Navigation } from '@components/common/Header/Navigation'
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import { Button } from '@components/common/Button'
import { $currentUser, $token } from '../../../models/users'

export const Header = () => {
  const currentUser = useStore($currentUser)
  const token = useStore($token)
  const [showUserMenu, setUserMenu] = useState(false)
  const history = useHistory()

  const toggleShowingUserMenu = () => {
    setUserMenu(!showUserMenu)
  }

  return (
    <div className={s.top_menu}>
      <Navigation />
      <Logo />
      <div className={s.right_side}>
        {token ? (
          <>
            <Button text="Cоздать свой рецепт" onClick={() => history.push('/cocktails/new')} className="outlined" />
            <div className={s.avatar_wrapper} onMouseEnter={toggleShowingUserMenu} onMouseLeave={toggleShowingUserMenu}>
              <img src={'//localhost:3000' + currentUser.avatar.thumb.url} alt="" />
              {showUserMenu && <NavigationProfileMenu user={currentUser} />}
            </div>
          </>
        ) : (
          <Button
            text="Войти"
            onClick={() => {
              history.push('/login')
            }}
          />
        )}
      </div>
    </div>
  )
}
