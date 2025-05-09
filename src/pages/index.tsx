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
        image="/Lucia_Caminos.jpg" 
        tag="" 
        title="Lucia Caminos" 
        description={`El padre de Lucia le enseñó a pelear en cuanto aprendió a caminar.\n
        La vida no ha dejado de golpearla desde entonces. Luchar por su familia la llevó a la penitenciaría de Leonida, de la que solo la suerte la sacó. Lucia ha aprendido la lección: de ahora en adelante, solo decisiones inteligentes.\n
        Lucia desea una buena vida más que nada en el mundo, aquella con la que su madre soñaba desde sus días en Liberty City. Pero esta vez no se conformará con fantasías ingenuas, Lucia está ahora preparada para tomar las riendas de su vida.\n
        Una vida con Jason podría ser su oportunidad para salir adelante.`}
      />
      <Section 
        image="/Cal_Hampton_03.jpg"
        tag=""
        title="Cal Hampton"
        description={`¿Y si todo lo que dicen en Internet fuera verdad?\n
          Cal, amigo de Jason y otro de los socios de Brian, se siente más seguro en casa, espiando las comunicaciones de la guardia costera con unas cervezas y unas cuantas pestañas privadas abiertas en el navegador.\n
          Cal pertenece al estrato más bajo de América, y no le molesta. La paranoia ocasional es contagiosa, pero su amigo Jason apunta más alto.`}
        alignRight={true}
      />
      <Section 
        image="/Boobie_Ike_03.jpg" 
        tag="" 
        title="Boobie Ike" 
        description={`El Jack of Hearts te robará el corazón.\n
        Boobie es una leyenda local de Vice City, y se comporta como tal. Es uno de los pocos que logró aprovechar el tiempo que pasó en la calle para crear un imperio legítimo compuesto por propiedades inmobiliarias, un club de striptease y un estudio de grabación. Boobie siempre sonríe, hasta que llega la hora de hablar de negocios.\n
        Puede parecer que Boobie solo mira por sí mismo, pero lo que de verdad le importa es su colaboración con el joven aspirante a magnate musical Dre'Quan, al frente de Only Raw Records. Ahora solo les falta un éxito.\n`}
        alignRight={true}
      />
      <Section 
        image="/DreQuan_Priest_02.jpg" 
        tag="" 
        title="DreQuan Priest" 
        description={`Only Raw... Records\n
        Dre'Quan siempre fue más buscavidas que gánster. Incluso cuando vendía droga en la calle para llegar a fin de mes, su meta era meterse en el mundo de la música.\n
        Ahora que ha fichado a Real Dimez, los días en que Dre'Quan contrataba artistas para el club de striptease de Boobie podrían estar contados, ya que ha puesto la mira en la escena de Vice City.\n`}
        alignCenterLeft
      />
      <Section 
        image="/Real_Dimez_04.jpg" 
        tag="" 
        title="Real Dimez" 
        description={`Vídeos virales y temas pegadizos.\n
        Bae-Luxe y Roxy, también conocidas como Real Dimez, son amigas desde el instituto, y cuentan con el ingenio suficiente para convertir sus visitas a los camellos del barrio en dinero contante y sonante gracias a temas de rap picantes y su constante presencia en las redes.\n
        Su primer éxito junto al rapero local DWNPLY llevó a Real Dimez a lo más alto. Ahora, cinco años y un buen puñado de líos después, han firmado con el estudio Only Raw Records, y sueñan con volver a tener un golpe de suerte.\n`}
        alignBottomRight
      />
      <Section 
        image="/Raul_Bautista_03.jpg" 
        tag="" 
        title="Raul Bautista" 
        description={`La experiencia es un grado.\n
        Confianza, carisma e ingenio: Raul es un atracador de bancos con experiencia que siempre busca a gente con agallas, dispuesta a correr riesgos para obtener las mayores recompensas.\n
        Raul se vuelve más temerario con cada golpe. Tarde o temprano, su equipo tendrá que redoblar la apuesta o retirarse de la partida.\n`}
      />
      <Section 
        image="/Brian_Heder_01.jpg" 
        tag="" 
        title="Brian Heder" 
        description={`No hay nada mejor que tomarse un mudslide al atardecer.\n
        Brian es el típico narcotraficante de la época dorada del contrabando en los cayos. Sigue traficando desde su astillero junto a su tercera esposa, Lori, y lleva tanto tiempo en el negocio que ahora deja que otros se encarguen del trabajo sucio.\n
        Parece un hippie playero de Leonida, pero ataca como un gran tiburón blanco.\n
        Brian deja que Jason viva gratis en una de sus propiedades con la condición de que le ayude a extorsionar a los residentes y se pase de vez en cuando a tomar la sangría de Lori.\n`}
        alignBottomRight
      />
    </main>
  );
}
