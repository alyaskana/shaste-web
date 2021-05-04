import React from 'react';
import s from './Description.module.scss'

export const Description = () => {
  return (
    <>
      <textarea className={s.textarea} name='cocktail[description]' />
    </>
  );
};