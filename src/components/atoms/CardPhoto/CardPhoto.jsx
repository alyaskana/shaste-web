import React from 'react';
import s from './CardPhoto.module.scss'

export const CardPhoto = ({ src }) => {
  return (
    <div className={s.img_wrapper}>
      <img src={src} alt='cocktail' className={s.img} />
    </div>
  );
};