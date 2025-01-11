import React from 'react'
import Image from 'next/image'
import apple from '../public/apple.svg'

export default function LastPortfolioStock() {
  return (
    <div className='flex gap-2 justify-between px-1 pt-3'>

        <div className='flex gap-3'>

            <div className='p-3 border rounded-full bg-[#dadada]'>
                <Image
                    src={apple}
                    width={24}
                    height={24}
                    alt=''
                />
            </div>

            <div className='flex flex-col justify-center'>
                <p>AAPL</p>
                <p className='text-xs text-[#919191]'>Apple Inc.</p>
            </div>

        </div>

        <div className='w-[60%] flex justify-between'>

            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs text-[#939393]'>Share Amount</p>
                <p className='font-medium'>20</p>
            </div>

            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs text-[#939393]'>Price</p>
                <p className='font-medium'>$148.79</p>
            </div>

            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs text-[#939393]'>Change</p>
                <p className='font-medium'>-0.20%</p>
            </div>

            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs text-[#939393]'>Current Value</p>
                <p className='font-medium'>$2972.40</p>
            </div>

        </div>

    </div>
  )
}
