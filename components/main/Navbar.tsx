import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61] bg-[#03001417] bg-transparent z-50 px-10">
      <div className="w-full h-full flex flex-row items-center  justify-between m-auto px-[10px] ">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center  "
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            width={50}
            height={50}
            className=" cursor-pointer hover:animate-spin rounded-full"
          />

          <span className="font-bold  ml-[10px] hidden md:block text-gray-300">
            My Portofolio
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center  justify-center md:mr-20 ">
          <div className="flex gap-12 items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px]  rounded-full text-white">
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5 "></div>
      </div>
    </div>
  );
};

export default Navbar;
