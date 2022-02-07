import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Profile.css";
import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfileIndex from "./ProfileIndex/ProfileIndex";
import ProfileUpper from "./ProfileUpper/ProfileUpper";

const Profile = () => {
  const [myProfile, setMyProfile] = useState(true);

  const [selectedTab, setSelectedTab] = useState("posts");

  return (
    <div className="Profile">
      <div className="Profile-body">
        <ProfileUpper
          myProfile={myProfile}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProfileIndex
                myProfile={myProfile}
                setSelectedTab={setSelectedTab}
              />
            }
          />
          <Route path="about" element={<ProfileAbout />} />
          <Route path="friends" element={<ProfileFriends />} />
        </Routes>
      </div>
    </div>
  );
};
export default Profile;
