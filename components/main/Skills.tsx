import React from "react";
import { Skill_data } from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <div
      className=" relative flex flex-col h-screen  z-10  px-4 md:px-0"
      id="skills"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute opacity-35 left-0 z-[1] w-full h-[100%] object-cover "
      >
        <source src="public_cards-video.mp4" type="video/webm" />
      </video>
      <div className="z-10 pt-[15rem]">
        <SkillText />
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center z-10 px-[10rem]  ">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            src={image.Image}
            key={index}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
