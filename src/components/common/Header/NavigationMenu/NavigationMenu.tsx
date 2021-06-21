import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavigationMenu.module.scss'

export const NavigationMenu = ({ user }) => {
  return (
    <div className={s.pages}>
      {user && (
        <NavLink to="/feed" activeClassName={s.active}>
          лента
        </NavLink>
      )}
      <NavLink to="/cocktails" activeClassName={s.active}>
        рецепты
      </NavLink>
      <NavLink to="/collections" activeClassName={s.active}>
        подборки
      </NavLink>
    </div>
  )
}
