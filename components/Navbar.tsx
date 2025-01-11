'use client';

import React from 'react'
import logo from '../public/logo.svg'
import Image from 'next/image'
import search from '../public/search.svg'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar() {
  return (
    <div className='w-full flex justify-between p-4 px-6 bg-[#f8f8f8] border-b'>

        <div className='flex gap-20'>
            {/* Logo and name */}
            <div className='flex items-center'>
                <Image
                    src={logo}
                    width={40}
                    height={40}
                    alt=''
                />
                <p className='text-lg tracking-tight font-medium'>Investure</p>
            </div>

            {/* Pages */}
            <div className='flex gap-10 items-center'>
                <p className='text-black cursor-pointer font-medium'>Dashboard</p>
                <p className='text-[#b1b1b1] cursor-pointer'>Portfolio</p>
                <p className='text-[#b1b1b1] cursor-pointer'>Watchlist</p>
                <p className='text-[#b1b1b1] cursor-pointer'>New</p>
            </div>
        </div>

        {/* Input and Profile */}
        <div className='flex gap-3 items-center'>

            <div className='flex gap-2 bg-white p-1 px-3 pr-2 rounded-md border'>
                <input className='outline-none bg-white font-normal' placeholder='search stocks...'/>
                <div className='p-1 border rounded-lg bg-[#f8f8f8]'>
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
