import React, { useRef, useState } from "react";
import styled from "styled-components";

const Menu = styled.span`
  &::before {
    content: "";
    background-color: #ffd7c1;
    border-color: #ffd7c1;
    clip-path: polygon(100% 0, 100% 100%, 0 calc(100% - 15px), 0 0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: height 0.3s;
    z-index: -1;
  }
  &:hover {
    &::before {
      height: calc(100% + 15px);
    }
  }
`;

const Dropdown: React.FC<{ name: string }> = ({ name }: { name: string }) => {
  return (
    <li className="h-full transition-[background] duration-100 ml-2">
      <div className="relative text-[13px] tracking-[1px] uppercase text-[#222] font-jost font-[600] h-full">
        <Menu className="flex items-center px-5 justify-center h-full">
          {name}
        </Menu>
      </div>
    </li>
  );
};

export default Dropdown;
