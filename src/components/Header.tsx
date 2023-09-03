import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import Dropdown from "./Dropdown";

const Header = () => {
  const [isHamHurberOpen, setIsHamgurgerOpen] = useState<boolean>(false);

  const genericHamburgerLine = `h-[2px] w-[17px] my-[2px] transition ease transform duration-300`;
  return (
    <header className="bg-[#fdebd0] fixed w-full z-20 shadow-md">
      <div className="container max-w-[1140px] mx-auto md:h-[90px] h-[70px] flex items-center md:px-4 px-2 md:justify-between">
        <div className="flex md:hidden">
          <button
            className="flex flex-col h-10 w-10 rounded justify-center items-center group mt-0 bg-transparent p-0"
            onClick={() => setIsHamgurgerOpen(!isHamHurberOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isHamHurberOpen
                  ? "rotate-45 translate-y-1.5  group-hover:opacity-100 bg-black"
                  : " group-hover:opacity-100 bg-black"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isHamHurberOpen
                  ? "opacity-0"
                  : " group-hover:opacity-100 bg-black"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isHamHurberOpen
                  ? "-rotate-45 -translate-y-1.5  group-hover:opacity-100 bg-black"
                  : "group-hover:opacity-100 bg-black"
              }`}
            />
          </button>
        </div>
        <Logo />
        <div className="hidden md:block h-full">
          <ul className="h-full flex items-center">
            <Link className="h-full" to={"/"}>
              <Dropdown name="Home" />
            </Link>
            <Link className="h-full" to={"/courses"}>
              <Dropdown name="Courses" />
            </Link>
            <Link className="h-full" to={"https://podcasters.spotify.com/pod/show/whitenoise369"}>
              <Dropdown name="Spotify " />
            </Link>
            <Link className="h-full" to={"/about"}>
              <Dropdown name="About" />
            </Link>
            <Link className="h-full" to={"/merch"}>
              <Dropdown name="Merch" />
            </Link>
          </ul>
        </div>
      </div>
      <div
        className={`${
          isHamHurberOpen && "block h-screen"
        } lg:hidden w-full bg-[#fdebd0] transition-height duration-200 inset-0`}
      >
        {isHamHurberOpen && (
          <ul className="flex flex-col items-center h-full justify-center ">
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to="/"
                className="font-proxima-nova font-medium text-[16px] uppercase"
                onClick={()=>setIsHamgurgerOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to="/courses"
                className=" font-proxima-nova font-medium text-[16px] uppercase"
                onClick={()=>setIsHamgurgerOpen(false)}
              >
                Courses
              </Link>
            </li>
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to="https://podcasters.spotify.com/pod/show/whitenoise369"
                className="font-proxima-nova font-medium text-[16px] uppercase"
                onClick={()=>setIsHamgurgerOpen(false)}
              >
                Spotify 
              </Link>
            </li>
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to="/about"
                className="font-proxima-nova font-medium text-[16px] uppercase"
                onClick={()=>setIsHamgurgerOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="inline-block px-[15px] py-[6px]">
              <Link
                to="/merch"
                className="font-proxima-nova font-medium text-[16px] uppercase"
                onClick={()=>setIsHamgurgerOpen(false)}
              >
                Merch
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
