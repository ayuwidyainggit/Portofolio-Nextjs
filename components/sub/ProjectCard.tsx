import Image from "next/image";
import React from "react";

interface Props {
  url: string;
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[500px]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="py-2 mt-5 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
              Visit the app
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
