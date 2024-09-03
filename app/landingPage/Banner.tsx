import Countdown from "./Countdown";
import { inter, poppins } from "../fonts";

export const Banner = () => {
  const targetDate = "2024-09-31T23:59:59";
  return (
    <div className="px-10 py-20">
      <div className="flex flex-col gap-y-12 items-center">
        <div
          className={`${poppins.className} text-center text-white text-[38px] md:text-[88px] font-semibold leading-[38px] md:leading-[88px]`}
        >
          Coming Soon
        </div>
        <Countdown targetDate={targetDate} />
        <div className="h-14 px-8 py-2.5 bg-gradient-to-r from-[#00fe93] to-[#15a0a0] rounded-[500px] justify-center items-center gap-2.5 inline-flex">
          <div
            className={`${inter.className} text-black text-lg font-semibold leading-[25.20px]`}
          >
            Get early access
          </div>
        </div>
      </div>
    </div>
  );
};

//text-center text-white text-[38px] font-semibold font-['Poppins'] leading-[38px]