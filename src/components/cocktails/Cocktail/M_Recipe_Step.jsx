import React from 'react';
import s from './M_Recipe_Step.module.scss'

const M_Recipe_Step = ({ step, text }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.step}>{step}.</div>
      <div className={s.text}>{text}</div>
    </div>
  );
};

export default M_Recipe_Step;