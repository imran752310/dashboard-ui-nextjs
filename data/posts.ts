import { Post } from "@/types/post";
import { title } from "process";
const posts: Post[] = [
   {
     id:'1',
    title: 'The Rise of Artificial Intelligence ',
    body: 'AI is revolution various industries',
    author: 'Imran khan',
    date:'2024-05-01',
    comments: [
        {
            id: '1', text: 'Great Introduction!', username:'ali'
        },
        {
            id: '2',
            text: 'looking forward to more post on this topic',
            username:'wali'
        }
    ]
    
   },

   {
     id:'2',
    title: 'The Rise of Artificial Intelligence ',
    body: 'AI is revolution various industries',
    author: 'Imran khan',
    date:'2024-05-01',
    comments: [
        {
            id: '1', text: 'Great Introduction!', username:'ali'
        },
        {
            id: '2',
            text: 'looking forward to more post on this topic',
            username:'wali'
        }
    ]
    
   },

   {
     id:'3',
    title: 'The Rise of Artificial Intelligence ',
    body: 'AI is revolution various industries',
    author: 'Imran khan',
    date:'2024-05-01',
    comments: [
        {
            id: '1', text: 'Great Introduction!', username:'ali'
        },
        {
            id: '2',
            text: 'looking forward to more post on this topic',
            username:'wali'
        }
    ]
    
   }
]

export default posts;