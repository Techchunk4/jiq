import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 bg-blue-500 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="#projects">
                  <p className="uppercase font-bold tracking-widest ">Projects</p>
                </Link>
              </li>
              <li>
                <Link href="#skills">
                  <p className="uppercase font-bold tracking-widest">Skills</p>
                </Link>
              </li>
              <li>
                <Link href="#experience">
                  <p className="uppercase font-bold tracking-widest">Experience</p>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <p className="uppercase font-bold tracking-widest">Contact</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
