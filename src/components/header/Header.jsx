import { useContext } from "react";
import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import UserContext from '../../userContext'

const Header = (props) => {
  const user = useContext(UserContext)

  return (
    <div className={s.top_menu}>
      <NavLink to='/cocktails' activeClassName={s.active}>Коктейли</NavLink> |
      <NavLink to='/posts' activeClassName={s.active}>Посты</NavLink>
      {user &&
        <>
          | <NavLink to='/users' activeClassName={s.active}>Пользователи</NavLink>
          | {user.login}
        </>}
    </div>
  )
}

export default Header