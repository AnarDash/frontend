"use client";

import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [renterClass, setRenterClass] = useState(
    "bg-purple-600 text-white w-[15vw] py-3 rounded-2xl hover:bg-purple-700"
  );
  const [loaderClass, setLoaderClass] = useState(
    "border border-2 border-purple-500 text-white w-[15vw] rounded-2xl hover:bg-purple-700"
  );
  const [className, setClassName] = useState("Дэлгүүрийн нэр");

  const [shopname, setShopname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRenterClick = () => {
    setRenterClass("bg-purple-600 text-white w-[15vw] py-3 rounded-2xl hover:bg-purple-700");
    setLoaderClass("border border-2 border-purple-500 text-white w-[15vw] rounded-2xl hover:bg-purple-700");
    setClassName("Дэлгүүрийн нэр");
  };

  const handleLoaderClick = () => {
    setRenterClass("border border-2 border-purple-500 text-white w-[15vw] rounded-2xl hover:bg-purple-700");
    setLoaderClass("bg-purple-600 text-white w-[15vw] py-3 rounded-2xl hover:bg-purple-700");
    setClassName("Таны нэр");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Password:", password);
    
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <div className="w-full flex flex-col gap-y-8 px-16 py-12">
        <h2 className="text-3xl font-bold">Нэвтрэх</h2>
        <div className="flex w-full gap-x-10">
          <div className="w-[35vw] flex flex-col">
            <div className="flex justify-between mb-4">
              <button className={renterClass} onClick={handleRenterClick}>
                Зээлэгч
              </button>
              <button className={loaderClass} onClick={handleLoaderClick}>
                Зээлдэгч
              </button>
            </div>

            <form className="flex flex-col gap-6 h-full" onSubmit={handleLogin}>
              <div>
                <label className="block mb-1">{className}</label>
                <input
                  type="text"
                  value={className == "Зээлэгч" ? shopname : username}
                  onChange={(e) => {className == "Зээлэгч" ?  setShopname(e.target.value) : setUsername(e.target.value)}}
                  className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black"
                />
              </div>

              <div>
                <label className="block mb-1">Нууц үг</label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black"
                  />
                  <span className="absolute right-3 top-2.5 cursor-pointer"></span>
                </div>
              </div>

              <div>
                <div className="mb-2">
                  <input type="checkbox" id="remember" className="bg-purple-600" />
                  <label htmlFor="remember" className="ml-1">
                    Нууц үг санах
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-purple-700 cursor-pointer"
                >
                  Нэвтрэх
                </button>
              </div>

              <p className="text-sm text-gray-400">
                Хэрвээ хаяг байхгүй бол{" "}
                <span
                  className="underline ml-1 cursor-pointer"
                  onClick={() => router.push("/register")}
                >
                  бүртгүүлнэ үү
                </span>
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

      <Footer />
    </div>
  );
}
