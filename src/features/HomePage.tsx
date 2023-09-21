import React, { useState } from "react";
import styled from "styled-components";
import {
  faSpotify,
  faGooglePlus,
  faSoundcloud,
  faMixcloud,
  faPatreon,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPodcast,
  faArrowRight,
  faCalendar,
  faListOl,
  faStopwatch,
  faCirclePlay,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPlayer from "react-player";

import Button from "../components/Button";

const GradientBackground = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, #fdebd0, #d2b4de, #fdebd0);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const HomePage: React.FC = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const [playUrl, setPlayUrl] = useState("");

  const clickPlay = (url: string) => {
    setPlayUrl(url);
    setPlayVideo(true);
  };

  return (
    <GradientBackground>
      <div className="container mx-auto px-[50px] pt-24 md:pt-40">
        <div className="md:mx-auto md:max-w-[1140px] lg:mx-auto lg:max-w-container-lg">
          <div className="flex md:flex-row flex-col-reverse">
            <div className="mx-auto lg:max-w-[600px] lg:pt-150">
              <div className="relative mb-8">
                <p className="text-center mt-8 md:mt-0 text-[#CBA789] text-md font-jost font-[900] tracking-[1.8px]">
                  Welcome to
                </p>
                <p className="font-bold text-center font-jost md:text-5xl text-[22px] relative z-10">
                  The BALANCED{" "}
                  <span className="uppercase text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-blue-500">
                    Wellness
                  </span>
                </p>
                <span className="absolute font-archivo md:text-[90px] text-[40px] font-bold drop-shadow-md opacity-50 text-white leading-[120px] top-1/3 left-[40px] md:left-1/3 z-0">
                  Health
                </span>
              </div>
              <p className="font-jost text-center text-xl mb-[20px] relative z-10">
                Introducing “The Balanced Wellness” - Shana Eloy’s meditation
                sanctuary. Immerse yourself in the transformative power of
                mindfulness and embark on a journey of self-discovery and inner
                peace. With Shana’s guidance, unlock the secrets to reducing
                stress, enhancing clarity, and cultivating a balanced
                well-being. Join us on this path to holistic wellness and
                experience the profound benefits that meditation can bring to
                your life.
              </p>
              <div className="mt-12">
                <h3 className="text-[#AD9DC5] text-[15px] uppercase tracking-[2.5px] font-[600] font-['Jost'] mb-3 text-center">
                  Listen & Subscribe On:
                </h3>
                <div className="flex flex-wrap justify-center">
                  <div className="mr-4 mb-3">
                    <Button link="s" name="Spotify" icon={faSpotify} />
                  </div>
                  <div className="mr-4 mb-3">
                    <Button link="s" name="Apple" icon={faPodcast} />
                  </div>
                  <div className="mr-4 mb-3">
                    <Button link="s" name="Google" icon={faGooglePlus} />
                  </div>
                  <div className="mr-4 mb-3">
                    <Button link="s" name="Soundcloud" icon={faSoundcloud} />
                  </div>
                  <div className="mr-4 mb-3">
                    <Button link="s" name="mixcloud" icon={faMixcloud} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-fixed relative md:py-32 py-16 px-10 md:mt-40 mt-[20px] mb-32"
        style={{
          backgroundImage:
            'url("/meditation-react/images/ahmetoz_people_supporting_a_podcast_show_ee16929c-d994-43e4-be56-4b0391a0c29b-copy.jpg")',
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full absolute top-0 right-0 bg-gradient-to-br from-[#3055D1] to-[#393C9BCC] opacity-70"></div>
        <div className="container relative md:max-w-[1140px] mx-auto z-2 flex flex-wrap">
          <div className="flex justify-center items-center md:w-2/5 w-full">
            <img
              className="md:max-w-[120px] max-w-[46px]"
              src="/meditation-react/images/mic-love.png"
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
      <div className="container mx-auto px-[50px] mb-48">
        <div className="md:mx-auto md:max-w-[1140px] lg:mx-auto lg:max-w-container-lg">
          <div className="flex w-full px-[2.4rem] py-[4%] bg-[#FFF9CD66] shadow-[0_2px_4px_#0000001a] rounded mb-3">
            <div className="w-1/4 pr-[4%] flex items-center">
              <div>
                <img
                  className="rounded"
                  src="/meditation-react/images/logo-new.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-3/4">
              <div className="mb-7">
                <span className="pr-5 text-[1rem] font-jost tracking-[1px] text-[#444]">
                  <FontAwesomeIcon icon={faCalendar} className="pr-1" />
                  September 04, 2023
                </span>
                <span className="pr-5 text-[1rem] font-jost tracking-[1px] text-[#444]">
                  <FontAwesomeIcon icon={faListOl} className="pr-1" />
                  197
                </span>
                <span className="pr-5 text-[1rem] font-jost tracking-[1px] text-[#444]">
                  <FontAwesomeIcon icon={faStopwatch} className="pr-1" />
                  00:38:50
                </span>
              </div>
              <div className="mb-1">
                <h1 className="font-[700] text-[2rem] font-['Sen'] hover:text-[#844eb1] hover:cursor-pointer">
                  Sleep Meditation - Creating Space To Be
                </h1>
              </div>
              <div>
                <p className="text-[1rem] tracking-[0.5px] mb-8">
                  In tonight’s Sleep Meditation with Karissa, we’re going to
                  create a space where we can relax, and focus on just being
                  here. We’ll focus on our breath, savoring all the wisdom and
                  peace to be gained from both the inhale and the exhale, and
                  relaxing into sleep as it comes. First, as always, we’ll
                  star...
                </p>
              </div>
              <div className="text-[56px] text-[#844eb1]">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  onClick={() =>
                    clickPlay("/meditation-react/video/Media1.mp4")
                  }
                  className="hover:text-[#25ccee] duration-[.2s] transition-colors hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full px-[2.4rem] py-[4%] bg-[#FFF9CD66] shadow-[0_2px_4px_#0000001a] rounded">
            <div className="w-1/4 pr-[4%] flex items-center">
              <div>
                <img
                  className="rounded"
                  src="/meditation-react/images/logo-new.png"
                  alt="logo"
                />
              </div>
            </div>
            <div className="w-3/4">
              <div className="mb-7">
                <span className="pr-5 text-[1rem] font-jost tracking-[1px] text-[#444]">
                  <FontAwesomeIcon icon={faCalendar} className="pr-1" />
                  September 04, 2023
                </span>
                <span className="pr-5 text-[1rem] font-jost tracking-[1px] text-[#444]">
                  <FontAwesomeIcon icon={faListOl} className="pr-1" />
                  197
                </span>
                <span className="pr-5 text-[1rem] font-jost tracking-[1px] text-[#444]">
                  <FontAwesomeIcon icon={faStopwatch} className="pr-1" />
                  00:38:50
                </span>
              </div>
              <div className="mb-1">
                <h1 className="font-[700] text-[2rem] font-['Sen'] hover:text-[#844eb1] hover:cursor-pointer">
                  Sleep Meditation - Creating Space To Be
                </h1>
              </div>
              <div>
                <p className="text-[1rem] tracking-[0.5px] mb-8">
                  In tonight’s Sleep Meditation with Karissa, we’re going to
                  create a space where we can relax, and focus on just being
                  here. We’ll focus on our breath, savoring all the wisdom and
                  peace to be gained from both the inhale and the exhale, and
                  relaxing into sleep as it comes. First, as always, we’ll
                  star...
                </p>
              </div>
              <div className="text-[56px] text-[#844eb1]">
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="hover:text-[#25ccee] duration-[.2s] transition-colors hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pb-[300px] relative"
        style={{
          backgroundImage:
            'url("/meditation-react/images/ahmetoz_microphone_and_love_8640abf2-427c-49ba-9ecb-6d732bca9015.jpg")',
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex relative mx-auto max-w-[740px] min-h-[26vw] ">
          <div className="w-full md:px-0 px-4">
            <div className="relative">
              <div className="absolute h-full w-full bg-[#FFF9CD]/50 z-3 rounded-[16px]"></div>
              <div className="relative mt-[-150px] md:p-[74px] pt-[30px] z-4">
                <div className="md:mx-[76px] mx-[30px]">
                  <h1 className="font-[700] font-spaceGrotesk md:text-[48px] text-[20px] text-[#222] text-center mb-3">
                    Become a <span>Sponsor!</span>
                  </h1>
                  <h3 className="text-center font-[400] font-['Jost'] text-[20px] text-[#222] ">
                    Feel free to contact us for any kind of collabrations or
                    sponsorships.
                  </h3>
                  <div className="flex justify-center md:mt-24 mt-12">
                    <a
                      href="/meditation-react/#"
                      className="hover:scale-110 transition-[transform] duration-300 bg-gradient-to-bl from-[#D67777] to-[#4F82EA] text-white text-[16px] md:py-[23px] py-[10px] md:px-[50px] px-[30px] rounded-[6px] font-['Jost'] font-[500] uppercase"
                    >
                      Let’s talk <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                  <p className="text-center mt-3 font-jost text-[#222]">
                    All queries are replied within 24hrs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid mx-auto max-w-[1140px] py-4 font-jost text-[20px]">
        <div className="flex justify-between border-b border-[#bbbbbb]">
          <img className="h-[100px]" src="/meditation-react/images/logo-new.png" alt="logo" />
          <div className="">
            contact info:
            <div>Email: <a href="mailto:balancedwellnesshealth@gmail.com">balancedwellnesshealth@gmail.com</a></div>
            <div>Phone: +1 234 546 4234</div>
            <div><a href="https://linkedin.com/"><FontAwesomeIcon className="text-[#0077b5]" icon={faLinkedin}/></a></div>          
          </div>
        </div>
        <div className="text-center mt-2">@2023 The balanced wellness</div>
      </div>
      {playVideo && (
        <Overlay>
          <div className="flex justify-center items-center w-full h-full relative">
            <ReactPlayer
              url={playUrl}
              controls
              width="1000px"
              height="auto"
              playing
            />
            <div
              onClick={() => setPlayVideo(false)}
              className="w-[40px] h-[40px] bg-[#333] rounded-full absolute top-5 right-5 flex items-center justify-center"
            >
              <div className="text-[#fff]">
                <FontAwesomeIcon icon={faClose} />
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </GradientBackground>
  );
};

export default HomePage;
