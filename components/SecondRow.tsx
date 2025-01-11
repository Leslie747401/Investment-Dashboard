import React from 'react'
import Stock from './PortfolioStock'
import LastStock from './LastPortfolioStock'
import PortfolioStock from './PortfolioStock'
import LastPortfolioStock from './LastPortfolioStock'
import WatchlistStock from './WatchlistStock'
import LastWatchlistStock from './LastWatchlistStock'
import Link from 'next/link'

export default function SecondRow() {
  return (
    <div className='flex justify-between'>

        {/* My Portfolio */}
        <div className='w-[60%] flex flex-col gap-6 bg-[#f8f8f8] rounded-xl border p-4'>

            {/* Heading */}
            <div className='flex justify-between items-center'>

                <p className='text-sm'>Portfolio</p>
                
                <div className='flex gap-2 items-center'>
                    <p className='text-sm cursor-pointer px-3 py-1 rounded-full bg-black text-white'>All</p>
                    <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Gainers</p>
                    <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Decliners</p>
                    <Link href={'/Portfolio'}><p className='text-sm px-3 py-1 rounded-full border bg-white cursor-pointer hover:bg-zinc-100 transition-all duration-300'>See All</p></Link>
                </div>

            </div>

            {/* List */}
            <div className='flex flex-col'>
                <PortfolioStock/>
                <PortfolioStock/>
                <PortfolioStock/>
                <PortfolioStock/>
                <LastPortfolioStock/>
            </div>
        
        </div>

        {/* My Watchlist */}
        <div className='w-[38%] flex flex-col gap-6 bg-[#f8f8f8] rounded-xl border p-4'>

            {/* Heading */}
            <div className='flex justify-between items-center'>

                <p className='text-sm'>Watchlist</p>
                
                <div className='flex gap-2 items-center'>
                    <p className='text-sm cursor-pointer px-3 py-1 rounded-full bg-black text-white'>All</p>
                    <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Gainers</p>
                    <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Decliners</p>
                    <Link href={'/Watchlist'}><p className='text-sm px-3 py-1 rounded-full border bg-white cursor-pointer hover:bg-zinc-100 transition-all duration-300'>See All</p></Link>
                </div>

            </div>

            {/* List */}
            <div className='flex flex-col'>
                <WatchlistStock/>
                <WatchlistStock/>
                <WatchlistStock/>
                <WatchlistStock/>
                <LastWatchlistStock/>
            </div>
        
        </div>
        
    </div>
  )
}
