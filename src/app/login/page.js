"use client"; 
import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";

export default function Login() {
  const [renterClass, setRenterClass] = useState("bg-purple-600 border-2 text-white w-[15vw] py-3 rounded-lg");
  const [loaderClass, setLoaderClass] = useState("border border-2 border-purple-500 text-white w-[15vw] rounded-lg");

  const handleRenterClick = () => {
    setRenterClass("bg-purple-600 border-2 text-white w-[15vw] py-3 rounded-lg"); 
    setLoaderClass("border border-2 border-purple-500 text-white w-[15vw] rounded-lg");
  };

  const handleLoaderClick = () => {
    setRenterClass("border border-2 border-purple-500 text-white w-[15vw] rounded-lg"); 
    setLoaderClass("bg-purple-600 border-2 text-white w-[15vw] py-3 rounded-lg"); 
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex flex-col gap-y-12 px-16 py-12">
        <h2 className="text-3xl font-bold">Нэвтрэх</h2>
        <div className="flex w-full gap-x-1">
          <div className="w-[35vw] flex flex-col">
            <div className="flex justify-between mb-4">
              <button className={renterClass} onClick={handleRenterClick}>
                Зээлэгч
              </button>
              <button className={loaderClass} onClick={handleLoaderClick}>
                Зээлдэгч
              </button>
            </div>
            <form className="flex flex-col gap-4 h-full">
              <div>
                <label className="block mb-1">Дэлгүүрийн Нэр</label>
                <input
                  type="text"
                  className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black"
                />
              </div>
              <div>
                <label className="block mb-1">Нууц үг</label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black"
                  />
                  <span className="absolute right-3 top-2.5 cursor-pointer"></span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="accent-purple-600"
                  defaultChecked
                />
                <label htmlFor="remember">Нууц үг санах</label>
              </div>
              <button className="w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-purple-600">
                Нэвтрэх
              </button>
              <p className="text-sm text-gray-400">
                Хэрвээ танд хаяг байхгүй бол бүртгүүлнэ үү
              </p>
            </form>
          </div>
          <div className="w-[65vw]">
            <Image src="/image/mongolia.png" alt="3D Map" layout="responsive" width={700} height={475}/>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full text-xs text-center p-4 text-gray-400 border-t border-gray-700">
        ДИЖИТАЛ ӨРӨНД ДЭЭРТЭР ТАНЬ АСУУДЛЫГ ХУРДАН АЮУЛГҮЙ ШУУРХАЙ ШИЙДНЭ
      </footer>
    </div>
  );
}
