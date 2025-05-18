import Hero from "@/components/PageComponents/Hero";
import Topbar from "@/components/Shared/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-screen relative  min-h-screen bg-[#F8F5F0]">
      <Topbar />
      <Hero />
    </div>
  );
}
