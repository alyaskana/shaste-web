import { useState } from 'react'
import { useStore } from 'effector-react'
import { useHistory } from 'react-router-dom'
import s from './Header.module.scss'
import { NavigationProfileMenu } from '@components/common/Header/NavigationProfileMenu'
import { Navigation } from '@components/common/Header/Navigation'
import { ReactComponent as Logo } from '@/assets/images/logo.svg'
import { Button, ButtonTypes } from '@components/common/Button'
import { $currentUser } from '../../../models/users'

export const Header = () => {
  const currentUser = useStore($currentUser)
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
        {currentUser ? (
          <>
            <Button
              type={ButtonTypes.Button}
              text="Cоздать свой рецепт"
              onClick={() => history.push('/cocktails/new')}
              className="outlined"
            />
            <div className={s.avatar_wrapper} onMouseEnter={toggleShowingUserMenu} onMouseLeave={toggleShowingUserMenu}>
              <img src={currentUser.avatar.thumb.url} alt="" />
              {showUserMenu && <NavigationProfileMenu user={currentUser} />}
            </div>
          </>
        ) : (
          <Button
            type={ButtonTypes.Button}
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
