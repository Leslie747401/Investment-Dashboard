import React from 'react'
import PortfolioChart from './PortfolioChart'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  

export default function FirstRow() {
  return (
    <div className='flex justify-between'>

        {/* Current Value */}
        <div className='w-[29%] flex flex-col gap-4 p-4 rounded-xl bg-[#f8f8f8] border'>
            
            <p className='text-sm'>Current Value</p>

            <div className='flex flex-col gap-1 border p-5 rounded-xl bg-[#ffffff]'>
                <div className='flex bg-[#ffffff] items-center justify-between'>
                    <p>$ <span className='text-4xl font-medium'>7200.00</span></p>
                    <Link href={'/Portfolio'}><div className='flex text-sm px-3 py-1 rounded-full border cursor-pointer hover:bg-zinc-100 transition-all duration-300'>View Details</div></Link>
                </div>
                <div className='w-fit flex gap-1 items-center text-sm text-green-500 px-3 py-1 rounded-full'>$1200 (+8.5%)</div>
            </div>

            <div className='flex justify-between px-1'>
                <p className='text-sm mb-2 text-[#878787]'>Invested Value</p>
                <p>$6000.00</p>
            </div>

        </div>

        {/* Portfolio Return */} 
        <div className='w-[47%] rounded-xl bg-[#f8f8f8] p-4 px-6 border'>
            <PortfolioChart/>
        </div>

        {/* Account Balance & Portfolio Allocation */}
        <div className='w-[20%] flex flex-col justify-between'>
            
            <div className='flex flex-col gap-3 p-4 roundex-xl bg-[#f8f8f8] border rounded-xl'>
                <p className='text-sm'>Account Balance</p>
                <p><span className='text-4xl font-medium pl-1'>1800.00 </span><span className='text-[#969696]'>USDT</span></p>
            </div>

            <div className='flex flex-col gap-4 p-4 roundex-xl bg-[#f8f8f8] border rounded-xl'>

                <div className='flex justify-between items-center'>
                    <p className='text-sm'>Portfolio Allocation</p>
                    <Link href={'/Allocation'}><p className='text-sm px-3 py-1 rounded-full border bg-white cursor-pointer hover:bg-zinc-100 transition-all duration-300'>View</p></Link>
                </div>

                <div className='w-full h-7 flex rounded-full border bg-white'>
                    
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className='w-[50%] h-full bg-[#2e2e2e] rounded-l-full cursor-pointer'></div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>NKE: 50%</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className='w-[30%] h-full bg-[#4e4e4e] cursor-pointer'></div>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>GOOGL: 30%</p>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className='w-[10%] h-full bg-[#757575] cursor-pointer'></div>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>META: 10%</p>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <div className='w-[10%] h-full bg-[#9a9a9a] rounded-r-full cursor-pointer'></div>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>MCD: 10%</p>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>

                </div>

            </div>

        </div>

    </div>
  )
}
