import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default class Home extends Component {
  render() {
    return (
      <div className="w-full md:mt-40 mt-24 text-[#28282a]">
        <p className="text-4xl font-light mb-6">Hello, I am 👋</p>
        <p className="text-7xl font-medium mb-6">Hafis Irsal</p>
        <p className="mb-6 font-light">
          I’m a Software Engineer who enjoys transforming code into seamless,
          user-friendly experiences. When I’m not solving technical puzzles,
          you’ll probably find me with a cup of coffee in hand, watching a good
          movie. I have a knack for problem-solving and a passion for writing
          clean, maintainable code.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/alrafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="https://linkedin.com/in/hafisalrafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a
            href="https://instagram.com/hafisalrafi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    );
  }
}
