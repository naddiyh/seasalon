import Link from "next/link";
import { navLink } from "../Navbar/navLink";
export const Footer = () => {
  return (
    <footer className="flex px-8 md:px-28 w-screen relative bottom-0 gap-2 h-[60px] py-10 items-center bg-black text-white">
      <div className="flex  w-full">
        <h1 className="font-bold text-lg">Sea.</h1>

        <div className=" flex gap-10 justify-center text-m  w-full">
          {navLink.map((index) => (
            <Link href={index.href} key={""}>
              {index.title}
            </Link>
          ))}
        </div>
      </div>

      <p className="text-xs absolute bottom-3 right-10">
        ©SEASalon 2024. All right reserved
      </p>
    </footer>
  );
};
