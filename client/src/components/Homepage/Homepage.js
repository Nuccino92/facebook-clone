import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTimeline } from "../../redux/actions/user";
import Contacts from "./Contacts/Contacts";
import "./Homepage.css";
import SideNav from "./SideNav/SideNav";
import Timeline from "./Timeline/Timeline";
import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "https://facebook-clone-production.up.railway.app/";

const Homepage = () => {
  const dispatch = useDispatch();

  const { user, timelineTab } = useSelector((state) => state.userReducer);

  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  useEffect(() => {
    socket.emit("addUser", user._id);
    socket.on("getUsers", (users) => {
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
