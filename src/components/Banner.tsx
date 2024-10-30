"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className='min-w-full bg-[#805AF5] bg-opacity-5 h-[600px] mt-2 mb-4 flex justify-center items-center relative overflow-hidden'>
      <motion.img
        src='/images/bg/icon-shape/icon-shape-one.png'
        alt='animatedBgImage'
        className='absolute w-20 h-20 left-32 top-10'
        animate={{ x: ["-10%", "10%","-10%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
       <motion.img
        src='/images/bg/icon-shape/icon-shape-two.png'
        alt='animatedBgImage'
        className='absolute w-12 h-12 left-52 bottom-52'
        animate={{ x: ["-10%", "10%","-10%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
       <motion.img
        src='/images/bg/icon-shape/icon-shape-three.png'
        alt='animatedBgImage'
        className='absolute w-20 h-20 right-32 top-10'
        animate={{ x: ["-10%", "10%","-10%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}

      />
       <motion.img
        src='/images/bg/icon-shape/icon-shape-four.png'
        alt='animatedBgImage'
        className='absolute w-20 h-20 right-52 bottom-52'
        animate={{ x: ["-10%", "10%","-10%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}

      />
       <motion.img
        src='/images/bg/icon-shape/icon-shape-five.png'
        alt='animatedBgImage'
        className='absolute w-20 h-20 left-32 top-10'
        animate={{ x: ["-2%", "2%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div className='w-max px-2 flex-col gap-2 text-[60px] font-bold relative '>
        <h1>EXCELL YOUR</h1>
        <h1><span className='text-palette1-primary'>CAREER</span> WITH US</h1>
        <p className='text-lg font-medium  mt-4 max-w-2xl'>
  "Empowering students to reach their career goals. Upload your resume, showcase your skills, and let us connect you with top employers looking for fresh talent. From internships to job fairs and direct hiring opportunities, we make your transition from education to employment seamless and rewarding."
</p>


      </div>
    </div>
  );
};

export default Banner;
