import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { Volume1, Volume2, VolumeX } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-start">
      <Navbar />

      {/* Video de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/Grand_Theft_Auto_VI_Trailer_2.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col items-center gap-20 mt-24 z-20">
        <div className="flex flex-col items-center gap-8 text-white">
          <div className="text-7xl max-w-[20ch] text-center font-bold flex flex-col items-center gap-4">
            <span className="text-[4rem]" style={{ fontFamily: "RageItalic" }}>Welcome to</span>
            <img
              src="/vice-city_logo.png"
              alt="Vice City Logo"
              className="h-36 object-contain"
            />
          </div>
          <a
            href="https://www.rockstargames.com/VI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#A3305D] to-[#D35D64] text-white uppercase px-6 py-3 rounded-md text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            Ver tráiler
          </a>
        </div>
      </div>

      {/* Control de volumen moderno - abajo a la derecha */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white z-30">
        {volume === 0 ? (
          <VolumeX size={20} />
        ) : volume < 0.5 ? (
          <Volume1 size={20} />
        ) : (
          <Volume2 size={20} />
        )}
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-32 accent-pink-600"
        />
      </div>
    </section>
  );
};

export default HeroSection;
