import { useState } from "react";
import s from "./Profile.module.scss"
import { useStore } from "effector-react";
import { userStore } from '../../store'
import cn from 'classnames'
import { CounterProfile } from "@components/atoms/CounterProfile";
import IconLink from '@icons/icon_link.svg';
import { Link } from "react-router-dom"

enum ContentTabTypes {
  Posts = 'posts',
  Recipes = 'recipes'
}

export const Profile = () => {
  const user = useStore(userStore)
  const [contentTab, setContentTab] = useState('posts')

  return (
    <div className={s.wrapper}>
      <div className={s.bio}>
        <div className={s.head}>
          <div className={cn(s.column, s.left)}>
            <CounterProfile text='подписки' amount={user.followings.length} />
            <CounterProfile text='коктейлей опробовано' amount={user.tasted.length} />
          </div>
          <div className={s.avatar_wrapper}>
            <img src={"//localhost:3000" + user.avatar.url} alt="" />
          </div>
          <div className={cn(s.column, s.right)}>
            <CounterProfile text='подписчики' amount={user.followers.length} />
            <CounterProfile text='рецептов создано' amount={user.cocktails.length} />
          </div>
        </div>
        <div className={s.username}>
          {user.user_name}
        </div>
        <div className={s.login}>
          @{user.login}
        </div>
        <div className={s.description}>
          {user.description}
        </div>
        {user.link && (
          <>
            <Link to={user.link} className={s.link}>
              <img src={IconLink} alt='' className={s.link_icon} />
              {user.link}
            </Link>
          </>
        )}
      </div>
      <div className={s.select_content_tab}>
        <div className={cn(s.select_item, { [s.isActive]: contentTab === ContentTabTypes.Posts })} onClick={() => setContentTab(ContentTabTypes.Posts)}>
          все посты
        </div>
        <div className={s.separator} />
        <div className={cn(s.select_item, { [s.isActive]: contentTab === ContentTabTypes.Recipes })} onClick={() => setContentTab(ContentTabTypes.Recipes)}>
          мои рецепты
        </div>
      </div>
      <div className={s.content_wrapper}>
        {contentTab === ContentTabTypes.Posts ? (
          <div>
            here will be posts
          </div>
        ) : (
          <div>
            here will be recipes
          </div>
        )}
      </div>
    </div >
  );
};