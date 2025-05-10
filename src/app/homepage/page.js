"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";

export default function Homepage() {
  const router = useRouter();
  const [stars, setStars] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const sliderRef = useRef(null);
  const items = ["SANSAR.MN", "NOMIN.MN", "EMART.MN", "TANAN.MN"];
  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const generatedStars = Array.from({ length: 200 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 5 + 5,
      drift: Math.random() * 10 - 5,
    }));
    setStars(generatedStars);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <div className="relative text-white font-sans min-h-screen flex flex-col items-center bg-black overflow-x-hidden">
      {/* Global styles */}
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-1px);
          }
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite alternate;
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>

      {/* Background Stars */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
              transform: `translateX(${star.drift}px)`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 w-full">
        <Header />
      </div>

      {/* Main Section */}
      <main className="relative z-10 w-[90%] h-[120vh] flex flex-col items-center justify-between bg-gradient-to-t from-purple-600 rounded-xl mt-20">
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="text-purple-400">Х</span>ЯЛБАР{" "}
            <span className="text-purple-400">А</span>ЮУЛГYЙ{" "}
            <span className="text-purple-400">Ш</span>УУРХАЙ
          </h1>
          <p className="text-lg text-center px-4">
            Манай веб хуудсыг ашигласнаар та дэлгүүрийн зээлийг Хялбар, Аюулгүй, Шуурхай хөтлөх боломжтой.
          </p>
        </div>

        <div className="w-full">
          <Image src="/image/Phones.png" alt="3D Map" layout="responsive" width={200} height={275} />
        </div>
      </main>

      {/* Slider Section */}
      <div className={`${styles.container} relative z-10`}>
        <h2 className={styles.heading}>2к хэрэглэгчидэд хүлээн зөвшөөрөгдсөн</h2>
        <div
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={sliderRef}
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${currentIndex * 25}%)`,
              transition: isPaused ? "none" : "transform 0.5s ease-in-out",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={index} className={styles.slideItem}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll-to-top Button */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white w-16 h-16 rounded-full shadow-lg animate-bounce flex items-center justify-center z-50"
        >
          ↑
        </button>
      )}

      {/* How It Works Section */}
      <section className="w-[90%] max-w-7xl h-auto py-16 relative z-10">
        <img
          src="/image/LogoPurple.png"
          alt="Logo"
          className="h-full w-auto cursor-pointer mx-auto mb-8"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Бидний платформ хэрхэн таны асуудлыг <span className="text-purple-500">шийдэх</span> вэ?
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Registration Section */}
          <section className="bg-gray-900 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A8.962 8.962 0 0112 15c2.278 0 4.355.847 5.879 2.234M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-white">Бүртгүүлэх</h3>
            </div>
            <p className="text-white mb-6">
              Зээлэгч болон зээлдэгч гэсэн хоёр сонголтоос сонгон бүртгүүлнэ.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {["Зээлэгч", "Зээлдэгч"].map((role, idx) => (
                <div key={idx} className="bg-black p-4 rounded-xl border border-gray-700">
                  <div className="flex justify-between mb-3">
                    <button className="bg-purple-600 text-white px-4 py-1 rounded-xl">{role}</button>
                    <button className="bg-black border border-2 border-purple-600 text-white px-3 py-1 rounded-xl">{role === "Зээлэгч" ? "Зээлдэгч" : "Зээлэгч"}</button>
                  </div>
                  <input
                    type="text"
                    placeholder={role === "Зээлэгч" ? "Дэлгүүрийн нар" : "Таны нэр"}
                    className="w-full p-2 mb-3 rounded-xl bg-white text-black border border-gray-600"
                  />
                  <input
                    type="password"
                    placeholder="Нууц үг"
                    className="w-full p-2 mb-4 rounded-xl bg-white text-black border border-gray-600"
                  />
                  <div className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <label className="text-white">Нууц үг санах</label>
                  </div>
                  <button className="w-full bg-white text-black rounded-xl py-2 font-semibold hover:bg-purple-700">
                    Нэвтрэх
                  </button>
                  <p className="text-sm mt-2 text-gray-400">
                    Хэрэв танд хаяг байхгүй бол <span onClick={() => router.push('/register')} className="mouse">бүртгүүлнэ үү</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-900 rounded-2xl p-8 text-white">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3m0-6c1.657 0 3 1.343 3 3s-1.343 3-3 3m0 4v.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-2xl font-semibold">Зээл мэдээллийг харах</h3>
            </div>
            <p className="mb-6">Хүмүүсийн зээлийн мэдээллийг хэдхэн товч дарсанаар шууд харах.</p>

            <div className="bg-black p-4 rounded-xl border border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm mb-4">
                <div className="bg-gray-800 p-2 rounded">6 Зээл төлөгдөөгүй байна</div>
                <div className="bg-gray-800 p-2 rounded">5 Зээл төлөгдсөн байна</div>
                <div className="bg-gray-800 p-2 rounded">1 зээл хүлээгдэж байна</div>
                <div className="bg-gray-800 p-2 rounded">2 зээлний хугацаа дууссан</div>
              </div>
              <div className="bg-white text-black rounded p-2 text-center font-semibold">5 сар</div>
              <div className="mt-4 grid grid-cols-7 gap-1 text-sm">
                {["Да", "Мя", "Лх", "Пү", "Ба", "Бя", "Ня"].map((d, i) => (
                  <div key={i} className="text-center text-gray-300">
                    {d}
                  </div>
                ))}
                {[...Array(31)].map((_, i) => (
                  <div
                    key={i}
                    className={`text-center py-1 rounded ${
                      i + 1 === 10
                        ? "bg-red-500 text-white"
                        : "hover:bg-gray-700 cursor-pointer"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
}
