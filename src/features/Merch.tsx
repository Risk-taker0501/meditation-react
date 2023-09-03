import React from "react";
import styled from "styled-components";

const GradientBackground = styled.div`
  width: 100%;
  background: #fdebd0;
`;

const Merch: React.FC = () => {
  return (
    <>
      <GradientBackground>
        <div className="container mx-auto px-[50px] pt-24 md:pt-40">
          <div className="md:mx-auto md:max-w-[1140px] lg:mx-auto lg:max-w-container-lg">
            <div className="text-center mb-16">
              <h1 className="text-[] font-space-grotesk font-[700] text-[48px] ">
                Merch
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <div className="col px-3 relative">
                <img
                  src="/meditation-reactimages/amy-shamblen-5TbhW1YFWuU-unsplash-1-550x550.jpg"
                  alt="wooden"
                />
                <span className="absolute font-['Sen'] font-bold tracking-[1px] uppercase  text-[11px] top-[-28px] left-[28px] w-[60px] bg-[#111] text-white text-center h-[60px] flex justify-center rounded-full items-center">
                  sale
                </span>
                <div className="py-10 px-5 mb-5">
                  <h1 className="text-[1.4rem] font-[700] font-space-grotesk">
                    Wooden Clock
                  </h1>
                  <div className="text-[#444] leading-[1.4] font-jost my-2">
                    <span className="line-through">$120.00</span>
                    <span className="ml-5">$90.00</span>
                  </div>
                </div>
              </div>
              <div className="col px-3 relative">
                <img src="/meditation-reactimages/teapot-550x550.jpg" alt="teapot" />
                <div className="py-10 px-5 mb-5">
                  <h1 className="text-[1.4rem] font-[700] font-space-grotesk">
                    Teapot
                  </h1>
                  <div className="text-[#444] leading-[1.4] font-jost my-2">
                    <span className="">$90.00</span>
                  </div>
                </div>
              </div>
              <div className="col px-3 relative">
                <img src="/meditation-reactimages/head-550x550.jpg" alt="head" />
                <span className="absolute font-['Sen'] font-bold tracking-[1px] uppercase  text-[11px] top-[-28px] left-[28px] w-[60px] bg-[#111] text-white text-center h-[60px] flex justify-center rounded-full items-center">
                  sale
                </span>
                <div className="py-10 px-5 mb-5">
                  <h1 className="text-[1.4rem] font-[700] font-space-grotesk">
                    Funny Toy
                  </h1>
                  <div className="text-[#444] leading-[1.4] font-jost my-2">
                    <span className="line-through">$120.00</span>
                    <span className="ml-5">$90.00</span>
                  </div>
                </div>
              </div>
              <div className="col px-3 relative">
                <img src="/meditation-reactimages/radio-550x550.jpg" alt="radio" />
                <div className="py-10 px-5 mb-5">
                  <h1 className="text-[1.4rem] font-[700] font-space-grotesk">
                    Old Radio
                  </h1>
                  <div className="text-[#444] leading-[1.4] font-jost my-2">
                    <span className="">$90.00</span>
                  </div>
                </div>
              </div>
              <div className="col px-3 relative">
                <img src="/meditation-reactimages/paper-550x550.jpg" alt="paper" />
                <div className="py-10 px-5 mb-5">
                  <h1 className="text-[1.4rem] font-[700] font-space-grotesk">
                    Paper
                  </h1>
                  <div className="text-[#444] leading-[1.4] font-jost my-2">
                    <span className="">$90.00</span>
                  </div>
                </div>
              </div>
              <div className="col px-3 relative">
                <img src="/meditation-reactimages/typewriter-1-550x550.jpg" alt="typewriter" />
                <div className="py-10 px-5 mb-5">
                  <h1 className="text-[1.4rem] font-[700] font-space-grotesk">
                    Typewriter
                  </h1>
                  <div className="text-[#444] leading-[1.4] font-jost my-2">
                    <span className="line-through">$900.00</span>
                    <span className="ml-5">$600.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center tracking-[3px] font-[700] font-jost py-4">
          ©2023 THE LAUGH FACTORY
        </div>
      </GradientBackground>
    </>
  );
};

export default Merch;
