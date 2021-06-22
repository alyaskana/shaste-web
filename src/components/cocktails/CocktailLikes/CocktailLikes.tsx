import { FC } from 'react'
import { useStore } from 'effector-react'

import { cocktailsFetcher } from '@api/cocktails'
import { Cocktail } from '@types'
import { $currentUser, setCurrentUserLikes } from '@models/users'

import { IconWithCounter, Style } from '@components/common/IconWithCounter'

import { ReactComponent as LikeIconDefault } from '@icons/like_icon_default.svg'
import { ReactComponent as LikeIconHover } from '@icons/like_icon_hover.svg'
import { ReactComponent as LikeIconActive } from '@icons/like_icon_active.svg'

type CocktailLikesProps = {
  cocktail: Cocktail
  setCocktail: (cocktail: Cocktail) => void
}

export const CocktailLikes: FC<CocktailLikesProps> = ({ cocktail, setCocktail }) => {
  const currentUser = useStore($currentUser)
  const isLiked = currentUser && currentUser.likes.some((like) => like.id === cocktail.id)

  const handleLike = () => {
    if (isLiked) {
      cocktailsFetcher.unlike(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserLikes(currentUser.likes.filter((like) => like.id != cocktail.id))
      })
    } else {
      cocktailsFetcher.like(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserLikes([...currentUser.likes, { id: cocktail.id }])
      })
    }
  }

  return (
    <IconWithCounter
      defaulIcon={<LikeIconDefault />}
      hoverIcon={<LikeIconHover />}
      activeIcon={<LikeIconActive />}
      isActive={isLiked}
      count={cocktail.liked_users}
      style={Style.Light}
      onClick={handleLike}
    />
  )
}
