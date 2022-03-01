import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTimeline } from "../../redux/actions/user";
import Contacts from "./Contacts/Contacts";
import "./Homepage.css";
import SideNav from "./SideNav/SideNav";
import Timeline from "./Timeline/Timeline";
import { io } from "socket.io-client";

const Homepage = () => {
  const dispatch = useDispatch();
  const socket = useRef(io("ws://localhost:5000"));

  const { user, timelineTab } = useSelector((state) => state.userReducer);

  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.current = io("ws://localhost:5000");
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    dispatch(getUserTimeline(user, user.friends, timelineTab));
  }, [dispatch, timelineTab, user]);

  return (
    <div className="Homepage">
      <div className="Homepage-body">
        <SideNav />
        <Timeline />
        <Contacts onlineUsers={onlineUsers} />
      </div>
    </div>
  );
};

export default Homepage;
