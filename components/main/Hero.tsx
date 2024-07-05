import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className=" relative flex flex-col h-full " id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute  left-0 z-[1] w-full h-[100%] object-cover "
      >
        <source src="/blackhole.mp4" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
