import { useState, useEffect } from 'react'
import { Post as PostType } from '../../types'
import { postsFetcher } from '../../api/posts'

import s from './FeedPage.module.scss'
import { Post } from '@components/common/Post'

const FeedPage = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    postsFetcher.getAll().then((response) => {
      setPosts(response.data.posts)
    })
  }, [])

  return (
    <div className={s.feed_page}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className={s.post_item}>
            <Post post={post} isRecipeCardShowing={true} />
          </div>
        ))
      ) : (
        <div className={s.content_plug}>Тут скоро появятся посты ваших друзей!</div>
      )}
    </div>
  )
}

export default FeedPage
