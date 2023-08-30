import React from "react";
import { useNavigate } from "react-router";

const Card: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/episode");
  };
  return (
    <div
      className="col px-1 bg-black/[0] rounded-lg mb-10 hover:cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="md:h-[165px] h-[150px] mb-7 mx-auto rounded-[20px]"
        src="/images/ahmetoz_realistic_portrait_of_a_blonde_attractive_woman_who_is__1400a914-7574-4ce4-b10a-429f2cf6747f-550x550.jpg"
      />
      <a className="text-[#ab8383] flex md:w-full w-[200px] mx-auto text-[17px] font-[700]">
        Episode 07: Goodbye boring, hello adventure
      </a>
    </div>
  );
};

export default Card;
