import { NavLink } from 'react-router-dom'
import s from './NavigationProfileMenu.module.scss'
import { setToken, setCurrentUser } from '../../../models/users'

export const NavigationProfileMenu = ({ user }) => {
  const handleLogout = () => {
    setToken(null)
    setCurrentUser(null)
    window.location.reload()
  }

  return (
    <div className={s.user_menu_wrapper}>
      <div className={s.user_menu}>
        <NavLink to={`/${user.login}`}>
          <div className={s.header}>
            <div className={s.avatar_wrapper}>
              <img src={'//localhost:3000' + user.avatar.thumb.url} alt="" />
            </div>
            <div className={s.bio}>
              <div className={s.name}>{user.user_name}</div>
              <div className={s.login}>@{user.login}</div>
            </div>
          </div>
        </NavLink>
        <div className={s.separator}></div>
        <div className={s.links}>
          <NavLink to="/profile/mybar" className={s.link}>
            мой бар
          </NavLink>
          <NavLink to="/profile" className={s.link}>
            избранное
          </NavLink>
          <NavLink to="/profile" className={s.link}>
            настройки
          </NavLink>
        </div>
        <div className={s.separator}></div>
        <div className={s.logout} onClick={handleLogout}>
          выйти
        </div>
      </div>
    </div>
  )
}
