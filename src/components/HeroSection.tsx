import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center">
            {/* Navbar */}
            <Navbar />
            {/* Video de fondo */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/videoplayback.mp4" type="video/mp4" />
                </video>
            </div>
            {/* Contenido */}
            <div className="flex flex-col items-center gap-24">
                <div className="flex flex-col items-center gap-8 text-white">
                    <div className="text-5xl max-w-[20ch] text-center font-bold flex flex-col items-center gap-4">
                        <span>De vuelta a</span>
                        <img 
                            src="/vice-city_logo.png" 
                            alt="Vice City Logo" 
                            className="h-20 object-contain" 
                        />
                    </div>
                    <a 
                        href="https://www.rockstargames.com/VI" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-black uppercase px-6 py-3 rounded-md text-sm font-semibold"
                    >
                        Ver tráiler
                    </a>
                </div>
                {/* Consolas */}
                <div className="flex justify-center gap-24 w-full max-w-[700px]">
                    <HighlightImage src="/ps5-logo.png" />
                    <HighlightImage src="/Xbox_Series_X_S.png" />
                </div>
            </div>
        </section>
    );
};

const HighlightImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <img src={src} alt={alt} className="h-24 object-contain" />
            <span className="text-white text-sm uppercase text-center">{alt}</span>
        </div>
    );
};

export default HeroSection;
