import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div className="w-full text-[#28282a]">
        <p className="text-4xl font-medium mb-6">Skill</p>
        <img src="/skill.svg" alt="" className="h-48 my-8" />
        <p className="">
          I thrive in the world of technology, combining creativity with
          technical prowess. My key skills include:
        </p>

        <ul className="max-w-xl space-y-1 text-gray-500 list-disc list-inside ml-6 my-4">
          <li>
            <strong>Front-End Development</strong>: Expertise in HTML, CSS, and
            JavaScript to build responsive and dynamic web applications.
          </li>
          <li>
            <strong>Frameworks & Libraries</strong>: Proficient in React and
            other modern libraries for creating efficient, scalable interfaces.
          </li>
          <li>
            <strong>Problem Solving</strong>: Adept at debugging and optimizing
            code to deliver seamless user experiences.
          </li>
          <li>
            <strong>UI/UX Design</strong>: Focused on crafting intuitive and
            engaging interfaces that enhance user satisfaction.
          </li>
        </ul>

        <p className="">
          With a keen eye for detail and a passion for learning, I’m always
          ready to tackle new challenges and drive innovation.
        </p>
      </div>
    );
  }
}
