import React from 'react'
import s from './CardPhoto.module.scss'

export const CardPhoto = ({ src }) => {
  return (
    <div className={s.img_wrapper} style={{ backgroundImage: `url(${src})` }}>
      {/* <img src={src} alt='cocktail' className={s.img} /> */}
    </div>
  )
}
