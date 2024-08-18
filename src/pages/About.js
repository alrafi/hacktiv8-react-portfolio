import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="w-full text-[#28282a]">
        <p className="text-4xl font-medium mb-6">About Me</p>
        <img src="/code.svg" alt="" className="h-48 my-8" />
        <p className="mb-2 font-light">
          Hello! I’m <strong>Hafis Irsal</strong>, a passionate{" "}
          <strong>Software Engineer</strong> with a flair for transforming
          complex problems into elegant solutions. With a background in
          front-end development and a strong command of HTML, CSS, and
          JavaScript, I specialize in creating seamless and user-friendly
          experiences.
        </p>

        <p className="mb-2 font-light">
          I currently work at a <strong>leading national company</strong> in
          Indonesia, where I focus on building and optimizing web applications.
          My day-to-day involves tackling tricky layout issues, managing
          routing, and ensuring that every detail contributes to a smooth user
          journey.
        </p>

        <p className="mb-2 font-light">
          When I’m not coding, you’ll find me enjoying a good cup of{" "}
          <strong>coffee</strong> or watching <strong>movies</strong>. These are
          my perfect escapes from the world of algorithms and frameworks. I
          believe in maintaining a balance between my professional and personal
          life, and I bring the same enthusiasm to both.
        </p>

        <p className="mb-2 font-light">
          I’m always eager to learn <strong>new technologies</strong> and tackle
          new challenges, so feel free to connect if you’d like to chat about
          tech, share insights, or just talk about the latest films!
        </p>
      </div>
    );
  }
}
