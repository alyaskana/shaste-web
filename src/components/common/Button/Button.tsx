import { FC } from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

export enum ButtonTypes {
  Submit = 'submit',
  Button = 'button',
}

type ButtonProps = {
  text: string
  type: ButtonTypes
  onClick?: () => void
  className?: string
}

export const Button: FC<ButtonProps> = ({ text, onClick, className, type }) => {
  return (
    <button type={type} onClick={onClick} className={cn(s.btn, s[className])}>
      {text}
    </button>
  )
}
