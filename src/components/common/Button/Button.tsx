import { FC } from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

type ButtonProps = {
  text: string
  onClick: () => void
  className?: string
}

export const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={cn(s.btn, s[className])}>
      {text}
    </button>
  )
}
