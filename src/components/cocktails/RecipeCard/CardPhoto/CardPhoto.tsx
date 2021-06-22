import { FC } from 'react'
import s from './CardPhoto.module.scss'
import cn from 'classnames'

type CardPhotoProps = {
  src: string
  className?: string
}

export const CardPhoto: FC<CardPhotoProps> = ({ src, className }) => {
  return <div className={cn(s.img_wrapper, className)} style={{ backgroundImage: `url(${src})` }}></div>
}
