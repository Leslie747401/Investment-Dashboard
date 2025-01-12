import Navbar from "@/components/Navbar";
import Image from "next/image";
import google from '../../public/Google.svg'
import meta from '../../public/Meta.svg'
import Nike from '../../public/nike.svg'
import macdonalds from '../../public/macdonalds.svg'

export default function Allocation() {
  return (
    <>
        <Navbar/>

        <p className="py-6 px-6 text-6xl text-[#adadad] font-medium tracking-tight">Allocation</p>
      
        <div className="flex mx-6">

            {/* Apple */}
            <div className="w-[50%] h-[450px] flex flex-col gap-4 justify-center items-center bg-[#f8f8f8] border border-r-0">

                <div className="p-3 border rounded-full bg-white">
                    <Image
                        src={Nike}
                        width={32}
                        height={32}
                        alt=""
                    />
                </div>

                <div className="flex flex-col gap-1 items-center">
                    <p className="text-lg">NKE</p>
                    <p className="font-medium">50%</p>
                </div>

            </div>

            <div className="w-[50%] h-[450px] flex flex-col justify-center items-center bg-[#f8f8f8] border">

                <div className="w-full h-[60%] flex flex-col gap-4 justify-center items-center bg-[#f8f8f8] border-b">

                    <div className="p-3 border rounded-full bg-white">
                        <Image
                            src={google}
                            width={32}
                            height={32}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col gap-1 items-center">
                        <p className="text-lg">GOOG</p>
                        <p className="font-medium">30%</p>
                    </div>

                </div>

                <div className="w-full h-[40%] flex justify-center items-center bg-[#f8f8f8]">

                    <div className="w-[50%] h-full flex flex-col gap-4 justify-center items-center bg-[#f8f8f8] border-r">

                        <div className="p-3 border rounded-full bg-white">
                            <Image
                                src={meta}
                                width={32}
                                height={32}
                                alt=""
                            />
                        </div>

                        <div className="flex flex-col gap-1 items-center">
                            <p className="text-lg">META</p>
                            <p className="font-medium">10%</p>
                        </div>

                    </div>

                    <div className="w-[50%] h-full flex flex-col gap-4 justify-center items-center bg-[#f8f8f8]">

                        <div className="p-3 border rounded-full bg-white">
                            <Image
                                src={macdonalds}
                                width={32}
                                height={32}
                                alt=""
                            />
                        </div>

                        <div className="flex flex-col gap-1 items-center">
                            <p className="text-lg">MCD</p>
                            <p className="font-medium">10%</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </>
  );
}
