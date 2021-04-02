import React from 'react';
import s from './A_Title_Secondary.module.scss'

const A_Title_Secondary = ({ title }) => {
  return (
    <div className={s.title}>
      {title}
    </div>
  );
};

export default A_Title_Secondary;