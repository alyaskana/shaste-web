import { NavLink } from 'react-router-dom'
import { useStore } from 'effector-react'
import { $token } from '@models/users'
import s from './Navigation.module.scss'

export const Navigation = () => {
  const token = useStore($token)

  return (
    <div className={s.pages}>
      {token && (
        <NavLink to="/feed" activeClassName={s.active}>
          лента
        </NavLink>
      )}
      <NavLink to="/cocktails" activeClassName={s.active}>
        рецепты
      </NavLink>
      {/* <NavLink to="/collections" activeClassName={s.active}>
        подборки
      </NavLink> */}
    </div>
  )
}
