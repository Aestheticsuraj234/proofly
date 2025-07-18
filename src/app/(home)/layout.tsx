import Navbar from "@/modules/home/components/navbar";
import React from "react";
interface Props{
    children: React.ReactNode
}
const HomeLayout = ({children}: Props) => {
  return (
    <main className="flex flex-col min-h-screen max-h-screen bg-[#F4F5F5] dark:bg-[#1A1C20] text-[#1A1C20] dark:text-[#F4F5F5]">
      <Navbar />
      <div className="flex-1 flex flex-col px-4 pb-4">
      
        {children}
      </div>
    </main>
  );
};

export default HomeLayout;
