import {
  faCalendar,
  faEnvelope,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import MediaPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  faFacebookF,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TitleWrapper = styled.h3`
  &::after {
    content: " ";
    display: inline-block;
    width: 32px;
    margin-top: 20px;
    border-bottom: 4px solid;
  }
`;

const Container = styled.div`
  background: url("/meditation-react/images/ahmetoz_microphone_and_love_8640abf2-427c-49ba-9ecb-6d732bca9015.jpg")
    center center/cover no-repeat;
  background-attachment: fixed;
`;

const GradientBackground = styled.div`
  width: 100%;
  background: #fdebd0;
  & .rhap_container {
    background: #24212c !important;
    box-shadow: none;
    & .rhap_time {
      color: white !important;
    }
    & .rhap_controls-section {
        margin-top: -40px !important;
    }
  }
`;

const Episode = () => {
  return (
    <GradientBackground>
      <Container className="container mx-auto relative pt-24">
        <div className="w-full h-full py-48">
          <div className="text-white text-center">
            <h1 className="text-[48px] font-space-grotesk ">
              Episode 04: The Digital Nomad Lifestyle Facts
            </h1>
            <span className="font-jost text-[11px] font-[700] uppercase mr-3">
              podcast
            </span>
            <span className="font-jost text-[11px] font-[700] uppercase mr-3">
              <FontAwesomeIcon icon={faCalendar} /> SEPTEMBER 24, 2020
            </span>
            <span className="font-jost text-[11px] font-[700] uppercase mr-3">
              <FontAwesomeIcon icon={faShare} /> share
            </span>
            <span className="font-jost text-[11px] font-[700] uppercase mr-3">
              <FontAwesomeIcon icon={faHeart} /> 1
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 right-[calc(50%-370px)] flex mb-[-50px] w-[740px] mx-auto bg-[#24212c] rounded-xl pr-3 shadow-[rgba(33,33,33,0.4)_0px_0px_30px_6px]">
          <img
            src="/meditation-react/images/laughman.jpg"
            alt="laughman"
            className="w-[150px] h-[150px] rounded-l-xl"
          />
          <MediaPlayer src="/meditation-react/audio/3.mp3" className="text-white" />
        </div>
      </Container>
      <div className="max-w-[740px] mx-auto font-['Sen'] text-[#444] text-[16px] mt-20 ">
        <div className="uppercase flex text-[13px] font-[600] mt-5 mb-8">
          <a
            href="https://themes.pixelwars.org/podify/demo-01/podcast-download/119/episode-04-the-digital-nomad-lifestyle-facts.mp3?ref=download"
            className=" bg-[#00000021] text-[rgba(0,0,0,54%)] px-[12px] py-[2px] rounded-[12px] mr-5"
          >
            Download file
          </a>
          <a
            href="https://themes.pixelwars.org/podify/demo-01/podcast-download/119/episode-04-the-digital-nomad-lifestyle-facts.mp3?ref=new_window"
            className=" bg-[#00000021] text-[rgba(0,0,0,54%)] px-[12px] py-[2px] rounded-[12px]"
          >
            play in new window
          </a>
        </div>
        <p className="mb-[20px]">
          Perhaps, but perhaps your civilization is merely the sewer of an even
          greater society above you! I feel like I was mauled by Jesus. Stop!
          Don’t shoot fire stick in space canoe! Cause explosive decompression!
        </p>
        <p className="mb-[20px]">
          Well, let’s just dump it in the sewer and say we delivered it. Fry,
          you can’t just sit here in the dark listening to classical music. The
          alien mothership is in orbit here. If we can hit that bullseye, the
          rest of the dominoes will fall like a house of cards. Checkmate.
        </p>
        <p className="mb-[20px]">
          Fatal. Daddy Bender, we’re hungry. And so we say goodbye to our
          beloved pet, Nibbler, who’s gone to a place where I, too, hope one day
          to go. The toilet. Well, thanks to the Internet, I’m now bored with
          sex. Is there a place on the web that panders to my lust for violence?
        </p>
        <h3 className="text-[20px] font-jost font-[700] text-[#222] mt-5 mb-2 ">
          Guests
        </h3>
        <p className="mb-[30px]">
          Special thanks to{" "}
          <a
            className="underline text-red-500"
            href="https://twitter.com/elonmusk"
          >
            @elonmusk
          </a>
          and{" "}
          <a
            className="underline text-red-500"
            href="https://twitter.com/photomatt"
          >
            Matt Mullenweg
          </a>{" "}
          for joining this amazing episode.
        </p>
        <h3 className="uppercase text-[14px] font-jost font-[700] tracking-[2px] text-[#222]">
          - share this
        </h3>
        <div className="flex mb-12">
          <a
            href="https://www.facebook.com/sharer.php?u=https://themes.pixelwars.org/podify/demo-01/episode-04-the-digital-nomad-lifestyle-facts/&amp;t=Episode%2004:%20The%20Digital%20Nomad%20Lifestyle%20Facts"
            className="bg-white py-[12px] px-[16px] mr-2 text-[12px]"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Currently%20reading:%20'Episode%2004:%20The%20Digital%20Nomad%20Lifestyle%20Facts'%20on%20https://themes.pixelwars.org/podify/demo-01/episode-04-the-digital-nomad-lifestyle-facts/"
            className="bg-white py-[12px] px-[16px] mr-2 text-[12px]"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://pinterest.com/pin/create/button/?url=https://themes.pixelwars.org/podify/demo-01/episode-04-the-digital-nomad-lifestyle-facts/&amp;media=https://themes.pixelwars.org/podify/demo-01/wp-content/uploads/sites/2/2020/09/stewart-maclean-SdADWrJACd0-unsplash.jpg&amp;description=Episode%2004:%20The%20Digital%20Nomad%20Lifestyle%20Facts"
            className="bg-white py-[12px] px-[16px] mr-2 text-[12px]"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a
            href="mailto:?subject=I%20wanted%20you%20to%20see%20this%20post&amp;body=Check%20out%20this%20post:%20Episode%2004:%20The%20Digital%20Nomad%20Lifestyle%20Facts%20-%20https://themes.pixelwars.org/podify/demo-01/episode-04-the-digital-nomad-lifestyle-facts/"
            className="bg-white py-[12px] px-[16px] mr-2 text-[12px]"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
        <div className="mt-16 grid grid-cols-2">
          <div className="col py-[12px] pr-[20px]">
            <a
              className="flex"
              href="https://themes.pixelwars.org/podify/demo-01/episode-03-dating-as-a-digital-nomad/"
            >
              <img
                className="w-[110px] h-[110px] rounded-full"
                src="/meditation-react/images/hong-nguyen-fTsmxmjwvUk-unsplash-300x300.jpg"
                alt="hong"
              />
              <div className="flex flex-col pt-4 ml-6">
                <h4 className="mb-[4px] font-bold text-[12px] opacity-[.36] uppercase font-jost text-[#222] tracking-[3px]">
                  Previous Post
                </h4>
                <h2 className="text-[18px] font-[700]">
                  <span>←</span> Episode 03: Dating As a Digital Nomad
                </h2>
              </div>
            </a>
          </div>
          <div className="col py-[12px] pl-[20px]">
            <a
              className="flex"
              href="https://themes.pixelwars.org/podify/demo-01/episode-03-dating-as-a-digital-nomad/"
            >
              <div className="flex flex-col pt-4 mr-6 text-end">
                <h4 className="mb-[4px] font-bold text-[12px] opacity-[.36] uppercase font-jost text-[#222] tracking-[3px]">
                  Previous Post
                </h4>
                <h2 className="text-[18px] font-[700]">
                  Episode 05: The Dark Side of Being an Expat <span>→</span>
                </h2>
              </div>
              <img
                className="w-[110px] h-[110px] rounded-full"
                src="/meditation-react/images/martin-sanchez-sp28h4ugLts-unsplash-300x300.jpg"
                alt="hong"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <TitleWrapper className="pl-[20px] uppercase font-[700] text-[13px] font-jost tracking-[3px]">
          <div>
            <span className="w-full">You May Also like</span>
          </div>
        </TitleWrapper>
        <div className="grid grid-cols-3">
          <div className="col p-[20px] hover:cursor-pointer">
            <img src="/meditation-react/images/b-04.jpg" alt="b4" />
            <h3 className="text-[#444] font-jost font-[700] text-[11px] text-center my-3 uppercase">
              <FontAwesomeIcon icon={faCalendar} /> NOVEMBER 24, 2020
            </h3>
            <h4 className="text-center text-[20px] font-[700] font-space-grotesk">
              An honest guide to the San Francisco startup life
            </h4>
          </div>
          <div className="col p-[20px] hover:cursor-pointer">
            <img src="/meditation-react/images/di_an_h-CjCT-R7wrZ8-unsplash.jpg" alt="b4" />
            <h3 className="text-[#444] font-jost font-[700] text-[11px] text-center my-3 uppercase">
              <FontAwesomeIcon icon={faCalendar} /> NOVEMBER 24, 2020
            </h3>
            <h4 className="text-center text-[20px] font-[700] font-space-grotesk">
              An honest guide to the San Francisco startup life
            </h4>
          </div>
          <div className="col p-[20px] hover:cursor-pointer">
            <img src="/meditation-react/images/bb-01.jpg" alt="b4" />
            <h3 className="text-[#444] font-jost font-[700] text-[11px] text-center my-3 uppercase">
              <FontAwesomeIcon icon={faCalendar} /> NOVEMBER 24, 2020
            </h3>
            <h4 className="text-center text-[20px] font-[700] font-space-grotesk">
              An honest guide to the San Francisco startup life
            </h4>
          </div>
        </div>
      </div>
      <div className="text-center tracking-[3px] font-[700] font-jost py-4">
        ©2023 THE LAUGH FACTORY
      </div>
    </GradientBackground>
  );
};

export default Episode;
