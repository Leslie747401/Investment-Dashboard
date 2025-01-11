import React from 'react'
import PortfolioChart from './PortfolioChart'

export default function FirstRow() {
  return (
    <div className='flex justify-between'>

        {/* Current Value */}
        <div className='w-[29%] flex flex-col gap-4 p-4 rounded-xl bg-[#f8f8f8] border'>
            
            <p className='text-sm'>Current Value</p>

            <div className='flex flex-col gap-1 border p-5 rounded-xl bg-[#ffffff]'>
                <div className='flex bg-[#ffffff] items-center justify-between'>
                    <p>$ <span className='text-4xl font-medium'>7200.00</span></p>
                    <div className='flex text-sm px-3 py-1 rounded-full border'>View Details</div>
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

        {/* Account Balance & Purchase quantity */}
        <div className='w-[20%] flex flex-col justify-between'>
            
            <div className='flex flex-col gap-3 p-4 roundex-xl bg-[#f8f8f8] border rounded-xl'>
                <p className='text-sm'>Account Balance</p>
                <p><span className='text-4xl font-medium pl-1'>7200.00 </span><span className='text-[#969696]'>USDT</span></p>
            </div>

            <div className='flex flex-col gap-3 p-4 roundex-xl bg-[#f8f8f8] border rounded-xl'>
                <p className='text-sm'>Purchase Quantity</p>
                <p><span className='text-4xl font-medium pl-1'>2189 </span><span className='text-[#969696]'>SHARES</span></p>
            </div>

        </div>

    </div>
  )
}
