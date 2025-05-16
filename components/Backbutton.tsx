import Link from 'next/link'
import React from 'react'
import { ArrowLeftCircle } from 'lucide-react'

interface BackbuttonProps {
    text: string;
    link: string;
}

const Backbutton = ({link, text} : BackbuttonProps) => {
  return (
    <div>
        <Link href={link} className='' >
        <ArrowLeftCircle size={18}/> {text}
        </Link>
    </div>
  )
}

export default Backbutton