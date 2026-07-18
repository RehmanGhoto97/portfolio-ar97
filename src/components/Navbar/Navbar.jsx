"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
export const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
  },
];
const wallBackground = {
  backgroundImage: 'linear-gradient(to top, #ff000040, black), linear-gradient(to bottom, #ff000040, black)',
  backgroundSize: "100% 50%", // Cover half of the element height
  backgroundPosition: 'top left, bottom right',
  backgroundRepeat: "no-repeat",
};

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <motion.nav
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
      style={{ ...wallBackground, opacity: 1, willChange: "auto" }}
      className=" bg-transparent text-white"
    >
      <div className="container flex items-center justify-between py-2 relative z-[9999]">
        {/* Logo section */}
        <Link href={"/"}>
          <div className="flex items-center">
            <div className="h-[40px] w-[40px] justify-center flex items-center bg-primary text-white rounded-full text-3xl font-bold">
              P
            </div>
            <h1 className="font-bold text-3xl ml-2">Portfolio</h1>
          </div>
        </Link>

        {/* Links section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className={`inline-block ${
                      isActive
                        ? "text-primary hover:text-white font-bold  text-xl"
                        : " "
                    } text-lg py-1 px-4 hover:bg-primary transition-all   hover:red-shadow duration-300 hover:scale-110`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <button className="btn ml-5">
              <a href="./Resume.pdf">Get Resume</a>
            </button>
          </ul>
        </div>

        {/* Mobile menu section */}
        <div className="md:hidden">
          <MdMenu onClick={toggleMenu} className=" text-4xl" />
        </div>
      </div>
      {/* Mobile sidebar menu */}
      <ResponsiveMenu showMenu={showMenu} />
    </motion.nav>
  );
};

export default Navbar;
