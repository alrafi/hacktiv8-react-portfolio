import React, { Component } from "react";

export default class Interest extends Component {
  render() {
    return (
      <div className="w-full text-[#28282a]">
        <p className="text-4xl font-medium mb-6">Interest</p>
        <img src="/interest.svg" alt="" className="h-48 my-8" />
        <p className="mb-2 font-light">
          When I’m not immersed in code, I’m exploring my other passions. I’m a
          coffee aficionado who loves discovering new blends and brewing the
          perfect cup. Movies are another favorite pastime; I enjoy everything
          from classic films to the latest blockbusters. These hobbies keep me
          inspired and offer a creative break from my tech-driven world. Whether
          it’s diving into a captivating film or savoring a rich espresso, I
          find joy and relaxation in these simple pleasures.
        </p>
      </div>
    );
  }
}
