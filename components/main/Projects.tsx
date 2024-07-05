import React from "react";
import HeroContent from "../sub/HeroContent";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className=" relative flex flex-col h-full mt-[30rem] md:mt-0 ">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute  left-0 z-[1] w-full h-[100%] object-cover "
      >
        <source src="/blackhole.mp4" type="video/webm" />
      </video>
      <div className=" flex flex-col items-center justify-center py-20 z-50 ">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Project
        </h1>
        <div className=" h-full w-full grid grid-cols-12 gap-2">
          <div className="col-span-12  md:col-span-4">
            <ProjectCard
              src="/projects/coffeeshop.png"
              title="Coffee Shop Website"
              description="Coffee shop website is an online platform created by a coffee establishment to showcase its offerings, services, and ambiance to a virtual audience. Build by React js, CSS"
              url="https://ayuwidyainggit.github.io/WebsiteCoffeshop/"
            />
          </div>
          <div className=" col-span-12  md:col-span-4">
            <ProjectCard
              src="/projects/saas.png"
              title="Saas Website"
              description="Build responsive web Saas using React Js and Css"
              url="https://ayuwidyainggit.github.io/frontend-mysaas/"
            />
          </div>
          <div className=" col-span-12  md:col-span-4">
            <ProjectCard
              src="/projects/khadijah_market.png"
              title="Khadija Market"
              description="I built a website for customers, customers can view products, add to cart, and checkout products. Then I built a web application for the store admin and for admin members using Reactjs and Tailwind CSS. Build React js, CSS, Tailwind CSS, Redux"
            />
          </div>
          <div className=" col-span-12  md:col-span-4">
            <ProjectCard
              src="/projects/khadijah_web.png"
              title="Admin Khadijah Market"
              description="I built a website for customers, customers can view products, add to cart, and checkout products. Then I built a web application for the store admin and for admin members using Reactjs and Tailwind CSS. Build React js, CSS, Tailwind CSS, Redux"
            />
          </div>
          <div className=" col-span-12  md:col-span-4">
            <ProjectCard
              src="/projects/LPPD_adm.png"
              title="Website Tapemansel LPPD"
              description="LPPD web contains articles, services, articles, and other information. Build by React js, Tailwind CSS, Material UI, Redux, Redux Thunk"
            />
          </div>
          <div className=" col-span-12  md:col-span-4">
            <ProjectCard
              src="/projects/LPPD_web.png"
              title="Admin Tapemansel LPPD"
              description="LPPD web contains articles, services, articles, and other information. Build by React js, Tailwind CSS, Material UI, Redux, Redux Thunk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
