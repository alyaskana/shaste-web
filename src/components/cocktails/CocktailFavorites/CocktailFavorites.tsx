import { FC } from 'react'
import { useStore } from 'effector-react'

import { cocktailsFetcher } from '@api/cocktails'
import { Cocktail } from '@types'
import { $currentUser, setCurrentUserFavorites } from '@models/users'

import { IconWithCounter, Style } from '@components/common/IconWithCounter'

import { ReactComponent as SaveIconDefault } from '@icons/save_icon_default.svg'
import { ReactComponent as SaveIconHover } from '@icons/save_icon_hover.svg'
import { ReactComponent as SaveIconActive } from '@icons/save_icon_active.svg'

type CocktailFavoritesProps = {
  cocktail: Cocktail
  setCocktail: (cocktail: Cocktail) => void
}

export const CocktailFavorites: FC<CocktailFavoritesProps> = ({ cocktail, setCocktail }) => {
  const currentUser = useStore($currentUser)
  const isFavorited = currentUser && currentUser.favorites.some((favorite) => favorite.id === cocktail.id)

  const handleFavorite = () => {
    if (isFavorited) {
      cocktailsFetcher.unfavorite(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserFavorites(currentUser.favorites.filter((favorite) => favorite.id != cocktail.id))
      })
    } else {
      cocktailsFetcher.favorite(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserFavorites([...currentUser.favorites, { id: cocktail.id }])
      })
    }
  }

  return (
    <IconWithCounter
      defaulIcon={<SaveIconDefault />}
      hoverIcon={<SaveIconHover />}
      activeIcon={<SaveIconActive />}
      isActive={isFavorited}
      count={cocktail.favorited_users}
      style={Style.Light}
      onClick={handleFavorite}
    />
  )
}
