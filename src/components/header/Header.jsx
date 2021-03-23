import { NavLink } from "react-router-dom"
import s from "./Header.module.css"

const Header = (props) => {
  return (
    <div className={s.top_menu}>
      <NavLink to='/cocktails' activeClassName={s.active}>Коктейли</NavLink> |
      <NavLink to='/posts' activeClassName={s.active}>Посты</NavLink> |
      <NavLink to='/users' activeClassName={s.active}>Пользователи</NavLink>
    </div>
  )
}

export default Header