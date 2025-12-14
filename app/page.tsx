"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import cicekData from "./Single line flower.json";

export default function Home() {
  
  const [paletIndex, setPaletIndex] = useState(0);

  // --- POZİSYONLAR ---
  const pozisyonlar = [
    { id: 1, rotate: -45, scale: 0.9, zIndex: 1, delay: 0 },   
    { id: 2, rotate: -25, scale: 1.0, zIndex: 5, delay: 0.5 }, 
    { id: 3, rotate: -12, scale: 1.1, zIndex: 8, delay: 1.0 }, 
    { id: 4, rotate: 45,  scale: 0.9, zIndex: 1, delay: 0.2 }, 
    { id: 5, rotate: 25,  scale: 1.0, zIndex: 5, delay: 0.7 }, 
    { id: 6, rotate: 12,  scale: 1.1, zIndex: 8, delay: 1.2 }, 
    { id: 7, rotate: 0,   scale: 1.3, zIndex: 10, delay: 1.5 },
  ];

  // --- RENK PALETLERİ ---
  const paletler = [
    // 1. SONBAHAR & OKYANUS
    [
      { hue: 210, bri: 0.4, sat: 0.8 }, { hue: 195, bri: 0.7, sat: 0.9 },
      { hue: 185, bri: 0.9, sat: 0.6 }, { hue: 15,  bri: 0.5, sat: 0.8 },
      { hue: 25,  bri: 0.7, sat: 1.0 }, { hue: 25,  bri: 0.8, sat: 1.1 },
      { hue: 45,  bri: 1.1, sat: 1.2 },
    ],
    // 2. ROMANTİK PASTEL
    [
      { hue: 170, bri: 1.2, sat: 0.8 }, { hue: 260, bri: 1.1, sat: 0.9 },
      { hue: 320, bri: 1.1, sat: 0.8 }, { hue: 170, bri: 1.2, sat: 0.8 },
      { hue: 260, bri: 1.1, sat: 0.9 }, { hue: 320, bri: 1.1, sat: 0.8 },
      { hue: 340, bri: 1.2, sat: 1.0 },
    ],
    // 3. GÜN BATIMI
    [
      { hue: 0,   bri: 0.8, sat: 1.2 }, { hue: 20,  bri: 1.0, sat: 1.3 },
      { hue: 40,  bri: 1.1, sat: 1.4 }, { hue: 0,   bri: 0.8, sat: 1.2 },
      { hue: 20,  bri: 1.0, sat: 1.3 }, { hue: 40,  bri: 1.1, sat: 1.4 },
      { hue: 10,  bri: 1.3, sat: 1.5 },
    ],
    // 4. UZAY GECESİ
    [
      { hue: 240, bri: 0.6, sat: 1.5 }, { hue: 270, bri: 0.9, sat: 1.5 },
      { hue: 190, bri: 1.2, sat: 1.5 }, { hue: 240, bri: 0.6, sat: 1.5 },
      { hue: 270, bri: 0.9, sat: 1.5 }, { hue: 190, bri: 1.2, sat: 1.5 },
      { hue: 290, bri: 1.3, sat: 2.0 },
    ],
    // 5. DOĞA ANA
    [
      { hue: 100, bri: 0.8, sat: 0.9 }, { hue: 140, bri: 1.0, sat: 1.0 },
      { hue: 60,  bri: 1.1, sat: 0.8 }, { hue: 100, bri: 0.8, sat: 0.9 },
      { hue: 140, bri: 1.0, sat: 1.0 }, { hue: 60,  bri: 1.1, sat: 0.8 },
      { hue: 120, bri: 1.2, sat: 1.2 },
    ],
  ];

  const rengiDegistir = () => {
    setPaletIndex((prev) => (prev + 1) % paletler.length);
  };

  return (
    <main 
      className="relative w-full h-screen bg-black overflow-hidden flex justify-center items-end cursor-pointer pb-0"
      onClick={rengiDegistir}
    >
      
      {/* RESPONSIVE KAPSAYICI:
         h-[50vh] -> Mobilde ekranın yarısı kadar yükseklik
         md:h-[60vh] -> Bilgisayarda %60 yükseklik
      */}
      <div className="relative w-full h-[50vh] md:h-[60vh] flex justify-center items-end">
        
        {/* --- ÇİÇEKLER --- */}
        {pozisyonlar.map((pos, index) => {
          const aktifRenk = paletler[paletIndex][index];

          return (
            <div
              key={pos.id}
              // RESPONSIVE AYARLAR BURADA:
              // bottom-[190px] -> Mobilde vazonun ağız hizası
              // md:bottom-[320px] -> Bilgisayarda vazonun ağız hizası
              // scale-75 md:scale-100 -> Mobilde çiçekler %25 daha küçük görünsün
              className="absolute h-full aspect-square transition-all duration-1000 ease-in-out bottom-[190px] md:bottom-[320px] scale-75 md:scale-100"
              style={{
                left: "50%",
                // rotate ve scale değerlerini transform içinde tutuyoruz
                transform: `translateX(-50%) rotate(${pos.rotate}deg) scale(${pos.scale})`,
                transformOrigin: "bottom center",
                zIndex: pos.zIndex, 
                
                filter: `hue-rotate(${aktifRenk.hue}deg) brightness(${aktifRenk.bri}) saturate(${aktifRenk.sat})`,
              }}
            >
              <div
                className="h-full w-full"
                style={{
                  transformOrigin: "bottom center",
                  animation: `narinRuzgar 5s ease-in-out infinite alternate`,
                  animationDelay: `${3 + pos.delay}s`
                }}
              >
                <Lottie 
                  animationData={cicekData} 
                  loop={false} 
                  autoplay={true}
                  className="h-full w-full"
                />
              </div>
            </div>
          );
        })}

        {/* --- VAZO --- */}
        {/* RESPONSIVE VAZO:
           w-[220px] -> Mobildeki genişlik (Sabit piksel daha güvenlidir)
           md:w-[370px] -> Bilgisayardaki genişlik
        */}
        <div className="absolute bottom-0 z-20 w-[220px] md:w-[370px] opacity-70 saturate-50 brightness-100 drop-shadow-2xl transition-all duration-500">
           <img 
             src="/Bal-m/vazo.png"
             alt="Antik Vazo"
             className="w-full h-auto"
           />
        </div>

      </div>

      <style jsx global>{`
        @keyframes narinRuzgar {
          0% { transform: rotate(0deg) skewX(0deg); }
          33% { transform: rotate(1deg) skewX(2deg); }
          66% { transform: rotate(-1deg) skewX(-2deg); }
          100% { transform: rotate(0deg) skewX(0deg); }
        }
      `}</style>

    </main>
  );
}