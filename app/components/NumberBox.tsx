import React, { useEffect, useState } from "react";
import { inter, poppins } from "../fonts";

interface DigitBoxProps {
  num: string;
}

interface NumberBoxProps {
  num: number;
  unit: string;
}

const DigitBox: React.FC<DigitBoxProps> = ({ num }) => {
  const [prevNum, setPrevNum] = useState(num);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (prevNum !== num) {
      setFlipped(true);
      setTimeout(() => {
        setFlipped(false);
        setPrevNum(num);
      }, 600); // Duration of the flip animation
    }
  }, [num]);

  return (
    <div
      className={`relative px-3 py-3 bg-white/10 rounded-lg border border-white/20 backdrop-blur-[50px] justify-center items-center inline-flex ${
        flipped ? "flip" : ""
      }`}
    >
      <div
        className={`${poppins.className} text-white text-[28px] md:text-[40px] font-normal w-5 md:w-6 h-[42px] items-center flex`}
      >
        {num}
      </div>
    </div>
  );
};

export const NumberBox: React.FC<NumberBoxProps> = ({ num, unit }) => {
  let numberToBeDisplayed: string = "";
  numberToBeDisplayed = num.toString();
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
