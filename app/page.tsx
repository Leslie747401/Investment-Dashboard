import FirstRow from "@/components/FirstRow";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <p className="pt-6 px-6 text-6xl text-[#adadad] font-medium tracking-tight">Dashboard</p>
      <div className="flex flex-col pt-8 px-6">
        <FirstRow/>
      </div>
    </>
  );
}
