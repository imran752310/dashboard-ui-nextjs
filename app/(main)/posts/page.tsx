import Backbutton from '@/components/Backbutton'
import PostsTable from '@/components/posts/PostsTable'
import React from 'react'

const PostsPage = () => {
  return (
    <div>
        <Backbutton text='Go Back ' link='/' />
        <PostsTable title={''} />
    </div>
  )
}

export default PostsPage