import { FC, ReactElement } from 'react';
import s from './CounterProfile.module.scss'

type CounterProfileProps = {
  text: string,
  amount: number
}

export const CounterProfile: FC<CounterProfileProps> = ({ text, amount }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.counter}>
        {amount}
      </div>
      <div className={s.text}>
        {text}
      </div>
    </div>
  );
};