import { FC, ReactElement } from 'react'
import cn from 'classnames'

import { Icon } from '@components/common/Icon'
import s from './IconWithCounter.module.scss'

export enum Style {
  Light = 'light',
  Dark = 'dark',
}

type IconWithCounterProps = {
  defaulIcon: ReactElement
  hoverIcon: ReactElement
  activeIcon: ReactElement
  isActive: boolean
  style: Style
  count: number
  onClick: () => void
}

export const IconWithCounter: FC<IconWithCounterProps> = ({
  defaulIcon,
  hoverIcon,
  activeIcon,
  isActive,
  count,
  style,
  onClick,
}) => {
  return (
    <div className={cn(s.icon_with_counter, s[style])} onClick={onClick}>
      <Icon
        className={s.icon}
        defaulIcon={defaulIcon}
        hoverIcon={hoverIcon}
        activeIcon={activeIcon}
        isActive={isActive}
      />
      {count}
    </div>
  )
}
