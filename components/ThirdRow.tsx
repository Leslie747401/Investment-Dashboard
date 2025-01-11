import React from 'react'
import PortfolioStock from './PortfolioStock'
import LastPortfolioStock from './LastPortfolioStock'
import MarketStock from './MarketStock'
import LastMarketStock from './LastMarketStock'
import Link from 'next/link'

export default function ThirdRow() {
  return (
    <div>
        
        {/* My Portfolio */}
        <div className='flex flex-col gap-6 bg-[#f8f8f8] rounded-xl border p-4'>

            {/* Heading */}
            <div className='flex justify-between items-center'>

                <p className='text-sm'>Market</p>
                
                <div className='flex gap-2 items-center'>
                    <Link href={'/Market'}><p className='text-sm px-3 py-1 rounded-full border bg-white cursor-pointer hover:bg-zinc-100 transition-all duration-300'>See All</p></Link>
                </div>

            </div>

            {/* List */}
            <div className='flex flex-col'>
                <MarketStock/>
                <MarketStock/>
                <MarketStock/>
                <MarketStock/>
                <LastMarketStock/>
            </div>
        
        </div>

    </div>
  )
}
