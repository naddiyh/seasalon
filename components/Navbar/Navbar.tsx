"use client";
import { useState, useEffect } from "react";
import { navLink } from "./navLink";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { PrimaryButton } from "../atoms";
import { useAuth } from "@/features/auth/useAuth";

export const Navbar = ({ showBackground = true }) => {
  const { user, handleLogOut } = useAuth();
  const [isScroll, setIsScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed px-4 lg:px-28 py-3 md:py-5 flex justify-between items-center w-full z-40 ${
        (isScroll && showBackground) || showBackground === false
          ? "bg-black"
          : ""
      }`}
    >
      <h1 className="font-bold text-2xl text-white">Sea.</h1>
      <div className="hidden md:flex gap-2 md:gap-4 items-center">
        {navLink.map((items) => (
          <Link
            key={items.href}
            className="text-white py-1 px-4 rounded transition duration-300 ease-in-out hover:bg-gradient-yellow hover:text-black"
            href={items.href}
          >
            {items.title}
          </Link>
        ))}
        {!user ? (
          <>
            <Link href="/signup" passHref>
              <PrimaryButton fullwidth={true}>Sign up</PrimaryButton>
            </Link>
            <Link href="/login" passHref>
              <PrimaryButton fullwidth={true}>Login</PrimaryButton>
            </Link>
          </>
        ) : (
          <PrimaryButton fullwidth={false} onClick={handleLogOut}>
            Log out
          </PrimaryButton>
        )}
      </div>
      <div className="md:hidden flex items-center">
        {!isMobileMenuOpen ? (
          <>
            <IoIosMenu
              className="text-white cursor-pointer w-8 h-8"
              onClick={toggleMobileMenu}
            />
          </>
        ) : (
          <IoIosClose
            className="text-white cursor-pointer w-8 h-8 z-20"
            onClick={closeMobileMenu}
          />
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-black py-10 px-4 flex flex-col items-center">
          {navLink.map((items) => (
            <Link
              key={items.href}
              className="text-white py-2 rounded px-4 transition duration-300 ease-in-out hover:bg-gradient-yellow hover:text-black"
              href={items.href}
            >
              {items.title}
            </Link>
          ))}
          {!user ? (
            <>
              <div className="flex flex-col gap-4 pt-2">
                <Link href="/signup" passHref>
                  <PrimaryButton fullwidth={true}>Sign up</PrimaryButton>
                </Link>
                <Link href="/login" passHref>
                  <PrimaryButton fullwidth={true}>Login</PrimaryButton>
                </Link>
              </div>
            </>
          ) : (
            <PrimaryButton fullwidth={true} onClick={handleLogOut}>
              Log out
            </PrimaryButton>
          )}
        </div>
      )}
    </nav>
  );
};
