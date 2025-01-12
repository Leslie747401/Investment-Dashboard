import LastMarketStock from "@/components/LastMarketStock";
import MarketStock from "@/components/MarketStock";
import Navbar from "@/components/Navbar";
import google from '../../public/Google.svg'
import meta from '../../public/Meta.svg'
import macdonalds from '../../public/macdonalds.svg'
import apple from '../../public/apple.svg'
import microsoft from '../../public/microsoft.svg'

export default function Market() {
  return (
    <>
      <Navbar/>

      <p className="pt-6 px-6 text-6xl text-[#adadad] font-medium tracking-tight">Market</p>
      
      <div className="flex flex-col gap-6 pt-8 px-6">
        
        {/* Market */}
        <div className='flex flex-col gap-6 bg-[#f8f8f8] rounded-xl border p-4'>

            {/* Heading */}
            <div className='flex justify-between items-center'>
              <p className='text-sm'>Market</p>
            </div>

            {/* List */}
            <div className='flex flex-col'>

                <MarketStock
                  logo={apple}
                  ticker='AAPL'
                  company='Apple Inc'
                  marketcap='3.58T'
                  price={236.85}
                  change={-2.41}
                  volume={336}
                  pe={26.67}
                  sector='Tech'
                  recommendation='Strong Buy'                
                />

                <MarketStock
                  logo={microsoft}
                  ticker='MSFT'
                  company='Microsoft Corp'
                  marketcap='3.11T'
                  price={418.95}
                  change={-1.32}
                  volume={336}
                  pe={26.67}
                  sector='Tech'
                  recommendation='Strong Buy'                
                />

                <MarketStock
                  logo={macdonalds}
                  ticker='MCD'
                  company={`McDonald's Corp`}
                  marketcap='202.3B'
                  price={282.31}
                  change={-1.57}
                  volume={336}
                  pe={26.67}
                  sector='Tech'
                  recommendation='Strong Buy'                
                />

                <MarketStock
                  logo={meta}
                  ticker='META'
                  company='Meta Platforms Inc'
                  marketcap='1.55T'
                  price={615.86}
                  change={+0.84}
                  volume={336}
                  pe={26.67}
                  sector='Tech'
                  recommendation='Strong Buy'                
                />

                <LastMarketStock
                  logo={google}
                  ticker='GOOG'
                  company='Alphabet Inc'
                  marketcap='2.35T'
                  price={193.17}
                  change={-1.14}
                  volume={336}
                  pe={26.67}
                  sector='Tech'
                  recommendation='Strong Buy'                
                />

            </div>
        
        </div>

      </div>
    </>
  );
}