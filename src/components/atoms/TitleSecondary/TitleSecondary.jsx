import React from 'react';
import s from './TitleSecondary.module.scss'

export const TitleSecondary = ({ title }) => {
  return (
    <div className={s.title}>
      {title}
    </div>
  );
};