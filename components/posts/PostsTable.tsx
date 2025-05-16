import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link'
import posts from '@/data/posts'
import { Post } from '@/types/post'

interface PostsTableProps {
    limit?: number;
    title: string;
}



const PostsTable = ({limit, title}: PostsTableProps) => {
  return (
    <div className='mt-10'>
        <h3 className='text-2xl mb-4 font-semibold'>
            {title ? title: 'Posts'}
        </h3>
        <Table>
            <TableCaption> A List of recent Posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className='hidden md:table-cell'>Author</TableHead>
                    <TableHead  className='hidden md:table-cell'>Date</TableHead>
                       <TableHead >Edit</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.map((post)=>(
                    <TableRow key={post.id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell className='hidden md:table-cell'>{post.author}</TableCell>
                            <TableCell className='hidden md:table-cell'>{post.date}</TableCell>
                            <TableCell>
                                <Link href={`/posts/edit/${post.id}`}>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 cursor-pointer px-4 rounded'>Edit</button>
                                </Link>
                            </TableCell>
                    </TableRow>
                )
                )}
            </TableBody>
        </Table>
    </div>
  )
}

export default PostsTable