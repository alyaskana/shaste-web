import s from './RecipeStep.module.scss'

export const RecipeStep = ({ step, text }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.step}>{step}.</div>
      <div className={s.text}>{text}</div>
    </div>
  )
}
