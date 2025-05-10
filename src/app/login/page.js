// frontend/pages/login.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login as loginService } from "@/services/api";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginService(name, password);
      console.log('Login successful:', data);
      router.push(`/user/${data.userId}`);
    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex flex-col gap-y-8 px-16 py-12">
        <h2 className="text-3xl font-bold">Нэвтрэх</h2>
        <div className="flex w-full gap-x-10">
          <div className="w-[35vw] flex flex-col">
            <form className="flex flex-col gap-6 h-full" onSubmit={handleLogin}>
              {error && <p className="text-red-500">{error}</p>}
              <div>
                <label className="block mb-1">Нэр</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black" required />
              </div>
              <div>
                <label className="block mb-1">Нууц үг</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-2 py-3 rounded-xl bg-white border border-none focus:outline-purple-800 text-black" required />
              </div>
              <button type="submit" className={`w-full bg-white text-black font-semibold py-2 rounded-full hover:bg-purple-700 cursor-pointer ${loading ? 'opacity-50 cursor-wait' : ''}`} disabled={loading}>
                {loading ? 'Нэвтэрч байна...' : 'Нэвтрэх'}
              </button>
              <p className="text-sm text-gray-400">
                Хэрвээ хаяг байхгүй бол{" "}
                <span className="underline ml-1 cursor-pointer" onClick={() => router.push("/register")}>
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