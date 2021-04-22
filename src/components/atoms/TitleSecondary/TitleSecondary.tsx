import React, { FC } from 'react';
import s from './TitleSecondary.module.scss'
import cn from 'classnames'

export enum Font {
  SK_Zweig = 'SK_Zweig',
  Stravinsky = 'Stravinsky',
}

type TTitleSecondaryProps = {
  title: string
  className?: string
  font: string
}

export const TitleSecondary: FC<TTitleSecondaryProps> = ({ title, className, font }) => {
  return (
    <div className={cn(s.title, className, s[font])}>
      {title}
    </div>
  );
};