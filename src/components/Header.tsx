import React from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="bg-[#fdebd0] fixed w-full z-20">
      <div className="container max-w-[1140px] mx-auto h-[90px] flex items-center justify-between">
        <Logo />
        <ul className="h-full flex items-center">
          <Link className="h-full" to={"/meditation-react/#"}>
            <Dropdown name="Subscribe" />
          </Link>
          <Link className="h-full" to={"/meditation-react/about"}>
            <Dropdown name="About" />
          </Link>
          <Link className="h-full" to={"/meditation-react/merch"}>
            <Dropdown name="Merch" />
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
