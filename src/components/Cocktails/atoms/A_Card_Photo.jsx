import React from 'react';
import s from './A_Card_Photo.module.scss'

const A_Card_Photo = ({ src }) => {
  return (
    <div className={s.img_wrapper}>
      <img src={src} alt='cocktail' className={s.img} />
    </div>
  );
};

export default A_Card_Photo;