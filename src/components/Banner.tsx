"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="min-w-full">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        EXCELL YOUR
        </div>
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        <span className="text-palette1-primary">CAREER </span> WITH US
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, itaque. 
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 ">
        Quia iste distinctio aspernatur eaque atque sit, veritatis, suscipit voluptas 
        </div>
        <div className="font-extralight text-base md:text-xl dark:text-neutral-200 ">
        quas eligendi cum impedit labore nam autem tenetur, repellat laboriosam.
       </div>
        
      </motion.div>
    </AuroraBackground>
  );
}
