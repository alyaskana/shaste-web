import React from 'react';
import s from './Button.module.scss'

export const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={s.btn}>
      {text}
    </button>
  );
};
