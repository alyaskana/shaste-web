import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useStore } from 'effector-react'

import { Cocktail } from '@types'
import { $currentUser } from '@models/users'

import { CardPhoto } from '@components/cocktails/CardPhoto'
import { IconWithCounter, Style } from '@components/common/IconWithCounter'

import s from './RecipeInfo.module.scss'

import { ReactComponent as ToastIconDefault } from '@icons/toast_icon_default.svg'
import { ReactComponent as ToastIconHover } from '@icons/toast_icon_hover.svg'
import { ReactComponent as ToastIconActive } from '@icons/toast_icon_active.svg'

import { ReactComponent as LikeIconDefault } from '@icons/like_icon_default.svg'
import { ReactComponent as LikeIconHover } from '@icons/like_icon_hover.svg'
import { ReactComponent as LikeIconActive } from '@icons/like_icon_active.svg'

import { ReactComponent as SaveIconDefault } from '@icons/save_icon_default.svg'
import { ReactComponent as SaveIconHover } from '@icons/save_icon_hover.svg'
import { ReactComponent as SaveIconActive } from '@icons/save_icon_active.svg'

type RecipeInfoProps = {
  cocktail: Cocktail
  handleLike: () => void
  handleFavorite: () => void
  handleTaste: () => void
}

export const RecipeInfo: FC<RecipeInfoProps> = ({ cocktail, handleLike, handleFavorite, handleTaste }) => {
  const currentUser = useStore($currentUser)

  return (
    <div className={s.wrapper}>
      <div className={s.content_wrapper}>
        <div className={s.info}>
          <div>
            <div className={s.cocktail_title}>{cocktail.title}</div>
            <div className={s.description}>{cocktail.description}</div>
          </div>
          <div>
            <div className={s.tags}>
              {Object.entries(cocktail.tags).map(([tag, count], index) => (
                <span key={index} className={s.tag}>
                  {tag} {count}
                </span>
              ))}
            </div>
            <div className={s.actions}>
              <IconWithCounter
                defaulIcon={<ToastIconDefault />}
                hoverIcon={<ToastIconHover />}
                activeIcon={<ToastIconActive />}
                isActive={currentUser.tasted.some((tastedItem) => tastedItem.id === cocktail.id)}
                count={cocktail.tasted_users}
                style={Style.Light}
                onClick={handleTaste}
              />
              <IconWithCounter
                defaulIcon={<LikeIconDefault />}
                hoverIcon={<LikeIconHover />}
                activeIcon={<LikeIconActive />}
                isActive={currentUser.likes.some((like) => like.id === cocktail.id)}
                count={cocktail.liked_users}
                style={Style.Light}
                onClick={handleLike}
              />
              <IconWithCounter
                defaulIcon={<SaveIconDefault />}
                hoverIcon={<SaveIconHover />}
                activeIcon={<SaveIconActive />}
                isActive={currentUser.favorites.some((favorite) => favorite.id === cocktail.id)}
                count={cocktail.favorited_users}
                style={Style.Light}
                onClick={handleFavorite}
              />
            </div>
            <NavLink to={`/${cocktail.user.login}`} className={s.author}>
              @{cocktail.user.login}
            </NavLink>
          </div>
        </div>
        <div className={s.image}>
          <CardPhoto src={'//localhost:3000' + cocktail.image.url} />
        </div>
      </div>
    </div>
  )
}
