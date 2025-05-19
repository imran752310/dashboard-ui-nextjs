import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from './ThemeToggler'



const Navbar = () => {
  return (
    <div className='bg-slate-900 border-b border-gray-300 dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
      <Link href="/">
      <Image src={'/vercel.svg'} alt='logo' height={50} width={40} />
      </Link>
      
     <div className='flex gap-2 items-center'>
       <ModeToggle  />
      <DropdownMenu>
  <DropdownMenuTrigger>
     <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback className='text-black'>
            MIK</AvatarFallback> 
      </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <Link href='/profile'>Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
         <Link href='/profile'>Logout</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
     </div>

    </div>
  )
}

export default Navbar