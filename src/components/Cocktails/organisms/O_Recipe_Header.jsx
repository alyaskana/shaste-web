import React from 'react';
import s from './O_Recipe_Header.module.scss'
import taste_icon from '../../../assets/images/icons/toast_icon_default.svg'
import taste_icon_active from '../../../assets/images/icons/toast_icon_active.svg'
import save_icon from '../../../assets/images/icons/save_icon_default.svg'
import save_icon_active from '../../../assets/images/icons/save_icon_active.svg'
import like_icon from '../../../assets/images/icons/like_icon_default.svg'
import like_icon_active from '../../../assets/images/icons/like_icon_active.svg'
import ActionIcon from '../atoms/A_Action_Icon'
import { NavLink } from "react-router-dom";

const O_Recipe_Header = ({ cocktail }) => {
  return (
    <div className={s.cocktail_header}>
      <div className={s.cocktail_title}>
        {cocktail.title}
      </div>
      <div className={s.tags}>
        {Object.entries(cocktail.tags).map(([tag, count]) => (
          <span className={s.tag}>
            {tag} {count}
          </span>
        ))}
      </div>
      <div className={s.actions}>
        <ActionIcon
          icon_src_default={taste_icon}
          icon_src_active={taste_icon_active}
          users_count={cocktail.tasted_users} />
        <ActionIcon
          icon_src_default={like_icon}
          icon_src_active={like_icon_active}
          users_count={cocktail.liked_users} />
        <ActionIcon
          icon_src_default={save_icon}
          icon_src_active={save_icon_active}
          users_count={cocktail.favorited_users} />
      </div>
      <div className={s.about}>
        <div className={s.description}>
          {cocktail.description}
        </div>
        <NavLink to={'/users/' + cocktail.user.id} className={s.author_wrapper}>
          <div className={s.author}>@{cocktail.user.login}</div>
        </NavLink>
      </div>
    </div>
  );
};

export default O_Recipe_Header;