/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  faSpotify,
  faGooglePlus,
  faSoundcloud,
  faMixcloud,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPodcast,
  faQuoteRightAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GradientBackground = styled.div`
  width: 100%;
  background-image: linear-gradient(to bottom, #fdebd0, #d2b4de, #fdebd0);
`;

interface ArrowProps {
  className?: string;
  onClick?: React.MouseEventHandler;
  style?: any;
}

const PrevArrow = (props: ArrowProps) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, left: "210px", zIndex: 2 }}
      onClick={onClick}
    />
  );
};
const NextArrow = (props: ArrowProps) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, right: "210px", zIndex: 2 }}
      onClick={onClick}
    />
  );
};

const HomePage: React.FC = () => {
  return (
      <GradientBackground >
        <div className="container mx-auto px-[50px] pt-24 md:pt-40">
          <div className="md:mx-auto md:max-w-[1140px] lg:mx-auto lg:max-w-container-lg">
            <div className="flex md:flex-row flex-col-reverse">
              <div className="lg:max-w-[710px] lg:pt-150 lg:pr-[150px]">
                <div className="relative mb-8">
                  <p className="md:text-start text-center mt-8 md:mt-0 text-[#CBA789] text-md font-jost font-bold tracking-[1.8px]">
                    Welcome to
                  </p>
                  <p className="font-bold text-center md:text-start font-space-grotesk md:text-5xl text-[22px] relative z-10">
                    The Laugh{" "}
                    <span className="text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-blue-500">
                      Factory
                    </span>
                  </p>
                  <span className="absolute font-archivo md:text-[90px] text-[40px] font-bold drop-shadow-md opacity-50 text-white leading-[120px] top-1/3 left-[40px] md:left-1/3 z-0">
                    podcast
                  </span>
                </div>
                <p className="font-jost text-center md:text-start text-xl mb-[20px] relative z-10">
                  {" "}
                  It&#39;s a show about the life of the digital nomads all over
                  the world and what they struggle with or what happens to them
                  when they travel.
                </p>
                <div className="mt-12">
                  <h3 className="text-[#AD9DC5] text-[15px] uppercase tracking-[2.5px] font-[600] font-['Jost'] mb-3 text-center md:text-start">
                    Listen & Subscribe On:
                  </h3>
                  <div className="flex flex-wrap md:justify-start justify-center">
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
              <div>
                <img
                  src="images/laughman.jpg"
                  alt="photo"
                  className="mx-auto rounded-2xl w-[455px] h-auto shadow-[1px_18px_36px_-9px_rgba(223.3645935058594,110.79569661052766,23.56388967513289,0.65)]"
                />
              </div>
            </div>
            <div className="md:mb-40">
              <div>
                <h1 className="text-[26px] text-[#8A7A8A] font-[700]">
                  Latest Episodes
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 mt-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <div className="flex justify-between mb-12 flex-wrap">
              <div>
                <h4 className="text-[#AD9DC5] text-[15px] uppercase font-[500] font-['Jost'] tracking-[2.5px]">
                  - Meet Your Host
                </h4>
                <p className="text-[#444] font-['Sen'] text-[16px] leading-loose">
                  Get to know me.
                </p>
              </div>
              <div className="md:w-2/3 w-full lg:pl-[100px]">
                <h1 className="text-[#121212] font-[700] md:text-[40px] text-[20px]">
                  I am the guy behind the show, podcasting since ’99.
                </h1>
              </div>
            </div>
            <div className="md:flex">
              <div className="md:w-3/5 w-full md:pr-[150px]">
                <h1 className="font-['Jost'] text-[#29282A] tracking-[3px] text-[20px] font-[500] uppercase mb-6">
                  HELLO, I AM JASON, YOUR HOST.
                </h1>
                <p className="text-[#444] font-['Sen'] text-[16px] leading-loose mb-8">
                  Leave that to me. Send a distress signal, and inform the
                  Senate that all on board were killed. Dantooine. They’re on
                  Dantooine. The plans you refer to will soon be back in our
                  hands. Alderaan? I’m not going to Alderaan. I’ve got to go
                  home.
                </p>
                <p className="text-[#444] font-['Sen'] text-[16px] leading-loose mb-8">
                  I find your lack of faith disturbing. Kid, I’ve flown from one
                  side of this galaxy to the other. I’ve seen a lot of strange
                  stuff, but I’ve never seen anything to make me believe there’s
                  one all-powerful Force controlling everything. There’s no
                  mystical energy field that controls my destiny. It’s all a lot
                  of simple tricks.
                </p>
                <h2 className="text-[#771CAB] font-loversQuarrel text-[46px]">
                  Jason Harshall
                </h2>
                <div></div>
              </div>
              <div className="md:w-2/5">
                <img
                  className="rounded-[20px]"
                  src="/meditation-react/images/ahmetoz_a_podcaster_man_with_a_microphone_with_podcast_title_on_af476cf5-1cfa-4f49-b667-cbe872b36fad-768x768.jpg"
                  alt="jason"
                />
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
        <Slider
          className="md:mb-40 mb-20"
          centerMode={true}
          infinite={true}
          speed={500}
          centerPadding="220px"
          slidesToShow={1}
          slidesToScroll={1}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                nextArrow: <></>,
                prevArrow: <></>,
              },
            },
          ]}
        >
          <div className="px-10">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="font-[400] text-[#AE85DA] text-[48px]"
                icon={faQuoteRightAlt}
              />
            </div>
            <h1 className="font-['Jost'] md:text-[37px] font-[400] tracking-0 text-[#7D4A92] text-center">
              I love this show, by far from the countries Vokalia and
              Consonantia. I am really looking forward to work together for the
              next project.
            </h1>
            <div>
              <img
                className="h-[80px] w-[80px] mx-auto rounded-full mt-8 mb-3"
                src="/meditation-react/images/shamim-nakhaei-u6oXAJWx4sE-unsplash.jpg"
                alt="face"
              />
              <h1 className="text-center uppercase text-[#7B5E93] text-[16px] font-[700] font-['Sen']">
                richard han
              </h1>
              <h3 className="text-center text-[#583D968A] text-[16px] font-[400] font-['Sen']">
                CTO at Dporbox
              </h3>
            </div>
          </div>
          <div className="px-10">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="font-[400] text-[#AE85DA] text-[48px]"
                icon={faQuoteRightAlt}
              />
            </div>
            <h1 className="font-['Jost'] md:text-[37px] font-[400] tracking-0 text-[#7D4A92] text-center">
              I love this show, by far from the countries Vokalia and
              Consonantia. I am really looking forward to work together for the
              next project.
            </h1>
            <div>
              <img
                className="h-[80px] w-[80px] mx-auto rounded-full mt-8 mb-3"
                src="/meditation-react/images/shamim-nakhaei-u6oXAJWx4sE-unsplash.jpg"
                alt="face"
              />
              <h1 className="text-center uppercase text-[#7B5E93] text-[16px] font-[700] font-['Sen']">
                richard han
              </h1>
              <h3 className="text-center text-[#583D968A] text-[16px] font-[400] font-['Sen']">
                CTO at Dporbox
              </h3>
            </div>
          </div>
          <div className="px-10">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="font-[400] md:text-[#AE85DA] text-[48px]"
                icon={faQuoteRightAlt}
              />
            </div>
            <h1 className="font-['Jost'] md:text-[37px] font-[400] tracking-0 text-[#7D4A92] text-center">
              I love this show, by far from the countries Vokalia and
              Consonantia. I am really looking forward to work together for the
              next project.
            </h1>
            <div>
              <img
                className="h-[80px] w-[80px] mx-auto rounded-full mt-8 mb-3"
                src="/meditation-react/images/shamim-nakhaei-u6oXAJWx4sE-unsplash.jpg"
                alt="face"
              />
              <h1 className="text-center uppercase text-[#7B5E93] text-[16px] font-[700] font-['Sen']">
                richard han
              </h1>
              <h3 className="text-center text-[#583D968A] text-[16px] font-[400] font-['Sen']">
                CTO at Dporbox
              </h3>
            </div>
          </div>
          <div className="px-10">
            <div className="flex justify-center">
              <FontAwesomeIcon
                className="font-[400] text-[#AE85DA] text-[48px]"
                icon={faQuoteRightAlt}
              />
            </div>
            <h1 className="font-['Jost'] md:text-[37px] font-[400] tracking-0 text-[#7D4A92] text-center">
              I love this show, by far from the countries Vokalia and
              Consonantia. I am really looking forward to work together for the
              next project.
            </h1>
            <div>
              <img
                className="h-[80px] w-[80px] mx-auto rounded-full mt-8 mb-3"
                src="/meditation-react/images/shamim-nakhaei-u6oXAJWx4sE-unsplash.jpg"
                alt="face"
              />
              <h1 className="text-center uppercase text-[#7B5E93] text-[16px] font-[700] font-['Sen']">
                richard han
              </h1>
              <h3 className="text-center text-[#583D968A] text-[16px] font-[400] font-['Sen']">
                CTO at Dporbox
              </h3>
            </div>
          </div>
        </Slider>
        <div>
          <div className="text-[#4D2687C4] font-[700] font-spaceGrotesk md:text-[48px] text-[32px] text-center mb-24">
            <h1>Our Sponsors</h1>
            <h3 className="uppercase font-['San'] text-[#AD9DC5] text-[15px] font-[500] tracking-[2.5px]">
              BRANDS THAT SUPPORT US.
            </h3>
          </div>
          <Slider
            dots={true}
            centerMode={true}
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            nextArrow={<></>}
            prevArrow={<></>}
            className="mb-56 mt-12"
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  centerMode: false,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                },
              },
            ]}
          >
            <div className="!flex justify-center">
              <div className="mr-5 sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />1
              </div>
              <div className="sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />2
              </div>
            </div>
            <div className="!flex justify-center">
              <div className="mr-5 sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />1
              </div>
              <div className="sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />2
              </div>
            </div>
            <div className="!flex justify-center">
              <div className="mr-5 sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />1
              </div>
              <div className="sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />2
              </div>
            </div>
            <div className="!flex justify-center">
              <div className="mr-5 sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />1
              </div>
              <div className="sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />2
              </div>
            </div>
            <div className="!flex mb-5 justify-center">
              <div className="mr-5 sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />1
              </div>
              <div className="sm:h-[170px] h-[130px] w-[130px] sm:w-[166px] p-[32px] flex items-center bg-[#FFFFFF33] shadow-[-4px_8px_17px_-3px_rgba(0,0,0,.1)] rounded-[12%]">
                <img src="/meditation-react/images/logo-08b.png" alt="logo" />2
              </div>
            </div>
          </Slider>
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
        <div className="text-center tracking-[3px] font-[700] font-jost py-4">
          ©2023 THE LAUGH FACTORY
        </div>
      </GradientBackground>
  );
};

export default HomePage;
