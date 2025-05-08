import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const Section: React.FC<{
    image: string;
    tag: string;
    title: string;
    description: string;
    alignRight?: boolean;
    alignCenterLeft?: boolean;
}> = ({ image, tag, title, description, alignRight = false, alignCenterLeft = false }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

    return (
        <section ref={sectionRef} className="relative h-screen overflow-hidden">
            <motion.div className="absolute w-full h-[120%] -z-10" style={{ top: y }}>
                <div className="absolute inset-0 bg-black/30 -z-10" />
                <Image src={image} alt={title} fill className="object-cover" />
            </motion.div>

            <div
            className={`absolute ${
                alignCenterLeft
                ? "left-24 top-1/2 -translate-y-1/2"
                : alignRight
                ? "right-24 top-24 items-end text-right"
                : "left-24 top-24"
            } flex flex-col gap-4 text-white max-w-[600px] text-shadow`}
            >
            <span className="uppercase text-xs tracking-widest">{tag}</span>
            <h1 className="text-5xl font-extrabold tracking-wide uppercase text-white drop-shadow-[0_0_10px_#695AD1] drop-shadow-[0_0_20px_#EB8A52] drop-shadow-[0_0_30px_#E94DBE]">
                {title}
            </h1>
                {description.split('\n\n').map((para, index) => (
                    <p key={index} className="text-base leading-relaxed mb-4">{para}</p>
                ))}

            </div>
        </section>
    );
};

export default Section;
