import React, { useState } from 'react';
import s from './Steps.module.scss'

const Step = () => (
  <div className={s.step}>
    <textarea className={s.textarea} name="cocktail[directions][]" placeholder='что нужно сделать' />
  </div>
)

export const Steps = () => {
  const [steps, setSteps] = useState([<Step />])
  const addStep = () => {
    setSteps([...steps, <Step />])
  }
  return (
    <>
      {steps}
      <div className={s.plus_btn} onClick={addStep}>+</div>
    </>
  );
};