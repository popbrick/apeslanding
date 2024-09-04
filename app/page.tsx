import Image from "next/image";
import { Navbar } from "./Navbar";
import { Banner } from "./Banner";
import BackgroundImage from "../public/background_image.png"
import { Announcements } from "./Announcements";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-[#181a1e] to-[#181a1e]">
      {/* <Image src={BackgroundImage} alt="BackgroundImage" className="absolute z-0 w-full"/> */}
      <Navbar/>
      <Banner />
      <Announcements />
    </main>
  );
}
