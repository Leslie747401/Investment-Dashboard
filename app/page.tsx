import FirstRow from "@/components/FirstRow";
import Navbar from "@/components/Navbar";
import SecondRow from "@/components/SecondRow";
import ThirdRow from "@/components/ThirdRow";

export default function Home() {
  return (
    <>
      <Navbar/>
      <p className="pt-6 px-6 text-6xl text-[#adadad] font-medium tracking-tight">Dashboard</p>
      <div className="flex flex-col gap-6 pt-8 px-6 pb-10">
        <FirstRow/>
        <SecondRow/>
        <ThirdRow/>
      </div>
    </>
  );
}
