import React from "react";
import { inter, poppins } from "../fonts";

interface DigitBoxProps {
  num: string;
}

interface NumberBoxProps {
  num:  number;
  unit: string;
}

const DigitBox: React.FC<DigitBoxProps> = ({ num }) => {
  return (
    <div className="px-3 py-3 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[50px] justify-center items-center inline-flex">
      <div
        className={`${poppins.className} text-white text-[28px] md:text-[40px] font-normal w-5 md:w-6 h-[42px] items-center flex`}
      >
        {num}
      </div>
    </div>
  );
};

export const NumberBox: React.FC<NumberBoxProps> = ({ num, unit }) => {
  let numberToBeDisplayed: string = ""
  numberToBeDisplayed = num.toString()
  if (num < 10) {
    numberToBeDisplayed = "0" + num;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-2">
        <DigitBox num={numberToBeDisplayed.charAt(0)} />
        <DigitBox num={numberToBeDisplayed.charAt(1)} />
      </div>
      <div
        className={`${inter.className} text-white/80 text-base font-normal leading-tight mt-3`}
      >
        {unit.charAt(0).toUpperCase() + unit.slice(1)}
      </div>
    </div>
  );
};

{
  /* <div className="h-20 justify-start items-start gap-2 inline-flex">
  <div className="w-14 h-20 px-[26px] py-1.5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-white text-[40px] font-semibold font-['Poppins']">1</div>
  </div>
  <div className="w-14 h-20 px-[26px] py-1.5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-white text-[40px] font-semibold font-['Poppins']">3</div>
  </div>
</div>

<div className="h-16 justify-start items-start gap-2 inline-flex">
  <div className="grow shrink basis-0 h-16 px-[26px] py-1.5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-white text-[28px] font-semibold font-['Poppins']">1</div>
  </div>
  <div className="grow shrink basis-0 h-16 px-[26px] py-1.5 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[50px] justify-center items-center gap-2.5 flex">
    <div className="text-white text-[28px] font-semibold font-['Poppins']">3</div>
  </div>
</div> */
}
