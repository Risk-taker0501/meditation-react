import { faBook, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import ReactStars from "react-stars";

const CourseItem = () => {
  return (
    <div className="max-w-[450px] bg-white hover:bg-red-600 transition-colors duration-500 p-8 border-gray-200 rounded-xl shadow-[rgba(33,33,33,0.4)_0px_0px_5px_1px] dark:bg-gray-800 dark:border-gray-700 group">
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="object-cover  sm:w-fill h-[300px] group-hover:scale-110 transition-all duration-500"
          src="/meditation-reactimages/course21.jpg"
          alt=""
          loading="lazy"
        />
        <div className="absolute right-0 top-[80px] h-10 w-[180px] rounded-l-lg bg-blue-800 hover:bg-white hover:text-blue-800 transition duration-500 text-white opacity-0 group-hover:opacity-100">
          <Link
            to="/meditation-react"
            rel="tag"
            className="flex justify-center items-center h-full"
          >
            Computer Science
          </Link>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex flex-row items-center text-yellow-500 text-[14px] font-bold group-hover:text-white">
          <span>5&nbsp;</span>
          <ReactStars
            edit={false}
            color1="#ffc107"
            color2="gray"
            count={5}
            size={20}
          />
          <span>&nbsp;{"(1)"}</span>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white dark:text-white">
          Web Designing
        </h5>
        <p className="mb-3 font-normal text-gray-700 group-hover:text-white dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex flex-col sm:flex-row text-[14px] text-red-600 group-hover:text-white transition-colors duration-1000 font-medium mb-4">
          <div className="mr-8">
            <FontAwesomeIcon icon={faClock} size={"sm"} />
            <span className="ml-1">12Hrs 30Mins</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBook} size={"sm"} />
            <span className="ml-1">3 Curriculum</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="">
            <span className="font-bold text-[30px] mr-2 group-hover:text-white">
              $45
            </span>
            <span className="font-bold line-through text-red-600 group-hover:text-white">
              $50
            </span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition duration-500">
            <Link
              to="/meditation-react"
              className="flex items-center justify-center rounded-full text-center hover:bg-blue-800 transition-colors duration-500 bg-white w-[150px] h-10 font-bold hover:text-white text-black"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
