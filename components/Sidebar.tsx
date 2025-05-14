import React from 'react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from 'next/link'
import { CreditCard, Folders, LayoutDashboard, Newspaper, Settings, User } from 'lucide-react'

const Sidebar = () => {
  return (
    <div>
        <Command className='bg-secondary rounded-none'>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <LayoutDashboard className='mr-2 h-4 w-4 '/>
        <Link href={'/'}>Dashboard</Link>
      </CommandItem>
      <CommandItem>
        <Newspaper className='mr-2 h-4 w-4 '/>
        <Link href={'/posts'}>Posts</Link>
      </CommandItem>
      <CommandItem>
        <Folders className='mr-2 h-4 w-4 '/>
        <Link href={'/'}>Category</Link>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className='mr-2 h-4 w-4 '/>
        <Link href={'/posts'}>Profile</Link>
        <CommandShortcut>XP</CommandShortcut>
      </CommandItem>
      <CommandItem>
         <CreditCard className='mr-2 h-4 w-4 '/>
        <Link href={'/posts'}>Billing</Link>
        <CommandShortcut>XB</CommandShortcut>
      </CommandItem>
      <CommandItem>
         <Settings className='mr-2 h-4 w-4 '/>
        <Link href={'/posts'}>Settings</Link>
        <CommandShortcut>XS</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>

    </div>
  )
}

export default Sidebar