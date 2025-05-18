import Backbutton from '@/components/Backbutton'
import PostPagination from '@/components/posts/PostPagination'
import PostsTable from '@/components/posts/PostsTable'
import { Pagination } from '@/components/ui/pagination'
import React from 'react'

const PostsPage = () => {
  return (
    <div>
        <Backbutton text='Go Back ' link='/' />
        <PostsTable title={''} />
        <PostPagination />
    </div>
  )
}

export default PostsPage