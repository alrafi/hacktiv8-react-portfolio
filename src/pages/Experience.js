import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div className="w-full text-[#28282a]">
        <p className="text-4xl font-medium mb-6">Experience</p>

        <ol className="relative border-s border-gray-200 ">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              2021 - Now
            </time>
            <h3 className="text-lg font-semibold text-gray-900 ">Telkomsel</h3>
            <p className="mb-4 text-base font-normal text-gray-500 ">
              IT Directorate
            </p>
            <a
              href="https://telkomsel.com"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-500 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-red-500 "
              rel="noopener"
              target="_blank"
            >
              Visit TSEL{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 ">TapTalk</h3>
            <p className="text-base font-normal text-gray-500 ">
              Software Developer
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
              2018 - 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 ">
              Institut Teknologi Bandung
            </h3>
            <p className="text-base font-normal text-gray-500 ">
              Lecture Assistant
            </p>
          </li>
        </ol>
      </div>
    );
  }
}
