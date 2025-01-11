'use client';

import React from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import search from '../public/search.svg'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function Navbar() {

  const route = usePathname();
    
  return (
    <div className='w-full flex justify-between p-4 px-6 border-b sticky top-0 backdrop-blur-xl z-50'>

        <div className='flex gap-20'>

            {/* Logo and name */}
            <Link href={'/'}>
                <div className='flex items-center'>
                    <Image
                        src={logo}
                        width={40}
                        height={40}
                        alt=''
                    />
                    <p className='text-lg tracking-tight font-medium'>Investure</p>
                </div>
            </Link>

            {/* Pages */}
            <div className='flex gap-10 items-center'>
                <Link href={'/'}><p className={`${route === '/' ? 'text-black font-medium' : 'text-[#b1b1b1]'} cursor-pointer`}>Dashboard</p></Link>
                <Link href={'/Portfolio'}><p className={`${route === '/Portfolio' ? 'text-black font-medium' : 'text-[#b1b1b1]'} cursor-pointer`}>Portfolio</p></Link>
                <Link href={'/Watchlist'}><p className={`${route === '/Watchlist' ? 'text-black font-medium' : 'text-[#b1b1b1]'} cursor-pointer`}>Watchlist</p></Link>
                <Link href={'/Allocation'}><p className={`${route === '/Allocation' ? 'text-black font-medium' : 'text-[#b1b1b1]'} cursor-pointer`}>Allocation</p></Link>
                <Link href={'/Market'}><p className={`${route === '/Market' ? 'text-black font-medium' : 'text-[#b1b1b1]'} cursor-pointer`}>Market</p></Link>
                <Link href={'/News'}><p className={`${route === '/News' ? 'text-black font-medium' : 'text-[#b1b1b1]'} cursor-pointer`}>News</p></Link>
            </div>

        </div>

        {/* Input and Profile */}
        <div className='flex gap-3 items-center'>

            <div className='flex gap-2 bg-white p-1 px-3 pr-1 rounded-md border'>
                <input className='outline-none bg-white' placeholder='search stocks...'/>
                <div className='p-1 border rounded-md bg-[#f8f8f8]'>
                    <Image
                        src={search}
                        width={20}
                        height={20}
                        alt='search-icon'
                    />
                </div>
            </div>

            <Avatar className='items-center'>
                <AvatarImage src="https://github.com/shadcn.png"  className='w-[32px] h-[32px] rounded-full'/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        </div>


    </div>
  )
}
