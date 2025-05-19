import Backbutton from '@/components/Backbutton'
import PostPagination from '@/components/posts/PostPagination'
import PostsTable from '@/components/posts/PostsTable'
import React from 'react'

const Post = () => {
  return (
    <div>
      <Backbutton text={'All Posts'} link={'/'} />
      <div>
        <PostsTable title={''} />
      </div>
      <PostPagination />
    </div>
  )
}

export default Post