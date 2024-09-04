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
      <div className="w-14 h-14 relative bg-white/20 rounded-full border-4 border-white/50 backdrop-blur-[50px] flex items-center justify-center">
        <div
          className={`text-center text-white text-[28px] font-bold ${poppins.className}`}
        >
          {step}
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 w-[calc(100%-32px)] transform -translate-x-1/2 px-4 pb-9">
        <div
          className={`text-white text-[26px] font-semibold text-center ${inter.className} leading-9`}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </div>
    </div>
  );
};
