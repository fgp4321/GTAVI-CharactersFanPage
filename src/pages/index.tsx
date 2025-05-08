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
        image="/bg-overview.jpeg" 
        tag="Overview" 
        title="Elevate adventure in the luxury electric SUV of tomorrow." 
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia per quis non mauris, massa fusce tempor condimentum dictumst scelerisque feugiat m"
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
