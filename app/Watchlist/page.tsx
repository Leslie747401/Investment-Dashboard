import LastWatchlistStock from "@/components/LastWatchlistStock";
import Navbar from "@/components/Navbar";
import WatchlistStock from "@/components/WatchlistStock";
import google from '../../public/Google.svg'
import meta from '../../public/Meta.svg'
import macdonalds from '../../public/macdonalds.svg'
import apple from '../../public/apple.svg'
import microsoft from '../../public/microsoft.svg'

export default function Watchlist() {
  return (
    <>
      <Navbar/>
      <p className="pt-6 px-6 text-6xl text-[#adadad] font-medium tracking-tight">Watchlist</p>
      
      <div className="flex flex-col gap-6 pt-8 px-6">
        
        {/* My Watchlist */}
        <div className='flex flex-col gap-6 bg-[#f8f8f8] rounded-xl border p-4'>

          {/* Heading */}
          <div className='flex justify-between items-center'>

            <p className='text-sm'>Watchlist</p>
                
              <div className='flex gap-2 items-center'>
                <p className='text-sm cursor-pointer px-3 py-1 rounded-full bg-black text-white'>All</p>
                <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Gainers</p>
                <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Decliners</p>
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
    </>
  );
}