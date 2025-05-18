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
   data: z.string().min(1, {
    message: 'data is required'
   }),
});

interface PostEditPageProps {
  params: {
    id: string;
  }
}

const PostEditPage = ({params}: PostEditPageProps) => {
  
  return (
    <div>
      <Backbutton text='Back To Post' link={''} />
    </div>
  )
}

export default PostEditPage