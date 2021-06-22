import s from './RecipePhoto.module.scss'

export const RecipePhoto = ({ src }) => {
  return <div className={s.img_wrapper} style={{ backgroundImage: `url(${src})` }}></div>
}
