import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  name: string;
  link: string;
  icon: typeof faCheck;
}

const Button = ({ name, link, icon }: ButtonProps) => {
  return (
    <a
      className="hover:scale-110 hover:border-[#0000003B] hover:bg-gradient-to-r hover:from-[#D67777] hover:to-[#4F82EA] hover:text-[#FFE3D5] hover:bg-transparent duration-300 transition-[transform] inline-flex items-center text-[15px] border-solid text-black border border-[#998CA5] rounded-[10px] bg-[#00000000] shadow-[0_0_10px_0_rgba(0,0,0,0)] px-[30px] py-[12px] font-['Jost'] normal-case font-[600]"
      href={link}
    >
      <FontAwesomeIcon icon={icon} className="mr-2"/>
      {name}
    </a>
  );
};

export default Button;
