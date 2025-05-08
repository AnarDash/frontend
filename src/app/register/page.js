"use client"; 
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Image from "next/image";

export default function Register() {
  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex flex-col gap-8 px-16 py-12">
        <h2 className="text-3xl font-bold">Бүртгүүлэх</h2>
        <div className="flex w-full gap-x-1">
          <div className="w-[35vw] flex flex-col">
            <form className="flex flex-col gap-4 h-full">
              <div>
                <label htmlFor="email" className="block mb-1 text-1xl font-bold">
                  Таны И-майл хаяг
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full p-2 rounded-lg bg-white border border-gray-600 text-black focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 text-1xl font-bold">
                  Гар утасны дугаар
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="99998888"
                  className="w-full p-2 rounded-lg bg-white border border-gray-600 text-black"
                />
              </div>
              <div>
                <label htmlFor="registerId" className="block mb-1 text-1xl font-bold">
                  Регистрийн дугаар
                </label>
                <input
                  id="registerId"
                  type="text"
                  placeholder="AB12345678"
                  className="w-full p-2 rounded-lg bg-white border border-gray-600 text-black"
                />
              </div>
              <div>
                <label htmlFor="storeName" className="block mb-1 text-1xl font-bold">
                  Дэлгүүрийн нэр
                </label>
                <input
                  id="storeName"
                  type="text"
                  placeholder="Миний дэлгүүр"
                  className="w-full p-2 rounded-lg bg-white border border-gray-600 text-black"
                />
              </div>
              <div>
                <label htmlFor="storeAddress" className="block mb-1 text-1xl font-bold">
                  Дэлгүүрийн хаяг
                </label>
                <input
                  id="storeAddress"
                  type="text"
                  placeholder="Улаанбаатар, Баянзүрх дүүрэг..."
                  className="w-full p-2 rounded-lg bg-white border border-gray-600 text-black"
                />
              </div>

              <button className="w-full bg-purple-800 text-white font-semibold py-2 rounded-full mt-4">
                Үргэлжлүүлэх
              </button>
              <p className="w-full flex justify-center text-sm text-gray-400">
                Хэрвээ танд хаяг аль хэдийн байгаа бол <span className="underline ml-1 cursor-pointer" onClick={() => router.back()}>нэвтэрнэ үү</span>
              </p>
            </form>
          </div>
          <div className="w-[65vw]">
            <Image
              src="/image/mongolia.png"
              alt="3D Map"
              layout="responsive"
              width={700}
              height={475}
            />
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full text-xs text-center p-4 text-gray-400 border-t border-gray-700">
        ДИЖИТАЛ ӨРӨНД ДЭЭРТЭР ТАНЬ АСУУДЛЫГ ХУРДАН АЮУЛГҮЙ ШУУРХАЙ ШИЙДНЭ
      </footer>
    </div>
  );
}
