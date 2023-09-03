import React from "react";
import styled from "styled-components";
import {
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GradientBackground = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, #fdebd0, #d2b4de, #fdebd0);
`;

const About: React.FC = () => {
  return (
    <>
      <GradientBackground>
        <div className="container mx-auto px-[50px] pt-24 md:pt-40">
          <div className="md:mx-auto md:max-w-[1140px] lg:mx-auto lg:max-w-container-lg">
            <div className="flex justify-between flex-wrap">
              <div>
                <h4 className="text-[#AD9DC5] text-[15px] uppercase font-[500] font-['Jost'] tracking-[2.5px]">
                  - ABOUT THE SHOW
                </h4>
                <p className="text-[#444] font-[700] font-['Sen'] text-[48px] leading-loose">
                  ░
                </p>
              </div>
              <div className="md:w-3/4 w-full lg:pl-[100px]">
                <h1 className="text-[#121212] font-[700] md:text-[48px] text-[20px]">
                  The Laugh Factory - a Podcast about funny things in life.
                </h1>
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1">
              <div className="col md:pr-[64px] mt-20">
                <h1 className="text-[#AD9DC5] text-[15px] uppercase font-[500] font-['Jost'] tracking-[2.5px] mb-5">
                  what
                </h1>
                <p className="text-[#444] font-['Sen'] text-[16px] leading-[1.9]">
                  Leave that to me. Send a distress signal, and inform the
                  Senate that all on board were killed. Dantooine. They’re on
                  Dantooine. The plans you refer to will soon be back in our
                  hands. Alderaan? I’m not going to Alderaan. I’ve got to go
                  home.
                </p>
              </div>
              <div className="col md:px-[32px] mt-20">
                <h1 className="text-[#AD9DC5] text-[15px] uppercase font-[500] font-['Jost'] tracking-[2.5px] mb-5">
                  when
                </h1>
                <p className="text-[#444] font-['Sen'] text-[16px] leading-[1.9]">
                  Leave that to me. Send a distress signal, and inform the
                  Senate that all on board were killed. Dantooine. They’re on
                  Dantooine. The plans you refer to will soon be back in our
                  hands. Alderaan? I’m not going to Alderaan. I’ve got to go
                  home.
                </p>
              </div>
              <div className="col md:pl-[64px] mt-20">
                <h1 className="text-[#AD9DC5] text-[15px] uppercase font-[500] font-['Jost'] tracking-[2.5px] mb-5">
                  who
                </h1>
                <p className="text-[#444] font-['Sen'] text-[16px] leading-[1.9]">
                  Leave that to me. Send a distress signal, and inform the
                  Senate that all on board were killed. Dantooine. They’re on
                  Dantooine. The plans you refer to will soon be back in our
                  hands. Alderaan? I’m not going to Alderaan. I’ve got to go
                  home.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 mt-24">
              <div className="col md:pr-16 ">
                <img
                  className="rounded-[24px] shadow-[0px_19px_33px_-11px_rgba(145.50000000000003,90.55694633152176,90.55694633152176,0.82)]"
                  src="/meditation-reactimages/man-working-radio-station-1920.jpg"
                  alt="radio"
                />
              </div>
              <div className="col md:pl-16">
                <img
                  className="rounded-[24px] md:mt-0 mt-12 shadow-[0px_19px_33px_-11px_rgba(145.50000000000003,90.55694633152176,90.55694633152176,0.82)]"
                  src="/meditation-reactimages/young-man-enjoying-music-while-walking-streets-1920.jpg"
                  alt="youngman"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-fixed relative md:py-32 py-16 px-10 md:mt-40 mt-[20px]"
          style={{
            backgroundImage:
              'url("/meditation-reactimages/ahmetoz_people_supporting_a_podcast_show_ee16929c-d994-43e4-be56-4b0391a0c29b-copy.jpg")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full absolute top-0 right-0 bg-gradient-to-br from-[#3055D1] to-[#393C9BCC] opacity-70"></div>
          <div className="container relative md:max-w-[1140px] mx-auto z-2 flex flex-wrap">
            <div className="flex justify-center items-center md:w-2/5 w-full">
              <img
                className="md:max-w-[120px] max-w-[46px]"
                src="/meditation-reactimages/mic-love.png"
                alt="mic"
              />
            </div>
            <div className="flex flex-wrap md:justify-start justify-center text-white md:w-2/5 w-full">
              <h3 className="text-[13px] uppercase tracking-[2.5px] font-['Jost'] font-[700] mt-3 md:text-start text-center">
                show must go on.
              </h3>
              <div className="mb-24">
                <h2 className="md:text-[72px] text-[40px] font-[700] font-spaceGrotesk md:text-start text-center">
                  support us on patreon!
                </h2>
                <h3 className="text-[#FFFFFFEB] font-[400] text-[20px] text-center md:text-start">
                  Help us make the show just for the price of a cup of coffee a
                  month 🙂
                </h3>
              </div>
              <a className="hover:scale-110 duration-300 transition-[transform] bg-[#FF434E] md:text-[16px] text-[12px] font-['Jost'] uppercase tracking-[1px] font-[500] py-[20px] md:px-[40px] px-[20px] rounded-md">
                <FontAwesomeIcon icon={faPatreon} className="mr-2" />
                become for a patron
              </a>
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

export default About;
