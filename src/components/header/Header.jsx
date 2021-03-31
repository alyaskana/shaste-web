import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import UserContext from '../../userContext'
import logo from '../../assets/images/a-logo.svg'
import icon_find from '../../assets/images/icons/a-icon-find.svg'
import useUser from "../App/useUser";

const Header = (props) => {
  const user = useContext(UserContext)
  const { setUser } = useUser();
  const [showSearch, setShowSearch] = useState(false)
  const [showUserMenu, setUserMenu] = useState(false)

  const toggleShowingSearch = () => {
    setShowSearch(!showSearch)
  }

  const toggleShowingUserMenu = () => {
    setUserMenu(!showUserMenu)
  }

  const handleLogout = () => {
    setUser('')
    window.location.reload()
  }

  return (
    <div className={s.top_menu}>
      <div className={s.pages}>
        {user && <NavLink to='/feed' activeClassName={s.active}>лента</NavLink>}
        <NavLink to='/cocktails' activeClassName={s.active}>рецепты</NavLink>
        <NavLink to='/collections' activeClassName={s.active}>подборки</NavLink>
      </div>
      <div className={s.logo_wrapper}>
        <NavLink to='/'>
          <img src={logo} alt="logo" className={s.logo} />
        </NavLink>
      </div>
      <div className={s.right_side}>
        <div className={s.search}>
          {showSearch && <input type="text" className={s.search_input} autoFocus={true} />}
          <div className={s.icon_wrapper} onClick={toggleShowingSearch}>
            <img src={icon_find} alt="icon_find" className={s.icon} />
          </div>
        </div>
        {user ? (
          <div className={s.avatar_wrapper}
            onMouseEnter={toggleShowingUserMenu}
            onMouseLeave={toggleShowingUserMenu} >
            <img src={"//localhost:3000" + user.avatar.thumb.url} alt="" />
            {showUserMenu &&
              <div className={s.user_menu_wrapper}>
                <div className={s.user_menu}>
                  <NavLink to='/profile'>
                    <div className={s.header}>
                      <div className={s.avatar_wrapper}>
                        <img src={"//localhost:3000" + user.avatar.thumb.url} alt="" />
                      </div>
                      <div className={s.bio}>
                        <div className={s.name}>{user.user_name}</div>
                        <div className={s.login}>@{user.login}</div>
                      </div>
                    </div>
                  </NavLink>
                  <div className={s.separator}></div>
                  <div className={s.links}>
                    <NavLink to='/profile' className={s.link}>мой бар</NavLink>
                    <NavLink to='/profile' className={s.link}>избранное</NavLink>
                    <NavLink to='/profile' className={s.link}>настройки</NavLink>
                  </div>
                  <div className={s.separator}></div>
                  <div className={s.logout} onClick={handleLogout} >
                    выйти
                  </div>
                </div>
              </div>}
          </div>
        ) : (
          <NavLink to='/login' className={s.login}>вход</NavLink>
        )}
      </div>
    </div >
  )
}

export default Header