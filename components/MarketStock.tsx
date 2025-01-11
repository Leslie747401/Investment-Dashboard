import Image from 'next/image'
import React from 'react'
import apple from '../public/apple.svg'

export default function MarketStock() {
  return (
        <div className='flex gap-2 justify-between px-1 border-b py-3'>

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
                    <p className='text-xs text-[#939393]'>Market Cap</p>
                    <p className='font-medium'>3.58T</p>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs text-[#939393]'>Price</p>
                    <p className='font-medium'>$148.79</p>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs text-[#939393]'>Change</p>
                    <p className='font-medium'>-2.25%</p>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs text-[#939393]'>Volumne</p>
                    <p className='font-medium'>336M</p>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs text-[#939393]'>P/E</p>
                    <p className='font-medium'>34.59</p>
                </div>

                <div className='flex flex-col items-center gap-1'>
                    <p className='text-xs text-[#939393]'>Sector</p>
                    <p className='font-medium'>Tech</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-1'>
                    <p className='text-xs text-green-500 bg-green-300 px-2 py-1 rounded-full border'>Strong Buy</p>
                </div>

            </div>

        </div>
    )
}
