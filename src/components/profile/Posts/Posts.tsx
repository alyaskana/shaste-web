import { Post } from '@components/common/Post'
import { Post as PostType } from '@types'
import { FC } from 'react'
import s from './Posts.module.scss'

type PostsProps = {
  posts: PostType[]
}

export const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.reverse().map((post) => (
        <div key={post.id} className={s.post_item}>
          <Post post={post} isRecipeCardShowing={true} />
        </div>
      ))}
    </>
  )
}
