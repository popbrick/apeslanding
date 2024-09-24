"use client";

import { useState, useEffect } from "react";
import Countdown from "./components/Countdown";
import { GetEarlyAccessModal } from "./components/GetEarlyAccessModal";
import { inter, poppins } from "./fonts";
import Link from "next/link";

enum CountDownStatus {
  NONE,
  NOT_ENDED,
  ENDED,
}

export const Banner = () => {
  const targetDate = "2024-09-24T19:00:00Z"; //24th September 19.00 UTC
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdownEnded, setCountdownEnded] = useState(CountDownStatus.NONE);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDateObj = new Date(targetDate);
    const difference = targetDateObj.getTime() - now.getTime();

    let timeLeft = difference > 0;
    return timeLeft;
  };

  const renderAccessButton = (countDownStatus: CountDownStatus) => {
    switch (countDownStatus) {
      case CountDownStatus.NONE:
        return (
          <div className="spinner-container h-8 w-8 border-4 border-gray-300 rounded-full border-t-green-500 animate-spin"></div>
        );
      case CountDownStatus.NOT_ENDED:
        return (
          <button
            className="h-14 px-8 py-2.5 bg-gradient-to-r from-[#00fe93] to-[#15a0a0] rounded-[500px] justify-center items-center gap-2.5 inline-flex transition-transform duration-150 ease-in-out transform active:scale-95 hover:from-[#00d47b] hover:to-[#138a8a]"
            onClick={handleOpenModal}
          >
            <span
              className={`${inter.className} text-black text-lg font-semibold leading-[25.20px]`}
            >
              Early Access
            </span>
          </button>
        );
      case CountDownStatus.ENDED:
        return (
          <Link href={"https://beta.apescreener.xyz/"} target="_blank">
            <button
              className="h-14 px-8 py-2.5 bg-gradient-to-r from-[#00fe93] to-[#15a0a0] rounded-[500px] justify-center items-center gap-2.5 inline-flex transition-transform duration-150 ease-in-out transform active:scale-95 hover:from-[#00d47b] hover:to-[#138a8a]"
              onClick={function (): void {}}
            >
              <span
                className={`${inter.className} text-black text-lg font-semibold leading-[25.20px]`}
              >
                Enter DApp
              </span>
            </button>
          </Link>
        );
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!calculateTimeLeft()) {
        setCountdownEnded(CountDownStatus.ENDED);
        clearInterval(timer); // Clear interval once the countdown ends
      } else {
        setCountdownEnded(CountDownStatus.NOT_ENDED);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <section>
      <div className="flex flex-col gap-y-12 items-center px-10 py-20">
        {/* Conditionally render "Coming Soon" and Countdown if it hasn't ended */}
        <div
          className={`${poppins.className} text-center text-white text-[38px] md:text-[88px] font-semibold leading-[38px] md:leading-[88px]`}
        >
          September 24th
        </div>
        {renderAccessButton(countdownEnded)}
      </div>
      <GetEarlyAccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};
