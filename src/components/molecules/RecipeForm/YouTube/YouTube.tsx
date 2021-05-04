import React from 'react';
import s from './YouTube.module.scss'
import { ReactComponent as IconLink } from '@icons/icon_link.svg';

export const YouTube = () => {
  return (
    <div className={s.youtube}>
      <IconLink />
      <input type="text" name="cocktail[youtube]" placeholder='ссылка на видео' />
    </div>
  );
};