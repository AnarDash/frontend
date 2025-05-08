"use client";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Image from "next/image";

export default function Homepage() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate stars only once on mount
    const generatedStars = Array.from({ length: 150 }).map(() => ({
      size: Math.random() * 2 + 1, // 1–3px
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5, // 0.5–1
      duration: Math.random() * 5 + 5, // 5–10s
      drift: Math.random() * 10 - 5, // -5 to 5 px drift
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="text-white font-sans min-h-screen flex flex-col items-center relative bg-black overflow-hidden">
      <Header />

      {/* Background Stars */}
      <div className="absolute inset-0 z-0">
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

      {/* Twinkle + Drift Animation */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-1px); }
          100% { opacity: 0.3; transform: translateY(0); }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite alternate;
        }
      `}</style>

      <div className="relative z-10 w-[90%] h-[120vh] flex flex-col items-center justify-between bg-gradient-to-t from-purple-600">
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="text-purple-400">Х</span>ЯЛБАР{" "}
            <span className="text-purple-400">А</span>ЮУЛГҮЙ{" "}
            <span className="text-purple-400">Ш</span>УУРХАЙ
          </h1>
          <p className="text-lg text-center px-4">
            Манай веб хуудсыг ашигласнаар та дэлгүүрийн зээлийг Хялбар, Аюулгүй, Шуурхай хөтлөх боломжтой.
          </p>
        </div>

        <div className="w-full ">
          <Image
            src="/image/Phones.png"
            alt="3D Map"
            layout="responsive"
            width={200}
            height={275}
          />
        </div>
      </div>
      
      <div className=""></div>
      <footer className="relative z-10 mt-12 w-full text-xs text-center p-4 text-gray-400 border-t border-gray-700">
        ДИЖИТАЛ ӨРӨНД ДЭЭРТЭР ТАНЬ АСУУДЛЫГ ХУРДАН АЮУЛГҮЙ ШУУРХАЙ ШИЙДНЭ
      </footer>
    </div>
  );
}
