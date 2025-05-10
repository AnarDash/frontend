"use client"; 
import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import footer from "@/components/footer";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function Authentication() {
  const router = useRouter();

  const [renterClass, setRenterClass] = useState("bg-purple-600 text-white w-[15vw] py-3 rounded-2xl hover:bg-purple-700");
  const [loaderClass, setLoaderClass] = useState("border border-2 border-purple-500 text-white w-[15vw] rounded-2xl hover:bg-purple-700");
  const [userName, setUserName] = useState("Дэлгүүрийн нэр");

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <div className="w-full flex flex-col gap-y-8 px-16 py-12">
        <h2 className="text-3xl font-bold">Бүртгүүлэх</h2>
        <div className="flex w-full gap-x-10">
          <div className="w-[35vw] flex flex-col">
            <form className="flex flex-col gap-8 h-full">
              <div>
                <label className="block mb-1">Нууц үг</label>
                <input
                  type="password"
                  className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black"
                />
              </div>
              <div>
                <label className="block mb-1">Нууц үг баталгажуулах</label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black"
                  />
                  <span className="absolute right-3 top-2.5 cursor-pointer"></span>
                </div>
              </div>
              <div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 cursor-pointer">
                Бүртгүүлэх
                </button>
                <p className="w-full flex justify-center text-sm text-gray-400 mt-4">
                    Хэрвээ танд хаяг аль хэдийн байгаа бол <span className="underline ml-1 cursor-pointer" onClick={() => router.push("./login")}>нэвтэрнэ үү</span>
                </p>
              </div>
            </form>
          </div>

          <div className="w-[65vw]">
            <Image src="/image/mongolia.png" alt="3D Map" layout="responsive" width={700} height={475}/>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  );
}
