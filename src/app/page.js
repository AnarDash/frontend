
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn === "true") {

      router.push("/homepage");
    } else {

      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Redirecting...</h1>
    </div>
  );
}
