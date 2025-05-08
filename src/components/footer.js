"use client"; 

import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="w-full text-xs flex flex-col px-16 ">
      <div className="w-full py-2 ">
        ХЯЛБАР АЮУЛГҮЙ ШУУРХАЙ 
      </div>
      <div className="w-full py-4 text-white border-t-[1px] border-white flex justify-between">
        <span> ДИЖИТАЛ ӨРӨНД ДЭЭРТЭР ТАНЬ АСУУДЛЫГ ХУРДАН АЮУЛГҮЙ ШУУРХАЙ ШИЙДНЭ </span>
        <div className="flex gap-x-12">
          <button onClick={() => router.push("/help")} className="flex items-center gap-x-2 cursor-pointer">
            <img className="h-[14px] w-auto" src="/svg/qicon.svg"/>
            <span>ТУСЛАМЖ</span>
          </button>
          <button onClick={() => router.push("/contact")} className="flex items-center gap-x-2 cursor-pointer">
            <img className="h-[14px] w-auto" src="/svg/picon.svg"/>
            <span>ХОЛБОО БАРИХ</span>
          </button>
        </div>
      </div>
    </div>
  );
}
