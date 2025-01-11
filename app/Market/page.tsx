import LastMarketStock from "@/components/LastMarketStock";
import MarketStock from "@/components/MarketStock";
import Navbar from "@/components/Navbar";

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
                <MarketStock/>
                <MarketStock/>
                <MarketStock/>
                <MarketStock/>
                <LastMarketStock/>
            </div>
        
        </div>

      </div>
    </>
  );
}