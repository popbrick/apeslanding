import Link from "next/link";
import Image from "next/image";

import Logo from "../public/logo.svg";
import IconX from "../public/icon_x.png";
import IconTelegram from "../public/icon_telegram.png";

export const Navbar = () => {
  return (
    <nav className="sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/landingPage">
          <Image src={Logo} alt={"Logo"} />
        </a>
        <div className="flex">
          <Link href={""}>
            <Image src={IconX} alt={"IconX"} />
          </Link>
          <Link href={""}>
            <Image src={IconTelegram} alt={"IconTelegram"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};
