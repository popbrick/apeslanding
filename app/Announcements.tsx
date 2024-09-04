import React from 'react';
import { inter, poppins } from "./fonts";
import { AnnouncementCard } from './components/AnnouncementCard';
import bgCardEarlyAccess from "../public/image-card-active.png"


export const Announcements: React.FC = () => {
  return (
    <section className="py-12">
      <div className="w-full max-w-[1320px] m-auto flex flex-col gap-20 px-10">
        <h2 className={`${poppins.className} text-center text-white text-5xl font-medium leading-[62.40px]`}>While waiting for the Big Day</h2>
        <div className="grid gap-[52px] md:grid-cols-3">
          <AnnouncementCard step={1} backgroundImage={bgCardEarlyAccess.src} label="Submit for <br/> Early Access now!" revealed={true}/>
          <AnnouncementCard step={2} backgroundImage={''} label={'To be revealed'} revealed={false}/>
          <AnnouncementCard step={3} backgroundImage={''} label={'To be revealed'} revealed={false}/>
        </div>
      </div>
    </section>
  );
};

//1320 x 630
