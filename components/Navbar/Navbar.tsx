"use client";
import { navLink } from "./navLink";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";

export const Navbar = ({ showBackground = true }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScroll(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed px-6 lg:px-28 py-5 flex justify-between w-full items-center z-40 ${
        (isScroll && showBackground) || showBackground === false
          ? "bg-black"
          : ""
      }`}
    >
      <h1 className="font-bold text-2xl text-white">Sea.</h1>
      <div className="inline-flex gap-4 items-center">
        {navLink.map((items) => (
          <Link
            key={items.href}
            className="text-white py-1 px-4 rounded transition duration-300 ease-in-out hover:bg-gradient-yellow hover:text-black "
            href={items.href}
          >
            {items.title}
          </Link>
        ))}
        <IoIosSearch className="h-6 w-6 text-white" />
      </div>
    </nav>
  );
};
