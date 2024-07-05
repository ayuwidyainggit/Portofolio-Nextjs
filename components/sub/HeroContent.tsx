"use client";
import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  const handleContactClick = () => {
    // Ganti dengan nomor telepon Anda
    const phoneNumber = "087719634477";
    const message = "Halo, saya ingin tahu lebih banyak tentang Anda!";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20  w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div className="welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className=" Welcome-text text-[13px] ">
            Frontend Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto   py-4"
          variants={slideInFromLeft(0.5)}
        >
          Ayu
          <span className="text-transparent bg-clip-text py-4 bg-gradient-to-r from-purple-500 to-cyan-500">
            Widya Inggit
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  my-5 max-w-[600px] "
        >
          Hi, I am Frontend Developer Problem solver, well-organised person,
          loyal employee with high attention to detail. Interested in all
          frontend developer and working on ambitious projects with interesting
          people.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={handleContactClick}
        >
          Contact Me
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center "
      >
        <Image src="/person.png" alt="work icon" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
