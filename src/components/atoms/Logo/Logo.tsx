import React from 'react';
import s from './Logo.module.scss'
import logo from '@/assets/images/a-logo.svg'

export const Logo = () => {
  return (
    <div className={s.logo_wrapper}>
      <img src={logo} alt="logo" className={s.logo} />
    </div>
  );
};