import React from 'react'
import Stock from './PortfolioStock'
import LastStock from './LastPortfolioStock'
import PortfolioStock from './PortfolioStock'
import LastPortfolioStock from './LastPortfolioStock'
import WatchlistStock from './WatchlistStock'
import LastWatchlistStock from './LastWatchlistStock'
import Link from 'next/link'
import google from '../public/Google.svg'
import meta from '../public/Meta.svg'
import Nike from '../public/nike.svg'
import macdonalds from '../public/macdonalds.svg'
import apple from '../public/apple.svg'
import amd from '../public/amd.svg'
import microsoft from '../public/microsoft.svg'


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
                
                <PortfolioStock
                    logo={apple}
                    ticker='AAPL'
                    company='Apple Inc'
                    shareamt={20}
                    price={236.85}
                    change={-2.41}
                    currentvalue={2972.40}
                />

                <PortfolioStock
                    logo={microsoft}
                    ticker='MSFT'
                    company='Microsoft Corp'
                    shareamt={40}
                    price={418.95}
                    change={-1.32}
                    currentvalue={2972.40}
                />

                <PortfolioStock
                    logo={macdonalds}
                    ticker='MCD'
                    company={`McDonald's Corp`}
                    shareamt={25}
                    price={282.31}
                    change={-1.57}
                    currentvalue={2972.40}
                />

                <PortfolioStock
                    logo={meta}
                    ticker='META'
                    company='Meta Platforms Inc'
                    shareamt={10}
                    price={615.86}
                    change={+0.84}
                    currentvalue={2972.40}
                />

                <LastPortfolioStock
                    logo={google}
                    ticker='GOOG'
                    company='Alphabet Inc'
                    shareamt={5}
                    price={193.17}
                    change={-1.14}
                    currentvalue={2972.40}
                />

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

                <WatchlistStock 
                    logo={apple}
                    ticker='AAPL'
                    company='Apple Inc'
                    price={236.85}
                    change={-2.41}

                />

                <WatchlistStock
                    logo={microsoft}
                    ticker='MSFT'
                    company='Microsoft Corp'
                    price={418.95}
                    change={-1.32}
                />

                <WatchlistStock 
                    logo={macdonalds}
                    ticker='MCD'
                    company={`McDonald's Corp`}
                    price={282.31}
                    change={-1.57}

                />

                <WatchlistStock 
                    logo={meta}
                    ticker='META'
                    company='Meta Platforms Inc'
                    price={615.86}
                    change={+0.84}

                />


                <LastWatchlistStock
                    logo={google}
                    ticker='GOOG'
                    company='Alphabet Inc'
                    price={193.17}
                    change={-1.14}
                />

            </div>
        
        </div>
        
    </div>
  )
}
