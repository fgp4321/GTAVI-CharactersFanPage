import Image from 'next/image';

import HeroSection from "@/components/HeroSection"
import Section from "@/components/Section";
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';


export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis()
    function raf(time: any){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="min-h-screen">
      <HeroSection />
      <Section 
        image="/Jason_Duval.jpg"
        tag=""
        title="Jason Duval"
        description={`Jason quiere una vida fácil, pero las cosas no hacen más que complicarse.\n
          Jason se crio rodeado de estafadores y delincuentes. Tras un tiempo en el ejército intentando dejar atrás su adolescencia problemática, acabó en los cayos haciendo lo que mejor sabe: trabajar para narcotraficantes de la zona. Quizás haya llegado el momento de probar algo nuevo.\n
          Conocer a Lucía podría ser lo mejor o lo peor que le haya pasado. Jason tiene claro cómo le gustaría que acabara la historia, pero ahora mismo es difícil saberlo.`}
        alignRight={true}
      />

      <Section 
        image="/bg-interior.jpeg" 
        tag="Interior" 
        title="Interior space. Superior taste" 
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia per quis non mauris, massa fusce tempor condimentum dictumst scelerisque feugiat m"
      />
      <Section 
        image="/bg-charging.jpeg" 
        tag="Charging" 
        title="Long distances in lightning speed" 
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia per quis non mauris, massa fusce tempor condimentum dictumst scelerisque feugiat m"
      />
      <Section 
        image="/bg-connectivity.jpeg" 
        tag="Connectivity" 
        title="Feel the world at your fingertips." 
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia per quis non mauris, massa fusce tempor condimentum dictumst scelerisque feugiat m"
      />
      <Section 
        image="/bg-safety.jpeg" 
        tag="Safety" 
        title="Designed for peace of mind." 
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia per quis non mauris, massa fusce tempor condimentum dictumst scelerisque feugiat m"
      />
    </main>
  );
}
