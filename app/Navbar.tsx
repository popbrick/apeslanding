import Link from "next/link";
import Image from "next/image";

import Logo from "../public/logo.svg";
import IconX from "../public/icon_x.png";
import IconTelegram from "../public/icon_telegram.png";

export const Navbar = () => {
  return (
    <nav className="sm:p-6 md:flex md:justify-between md:items-center backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/landingPage">
          <Image src={Logo} alt={"Logo"} />
        </a>
        <div className="flex">
          <Link href={"https://x.com/apescreener"}>
            <Image src={IconX} alt={"IconX"} />
          </Link>
          <Link href={"https://t.me/apescreener"}>
            <Image src={IconTelegram} alt={"IconTelegram"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
