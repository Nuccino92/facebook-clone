import "./ProfileAbout.css";
import React from "react";
import About from "../About/About";
import Friends from "../Friends/Friends";

const ProfileAbout = ({ user, friendStatus, myProfile }) => {
  return (
    <div className="ProfileAbout">
      <About user={user} friendStatus={friendStatus} myProfile={myProfile} />
      <Friends user={user} myProfile={myProfile} />
    </div>
  );
};

export default ProfileAbout;
