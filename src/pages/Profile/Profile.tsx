import { useState, useEffect } from "react";
import s from "./Profile.module.scss"
import { useStore } from "effector-react";
import cn from 'classnames'
import { CounterProfile } from "@components/atoms/CounterProfile";
import IconLink from '@icons/icon_link.svg';
import { Link } from "react-router-dom"
import { get, post } from "@api/apiFetcher";
import { $currentUser } from "../../models/users";
import { User } from "../../models/users/types";

const initialUser = {
  id: 0,
  login: '',
  user_name: '',
  description: '',
  link: '',
  updated_at: '',
  created_at: '',
  avatar: {
    thumb: {
      url: ''
    },
    url: ''
  },
  ingredients: [],
  followers: [],
  followings: [],
  cocktails: [],
  tasted: [],
}

enum ContentTabTypes {
  Posts = 'posts',
  Recipes = 'recipes'
}

export const Profile = (props) => {
  const userLogin = props.match.params.login
  const currentUser = useStore($currentUser)
  const [contentTab, setContentTab] = useState('posts')
  const [user, setUser] = useState(initialUser as User)
  const [userIsFollowed, setUserIsFollowed] = useState(false)

  useEffect(() => {
    get(`users/${userLogin}`).then(response => {
      setUser(response.data as User)
    })
  }, [userLogin, userIsFollowed])

  useEffect(() => {
    setUserIsFollowed(user.followers.some((follower) => follower.id === currentUser.id))
  }, [user.followers, currentUser.id])

  const handleFollow = () => {
    if (userIsFollowed) {
      post('users/unfollow', { id: user.id }).then(() => setUserIsFollowed(false))
    } else {
      post('users/follow', { id: user.id }).then(() => setUserIsFollowed(true))
    }
  }

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
        {user.id !== currentUser.id ? (
          <div className={cn(s.btn, { [s.isActive]: !userIsFollowed })} onClick={() => { handleFollow() }}>
            {userIsFollowed ? 'Отписаться' : 'Подписаться'}
          </div>
        ) : (<></>)}
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