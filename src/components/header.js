"use client"; 
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div className="bg-black w-full flex items-center pt-12 pb-6 px-16 text-sm">
      <div className="flex items-center h-8 w-full justify-between">
        <div className="flex items-center gap-x-10 h-full">
          <img onClick={() => router.push("/homepage")} src="/image/logo.png" alt="Logo" className="h-full w-auto"/>
          <button onClick={() => router.push("/about")} className="h-full"> БИДНИЙ ТУХАЙ</button>
          <button onClick={() => router.push("/help")} className="h-full">ТУСЛАМЖ</button>
          <button onClick={() => router.push("/contact")} className="h-full">ХОЛБОО БАРИХ</button>
        </div>

        <button onClick={() => router.push("/register")} className="bg-purple-600 hover:bg-purple-700 text-white h-full px-4 rounded-full">
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
}
