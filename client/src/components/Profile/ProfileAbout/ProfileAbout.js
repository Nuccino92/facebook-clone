import "./ProfileAbout.css";
import React from "react";
import About from "../About/About";
import Friends from "../Friends/Friends";

const ProfileAbout = () => {
  return (
    <div className="ProfileAbout">
      <About />
      <Friends />
    </div>
  );
};

export default ProfileAbout;
