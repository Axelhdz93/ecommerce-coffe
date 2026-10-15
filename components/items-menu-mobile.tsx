import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Menu } from 'lucide-react'
import Link from 'next/link'


const ItemsMenuMobile = () => {
  
  return (
    <Popover>

        <PopoverTrigger>
            <Menu/>
        </PopoverTrigger>

        <PopoverContent>
            <Link href='/category/molido' className='block'>Café molido</Link>
            <Link href='/category/grano' className='block'>Café en grano</Link>
            <Link href='/category/capsula' className='block'>Café en cápsulas</Link>
        </PopoverContent>

    </Popover>
  )
}

export default ItemsMenuMobile
