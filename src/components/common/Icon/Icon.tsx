import { useState, FC, ReactElement } from 'react'
import cn from 'classnames'
import s from './Icon.module.scss'

type IconProps = {
  defaulIcon: ReactElement
  hoverIcon: ReactElement
  activeIcon: ReactElement
  isActive: boolean
  className?: string
}

export const Icon: FC<IconProps> = ({ defaulIcon, hoverIcon, activeIcon, isActive, className }) => {
  const [currentIcon, setCurrentIcon] = useState(defaulIcon)

  const handleLeave = () => {
    setCurrentIcon(defaulIcon)
  }
  const handleEnter = () => {
    setCurrentIcon(hoverIcon)
  }

  return (
    <div className={cn(s.icon_wrapper, className)} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {isActive ? activeIcon : currentIcon}
    </div>
  )
}
