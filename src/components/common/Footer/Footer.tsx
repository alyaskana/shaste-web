import { Link } from 'react-router-dom'
import s from './Footer.module.scss'
import { ReactComponent as SignSvg } from '@/assets/images/sign_black.svg'

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_content}>
        <div>©2020 – 2021, Shast’e</div>
        <SignSvg className={s.logo} />
        <div className={s.social_links}>
          <Link to="/">youtube</Link>
          <Link to="/">facebook</Link>
          <Link to="/">instagram</Link>
        </div>
      </div>
    </div>
  )
}
