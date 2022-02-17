import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useParams, Navigate } from "react-router-dom";

import "./Profile.css";

import ClipLoader from "react-spinners/ClipLoader";

import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfileIndex from "./ProfileIndex/ProfileIndex";
import ProfileUpper from "./ProfileUpper/ProfileUpper";
import NotFound from "../ErrorPages/NotFound";
import {
  checkFriendStatus,
  checkMyProfile,
  getFriendsInfo,
  getUser,
} from "../../redux/actions/viewedUser";
import { getUserPosts } from "../../redux/actions/post";

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();

  // logged in user
  const { user } = useSelector((state) => state.userReducer);
  // the user being viewed, this user could the the logged in user as well
  const { viewedUser } = useSelector((state) => state.viewedUserReducer);

  //  identifying which tab is selected
  const [selectedTab, setSelectedTab] = useState("posts");

  // grabs the user being viewed
  useEffect(() => {
    dispatch(getUser(params.id));
  }, [dispatch, params]);

  useEffect(() => {
    if (viewedUser !== null) {
      const data = [viewedUser._id, user._id];
      const friendData = [user.friends, viewedUser._id];

      dispatch(getFriendsInfo(viewedUser._id, viewedUser.friends));
      dispatch(getUserPosts(viewedUser._id, viewedUser.posts));
      dispatch(checkMyProfile(data));
      dispatch(checkFriendStatus(friendData));
    }
  }, [dispatch, user._id, user.friends, viewedUser]);

  //making sure nav tab is selected correctly
  useEffect(() => {
    const tab = Object.values(params)[1];
    if (tab === "") {
      setSelectedTab("posts");
    } else if (tab === "about") {
      setSelectedTab("about");
    } else if (tab === "friends") {
      setSelectedTab("friends");
    }
  }, [params, selectedTab]);

  // if the id isnt 24 characters or api call returns null render not found
  return params.id.length !== 24 ? (
    <NotFound />
  ) : viewedUser === null ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader color="rgb(24, 119, 242);" size={100}></ClipLoader>
    </div>
  ) : (
    <div className="Profile">
      <div className="Profile-body">
        <ProfileUpper
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <Routes>
          <Route
            path="/"
            element={<ProfileIndex setSelectedTab={setSelectedTab} />}
          />
          <Route path="about" element={<ProfileAbout />} />
          <Route path="friends" element={<ProfileFriends />} />
          <Route path="/*" element={<Navigate replace to="/*" />} />
        </Routes>
      </div>
    </div>
  );
};
export default Profile;
