import React, { Component } from "react";

export default class Award extends Component {
  render() {
    return (
      <div className="w-full text-[#28282a]">
        <p className="text-4xl font-medium mb-6">Award</p>
        <img src="/award.svg" alt="" className="h-48 my-8" />
        <p className="">
          I'm honored to have received recognition for my work in software
          engineering. These awards reflect my dedication to excellence and
          innovation in the field. They include:
        </p>

        <ul className="max-w-xl space-y-1 text-gray-500 list-disc list-inside ml-6 my-4">
          <li>
            <strong>YOLO Github Ahchievement</strong>: You want it? You merge
            it.
          </li>
          <li>
            <strong>Pull Shark Github Achievement</strong>: Opened pull requests
            that have been merged.
          </li>
          <li>
            <strong>Arctic Code Vault Contributor</strong>: contributed code to
            3 repositories in the 2020 GitHub Archive Program.
          </li>
        </ul>

        <p className="">
          These accolades motivate me to continue pushing the boundaries and
          striving for excellence in every project I undertake.
        </p>
      </div>
    );
  }
}
