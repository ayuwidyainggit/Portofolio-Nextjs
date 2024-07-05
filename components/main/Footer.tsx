import React from "react";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Contacts</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLocationPin />
              <span className="text-[15px] ml-[6px]">Yogkakarta</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaWhatsapp />
              <span className="text-[15px] ml-[6px]">087719634477</span>
            </p>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <MdEmail />
              <span className="text-[15px] ml-[6px]">
                ayuwidya5601@gmail.com
              </span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaGitlab />
              <span className="text-[15px] ml-[6px]">Gitlab</span>
            </p>

            <Link href="https://github.com/ayuwidyainggit">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaGithub />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </Link>
            <Link href="https://www.linkedin.com/in/ayu-widya-inggit-0573b7192/">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaLinkedin />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">About Me</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">12 Mei 1998</span>
            </p>
            <Link href="https://github.com/ayuwidyainggit">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">
                  Universitas Teknologi Digital Nusantara
                </span>
              </p>
            </Link>

            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                Computerized Accounting
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                &copy; ayuwidyainggit 2024
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
