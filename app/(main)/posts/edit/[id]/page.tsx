import Backbutton from '@/components/Backbutton'
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import posts from '@/data/posts';


const formSchema = z.object({
   title: z.string().min(1, {
    message: 'Title is required'
   }),
   body: z.string().min(1, {
    message: 'body is required'
   }),
     author: z.string().min(1, {
    message: 'author is required'
   }),  
   date: z.string().min(1, {
    message: 'data is required'
   }),
});

interface PostEditPageProps {
  params: {
    id: string;
  }
}

const PostEditPage = ({params}: PostEditPageProps) => {
  const post = posts.find((post)=> post.id === params.id);
  
  const form = useForm<z.infer<typeof formSchema>>({
   resolver: zodResolver(formSchema)
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || '',
    },
  });

  return (
    <div>
      <Backbutton text='Back To Post' link={'/posts'} />
      <h3 className='text-2xl mb-4'>Edit Post</h3>
      <Form {...form}>
        <form>
          
        </form>

      </Form>
    </div>
  )
}

export default PostEditPage