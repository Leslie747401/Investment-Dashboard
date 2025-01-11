import LastWatchlistStock from "@/components/LastWatchlistStock";
import Navbar from "@/components/Navbar";
import SecondRow from "@/components/SecondRow";
import WatchlistStock from "@/components/WatchlistStock";

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
            <WatchlistStock/>
            <WatchlistStock/>
            <WatchlistStock/>
            <WatchlistStock/>
            <LastWatchlistStock/>
          </div>
        
        </div>
                
      </div>
    </>
  );
}