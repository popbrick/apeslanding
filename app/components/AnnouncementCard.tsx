import React from "react";
import Image from "next/image";
import { inter, poppins } from "../fonts";
import defaultImage from "../../public/bg_announcement.png";

interface AnnouncementProps {
  step: number;
  backgroundImage: string;
  label: string;
  revealed: boolean;
}

export const AnnouncementCard: React.FC<AnnouncementProps> = ({
  step,
  backgroundImage,
  label,
  revealed,
}) => {
  return (
    <div
      className="relative h-[472px] bg-cover bg-center px-8 py-10 rounded-3xl border border-gray-300 shadow-lg"
      style={{
        backgroundImage: `url(${
          revealed ? backgroundImage : defaultImage.src
        })`,
      }}
    >
      <div
        className={`absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-[28px] text-black font-bold ${poppins.className}`}
      >
        {step}
      </div>
      <div
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[26px] font-semibold ${inter.className}`}
      >
        {label}
      </div>
    </div>
  );
};

{
  /* <div className={`p-4 rounded-3xl relative`}>
      <Image src={BgDefault} alt="default" className="absolute z-0"/>
      <div className="w-14 h-14 relative bg-white/20 rounded-[500px] border-4 border-white/50 backdrop-blur-[50px]">
        <div className={`${poppins.className} left-[23px] top-[7px] absolute text-center text-white text-[28px] font-bold`}>
          {step}
        </div>
      </div>
      <div
        className={`${inter.className} text-center text-white text-[26px] font-semibold leading-9`}
      >
        {label}
      </div>
    </div> */
}
