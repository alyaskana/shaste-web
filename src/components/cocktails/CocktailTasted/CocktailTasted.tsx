import { FC } from 'react'
import { useStore } from 'effector-react'

import { cocktailsFetcher } from '@api/cocktails'
import { Cocktail } from '@types'
import { $currentUser, setCurrentUserTasted } from '@models/users'

import { IconWithCounter, Style } from '@components/common/IconWithCounter'

import { ReactComponent as ToastIconDefault } from '@icons/toast_icon_default.svg'
import { ReactComponent as ToastIconHover } from '@icons/toast_icon_hover.svg'
import { ReactComponent as ToastIconActive } from '@icons/toast_icon_active.svg'

type CocktailTastedProps = {
  cocktail: Cocktail
  setCocktail: (cocktail: Cocktail) => void
}

export const CocktailTasted: FC<CocktailTastedProps> = ({ cocktail, setCocktail }) => {
  const currentUser = useStore($currentUser)
  const isTasted = currentUser.tasted.some((taste) => taste.id === cocktail.id)

  const handleTaste = () => {
    if (isTasted) {
      cocktailsFetcher.untaste(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserTasted(currentUser.tasted.filter((taste) => taste.id != cocktail.id))
      })
    } else {
      cocktailsFetcher.taste(cocktail.id).then((response) => {
        setCocktail(response.data)
        setCurrentUserTasted([...currentUser.tasted, { id: cocktail.id }])
      })
    }
  }
  return (
    <IconWithCounter
      defaulIcon={<ToastIconDefault />}
      hoverIcon={<ToastIconHover />}
      activeIcon={<ToastIconActive />}
      isActive={isTasted}
      count={cocktail.tasted_users}
      style={Style.Light}
      onClick={handleTaste}
    />
  )
}
