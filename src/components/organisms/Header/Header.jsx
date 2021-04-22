import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import UserContext from '@/userContext'
import useUser from "@/hooks/useUser";
import { NavigationProfileMenu } from '@organisms/NavigationProfileMenu'
import { NavigationMenu } from "@molecules/NavigationMenu";
import { Logo } from '@atoms/Logo'
import { SearchMenu } from '@molecules/SearchMenu'
import { Button } from "@atoms/Button";

export const Header = (props) => {
  const user = useContext(UserContext)
  const { setUser } = useUser();
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
        {user ? (
          <div className={s.avatar_wrapper}
            onMouseEnter={toggleShowingUserMenu}
            onMouseLeave={toggleShowingUserMenu} >
            <img src={"//localhost:3000" + user.avatar.thumb.url} alt="" />
            {showUserMenu && <NavigationProfileMenu user={user} setUser={setUser} />}
          </div>
        ) : (
          <NavLink to='/login' className={s.login}>вход</NavLink>
        )}
        <Button text='войти' />
      </div>
    </div >
  )
}
