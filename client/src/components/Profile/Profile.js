import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./Profile.css";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfileIndex from "./ProfilePosts/ProfileIndex";
import ProfileUpper from "./ProfileUpper/ProfileUpper";

const Profile = () => {
  const [myProfile, setMyProfile] = useState(true);

  return (
    <div className="Profile">
      <div className="Profile-body">
        <ProfileUpper myProfile={myProfile} />
        <Routes>
          <Route path="/" element={<ProfileIndex myProfile={myProfile} />} />
          <Route path="about" element={<ProfileAbout />} />
          <Route path="friends" element={<ProfileFriends />} />
        </Routes>
      </div>
    </div>
  );
};
export default Profile;
