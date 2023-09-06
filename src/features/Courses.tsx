import React from "react";
import CourseItem from "../components/CourseItem";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Courses: React.FC = () => {
  const CourseWrapper = styled.div`
    background-image: linear-gradient(to bottom, #fdebd0, #d2b4de, #fdebd0);
  `;
  const HeaderContainer = styled.div`
    background-image: url("/meditation-react/images/ahmetoz_microphone_and_love_8640abf2-427c-49ba-9ecb-6d732bca9015.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    background-attachment: fixed;
    width: 100%;
  `;
  return (
    <div>
      <HeaderContainer className="relative pt-90">
        <div className="w-full h-full py-48">
          <div className="text-white text-center">
            <h1 className="text-[48px] font-space-grotesk ">
              Courses: The Digital Nomad Lifestyle Facts
            </h1>
            <span className="font-jost text-[13px] font-[700] uppercase mr-3">
              podcast
            </span>
            <span className="font-jost text-[13px] font-[700] uppercase mr-3">
              <FontAwesomeIcon icon={faCalendar} /> SEPTEMBER 24, 2020
            </span>
            <span className="font-jost text-[13px] font-[700] uppercase mr-3">
              <FontAwesomeIcon icon={faShare} /> share
            </span>
            <span className="font-jost text-[13px] font-[700] uppercase mr-3">
              <FontAwesomeIcon icon={faHeart} /> 1
            </span>
          </div>
        </div>
      </HeaderContainer>
      <CourseWrapper className="sm:p-12 p-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <CourseItem title="Awareness of People Just Like You"/>
          <CourseItem title="Breathing Self-Compassion"/>
          <CourseItem title="Compassion for Your Emotions"/>
          <CourseItem title="Identifying Self-Judgment and Bringing in Self-Compassion."/>
          <CourseItem title="Loving Kindness Meditation, Guided Meditation"/>
          <CourseItem title="Recognizing What You Need, Guided Meditation"/>
        </div>
      </CourseWrapper>
    </div>
  );
};

export default Courses;
