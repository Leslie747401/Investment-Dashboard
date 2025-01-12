import LastPortfolioStock from "@/components/LastPortfolioStock";
import Navbar from "@/components/Navbar";
import PortfolioStock from "@/components/PortfolioStock";
import google from '../../public/Google.svg'
import meta from '../../public/Meta.svg'
import macdonalds from '../../public/macdonalds.svg'
import apple from '../../public/apple.svg'
import microsoft from '../../public/microsoft.svg'

export default function Portfolio() {
  return (
    <>
      <Navbar/>

      <p className="pt-6 px-6 text-6xl text-[#adadad] font-medium tracking-tight">Portfolio</p>
      
      <div className="flex flex-col gap-6 pt-8 px-6">
        
        {/* My Portfolio */}
        <div className='flex flex-col gap-6 bg-[#f8f8f8] rounded-xl border p-4'>

            {/* Heading */}
            <div className='flex justify-between items-center'>

              <p className='text-sm'>Portfolio</p>
                
              <div className='flex gap-2 items-center'>
                <p className='text-sm cursor-pointer px-3 py-1 rounded-full bg-black text-white'>All</p>
                <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Gainers</p>
                <p className='text-sm cursor-pointer px-3 py-1 rounded-full text-zinc-400'>Decliners</p>
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

      </div>
    </>
  );
}