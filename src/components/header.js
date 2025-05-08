"use client";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="bg-black w-full flex items-center pt-12 pb-6 px-16 text-sm">
      <div className="flex items-center h-8 w-full justify-between">
        <div className="flex items-center gap-x-10 h-full">
          <img
            onClick={() => router.push("/homepage")}
            src="/image/logo.png"
            alt="Logo"
            className="h-full w-auto cursor-pointer"
          />
          <button onClick={() => router.push("/about")} className="h-full cursor-pointer">
            БИДНИЙ ТУХАЙ
          </button>
          <button onClick={() => router.push("/help")} className="h-full cursor-pointer">
            ТУСЛАМЖ
          </button>
          <button onClick={() => router.push("/contact")} className="h-full cursor-pointer">
            ХОЛБОО БАРИХ
          </button>
        </div>

        {pathname === "/login" ? (
          <button
            onClick={() => router.push("/register")}
            className="bg-purple-600 hover:bg-purple-700 text-white h-full px-4 rounded-full cursor-pointer"
          >
            Бүртгүүлэх
          </button>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="bg-white hover:bg-purple-700 text-black h-full px-4 rounded-full cursor-pointer"
          >
            Нэвтрэх
          </button>
        )}
      </div>
    </div>
  );
}
