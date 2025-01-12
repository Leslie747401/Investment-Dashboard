import React from 'react'
import Image, { StaticImageData } from 'next/image'
import apple from '../public/apple.svg'

export default function LastWatchlistStock(
    props : {
        logo : StaticImageData;
        ticker : string;
        company: string;
        price: number;
        change: number;
    }) {
        
  return (
    <div className='flex gap-2 justify-between px-1 pt-3'>

        <div className='flex gap-3'>

            <div className='p-3 border rounded-full bg-white'>
                <Image
                    src={props.logo}
                    width={24}
                    height={24}
                    alt=''
                />
            </div>

            <div className='flex flex-col justify-center'>
                <p>{props.ticker}</p>
                <p className='text-xs text-[#919191]'>{props.company}</p>
            </div>

        </div>

        <div className='w-[40%] flex justify-between'>

            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs text-[#939393]'>Price</p>
                <p className='font-medium'>${props.price}</p>
            </div>

            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs text-[#939393]'>Change</p>
                <p className={`${props.change < 0 ? 'text-red-500' : 'text-green-500'} font-medium`}>{props.change}%</p>
            </div>

        </div>

    </div>
  )
}
