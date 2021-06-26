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
      {posts.map((post) => (
        <div key={post.id} className={s.post_item}>
          <Post post={post} isRecipeCardShowing={true} />
        </div>
      ))}
    </div>
  )
}

export default FeedPage
