import Image from "next/image";
import IconBtnClose from "../../public/icon-box-close.svg";
import { poppins, inter } from "../fonts";

interface GetEarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetEarlyAccessModal: React.FC<GetEarlyAccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 p-4 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-[600px] overflow-y-auto h-[calc(100%-32px)] md:h-auto p-12 bg-[#37383c] rounded-[40px] border-4 border-white flex-col justify-center items-center gap-8 inline-flex">
        <Image
          src={IconBtnClose}
          alt="IconBtnClose"
          className="absolute top-4 right-4"
          onClick={onClose}
        />
        <div className="flex-col justify-center items-center gap-2 flex">
          <div
            className={`text-center text-white text-[32px] font-semibold ${poppins.className}`}
          >
            Welcome to Early Access
          </div>
          <div
            className={`text-center text-white/80 text-base font-normal leading-normal ${inter.className}`}
          >
            To participate, please provide your wallet address here:
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-start gap-3 w-full">
          <input
            type="text"
            placeholder="Wallet address"
            className={`h-14 px-6 py-4 bg-white/10 rounded-[500px] border border-white/20 text-white/50 text-base font-normal placeholder-white/50 w-full md:w-2/3 ${inter.className}`}
          />

          <button className="w-full md:w-1/3 h-14 p-4 bg-gradient-to-r from-[#00fe93] to-[#15a0a0] rounded-[500px] justify-center items-center gap-2.5 inline-flex">
            <span
              className={`text-black text-base font-semibold ${inter.className} leading-snug`}
            >
              Apply
            </span>
          </button>
        </div>
        <div className="h-[1px] w-full bg-white/10"></div>
        <div className=" h-[334px] flex-col justify-start items-start gap-6 flex">
          <div className=" h-[310px] flex-col justify-start items-start gap-4 flex">
            <div className=" h-[87px] flex-col justify-start items-start gap-3 flex">
              <div
                className={` text-white text-lg font-medium ${poppins.className}`}
              >
                Rules
              </div>
              <div
                className={` text-white/80 text-base font-normal leading-normal ${inter.className}`}
              >
                Nominees for Early Access participation will be selected
                randomly. The number of spots is limited.
              </div>
            </div>
            <div className=" h-[143px] flex-col justify-start items-start gap-3 flex">
              <div
                className={` text-white text-lg font-medium ${poppins.className}`}
              >
                Get a $APES Multiplier!
              </div>
              <div className="">
                <span
                  className={`text-white/80 text-base font-normal ${inter.className} leading-normal`}
                >
                  1. Wallets with{" "}
                </span>
                <span
                  className={`text-emerald-400 text-base font-semibold ${inter.className} leading-normal`}
                >
                  100,000 $APES
                </span>
                <span
                  className={`text-white/80 text-base font-normal ${inter.className} leading-normal`}
                >
                  {" "}
                  or more will have a higher chance of gaining access to Early
                  Access.
                  <br />
                  2. Wallets with{" "}
                </span>
                <span
                  className={`text-emerald-400 text-base font-semibold ${inter.className} leading-normal`}
                >
                  1,000,000 $APES
                </span>
                <span
                  className={`text-white/80 text-base font-normal ${inter.className} leading-normal`}
                >
                  {" "}
                  or more are guaranteed to receive Early Access.
                </span>
              </div>
            </div>
            <div
              className={` text-white/80 text-base font-normal ${inter.className} leading-normal`}
            >
              Follow our X account to find out if your wallet has been granted
              Early Access.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
