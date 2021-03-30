import { useContext } from "react";
import { NavLink } from "react-router-dom"
import s from "./Header.module.scss"
import UserContext from '../../userContext'
import logo from '../../assets/images/a-logo.svg'
import icon_find from '../../assets/images/icons/a-icon-find.svg'

const Header = (props) => {
  const user = useContext(UserContext)

  return (
    <div className={s.top_menu}>
      <div className={s.pages}>
        {user && <NavLink to='/feed' activeClassName={s.active}>лента</NavLink>}
        <NavLink to='/cocktails' activeClassName={s.active}>рецепты</NavLink>
        <NavLink to='/collections' activeClassName={s.active}>подборки</NavLink>
      </div>
      <div className={s.logo_wrapper}>
        <img src={logo} alt="logo" className={s.logo} />
      </div>
      <div className={s.right_side}>
        <div className={s.search}>
          <input type="text" className={s.search_input} />
          <div className={s.icon_wrapper}>
            <img src={icon_find} alt="icon_find" className={s.icon} />
          </div>
        </div>
        <div className={s.avatar_wrapper}>
        </div>
      </div>
    </div>
  )
}

export default Header