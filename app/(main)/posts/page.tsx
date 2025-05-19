import Backbutton from '@/components/Backbutton'
import PostPagination from '@/components/posts/PostPagination'
import PostsTable from '@/components/posts/PostsTable'
import React from 'react'

const Post = () => {
  return (
    <div className='w-full'>
      <Backbutton text={'All Posts'} link={'/'} />
      <div className='my-5'>
        <PostsTable title={''} />
      </div>
      <PostPagination />
    </div>
  )
}

export default Post