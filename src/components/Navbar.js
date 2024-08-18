import React, { Component } from "react";
import NavLink from "./NavLink";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <nav className="w-32 md:w-56 bg-[#212121] min-h-screen fixed top-0 flex flex-col justify-between md:px-8 px-4 text-white items-center pt-32 pb-32 md:pb-10">
        <div className="">
          <img
            src="/hafis.jpeg"
            alt=""
            className="rounded-full -top-5 relative"
          />
          <div className="flex flex-col items-center space-y-3 uppercase font-light">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/skill">Skill</NavLink>
            <NavLink to="/interest">Interest</NavLink>
            <NavLink to="/award">Award</NavLink>
          </div>
        </div>
        <p className="text-sm md:text-xl font-light">
          {this.state.date.toLocaleTimeString()}
        </p>
      </nav>
    );
  }
}
