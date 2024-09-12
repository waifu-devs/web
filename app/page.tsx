'use client';

import Header from "@/components/Header";
import Image from 'next/image';
import Waifu from '../components/assets/giphy.webp';
import { HeroHighlightDemo } from "@/components/Highlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const words = [
  {
    text: "watch.",
    className: "text-[#9B91C0]",
  },
  {
    text: "read.",
    className: "text-[#CF8BA9]",
  },
  {
    text: "play.",
    className: "text-[#CEC2FF]",
  },
  {
    text: "develop.",
    className: "text-[#B86D79]",
  },
];

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <main className="flex flex-col min-h-screen">

      <Header />

      <div className="flex flex-col justify-center min-h-screen z-0">
        <HeroHighlightDemo />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          hidden: { opacity: 0, y: 50 },
        }}
        className="flex flex-col md:flex-row justify-center items-center md:space-x-4 p-4"
      >
        <div className="text-center w-[50%]">
          <h1 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center">A place where you can share what you <TypewriterEffect words={words} className="inline" /></h1>

        </div>
        <div className="flex justify-center">
          <Image src={Waifu} alt="cosa" className="max-w-full h-auto" />
        </div>
      </motion.div>

    </main>
  );
}
